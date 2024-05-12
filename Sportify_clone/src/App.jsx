
import './App.css'
import Sidebar from './Component/Sidebar'
import {Player} from './Component/Play'
import { Display } from './Component/Display'

function App() {

  return (
   <div className=' h-screen bg-black  '>
    <div className='h-[90%] flex'>
    <Sidebar></Sidebar>
  </div>
  <Player></Player>

   </div>
  )
}

export default App
