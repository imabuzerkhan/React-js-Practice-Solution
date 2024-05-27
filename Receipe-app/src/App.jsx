import Home from "./component/Home"
import Meal from "./component/Meal"
 import './App.css'
import { BrowserRouter as Router , Route , Routes } from "react-router-dom"
import Country from "./component/Country"
import Searchitem from "./component/Searchitem"
function App() {
  

  return (
    <>
    <div className="Main-section">
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path=":idMeal" element ={<Meal/>}/>
        <Route path="/Country/:name" element ={<Country/>}/>
        <Route path='/Searchitem/:searchTerm' element={ <Searchitem />} />

      </Routes>
     </Router>
     </div>
    </>
  )
}

export default App
