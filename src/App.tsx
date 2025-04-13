import Card from "./components/Card"
import Background from "./components/background/Background"
import Logo from "./components/Logo"
import PerfilCard from "./components/PerfilCard"
import SearchInput from "./components/SearchInput"
import useQuery from "./hooks/useQuery"
import { useState } from "react"
import { fetchGitHubProfile } from "./services/queryGitHub"


function App() {
  const [searchProfile, setSearchProfile] = useState("")
  const {error, isLoading, result} = useQuery(fetchGitHubProfile(searchProfile))

  console.log(result)

  return (
    <Background>
      <Card>
        <div className="gap-[27px] w-full flex flex-col items-center">
          <Logo />
          <SearchInput value={searchProfile} setValue={setSearchProfile}/>
          <div className="text-white">
            {searchProfile}
          </div>
          {isLoading && "...Carregando"}
          <button className="text-white">clique</button>
          <PerfilCard></PerfilCard>
        </div>
      </Card>
  </Background>
  )
}

export default App
