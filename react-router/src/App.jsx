import { useState } from "react"
import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import Home from "./component/home/HOme"


function App() {

  const [color,setColor] = useState("olive")

  return (
    <>
      <Header></Header> 
      <Home></Home>
      <Footer></Footer> 
    </>
  )
}

export default App
