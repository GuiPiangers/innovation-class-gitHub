import Card from "./components/Card"
import Background from "./components/background/Background"
import Logo from "./components/Logo"
import PerfilCard from "./components/PerfilCard"
import SearchInput from "./components/SearchInput"


function App() {

  return (
    <Background>
    <Card>
      <div className="gap-[27px] w-full flex flex-col items-center">
        <Logo />
        <SearchInput />
        <PerfilCard></PerfilCard>
      </div>
    </Card>
  </Background>
  )
}

export default App
