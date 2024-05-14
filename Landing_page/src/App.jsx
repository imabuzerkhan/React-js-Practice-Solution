import { Header } from "./Component/Header"
import Home from "./Component/Home"

function App() {
 

  return (
    <>
      <div className=" min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... px-8 md:px-14 lg:px-36  pb-10 pt-5">

        <Header></Header>
        <Home></Home>
      </div>
    </>
  )
}

export default App
