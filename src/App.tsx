// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useEffect, useState } from "react"
import Navbar from "./components/navbar"
import { SelectedPage } from "./shared/types"
import Home from "./components/home"
import Benifits from "./components/benifits"




function App() {
  const [selectedPage, setSelectedPage] =  useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0){
        setIsTopOfPage(false)

      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className=" bg-gray-20">
       <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
       <Home setSelectedPage={setSelectedPage}/>
       <Benifits setSelectedPage={setSelectedPage}/>
      </div>
    </>
  )
}

export default App
