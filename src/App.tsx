import Card from "./components/Card"
import Background from "./components/background/Background"
import Logo from "./components/Logo"
import Spinner from "./components/Spinner"
import ProfileCard from "./components/ProfileCard"
import SearchInput from "./components/SearchInput"
import { useState } from "react"
import useQuery from "./hooks/useQuery"
import { fetchGitHubProfile } from "./services/queryGitHub"



function App() {

  const [profile, setProfile] = useState<{
    name: string;
    avatarUrl: string;
    bio: string;
  }>()

  const {query, error, isLoading} = useQuery(async (profileName: string) => {
    const result = await fetchGitHubProfile(profileName)
    setProfile(result)
})
  console.log(isLoading)
  return (
    <Background>
      <div className="min-h-[537px] w-full max-w-[1156px] bg-black p-10 flex flex-col items-center">
        <div className="gap-[27px] w-full flex flex-col items-center">
          <Logo />
          
          <SearchInput queryFn={query}/>

          {error && 
            <Card className="justify-center">
              <p className="text-error text-xl text-center">{error.message}</p>
            </Card>
          }

          {isLoading && 
            <Card className="justify-center">
              <Spinner />
            </Card>
          }

          {!error && !isLoading && profile && <ProfileCard {...profile} />}
        </div>
      </div>
  </Background>
  )
}

export default App
