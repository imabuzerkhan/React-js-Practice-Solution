import Home from "./component/Home"
import Meal from "./component/Meal"
 import './App.css'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
function App() {
  

  return (
    <>
    <div className="Main-section">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path=":idMeal" element ={<Meal/>}/>
      </Routes>
     </Router>
     </div>
    </>
  )
}

export default App
