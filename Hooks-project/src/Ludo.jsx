import { useState } from "react"

export function LudoButton(){

  const [Moves , SetMoves] = useState({blue:0 , red:0 , green:0 , yellow:0})

let Upadate = ()=>{
  SetMoves((prevMoves)=>{
return { ...prevMoves, Blue: prevMoves.blue += 1  }
  })

 
}

let Upadategreen = ()=>{
  SetMoves((prevMoves)=>{
return { ...prevMoves, Green: prevMoves.green += 1  }
  })

 
}


let UpadateY = ()=>{
  SetMoves((prevMoves)=>{
return { ...prevMoves, Yellow: prevMoves.yellow += 1  }
  })

 
}
let Upadatered = () => {
  SetMoves(prevMoves => {
    return { ...prevMoves, red: prevMoves.red + 1 }
  })
}





  return(
    <div>
    <h1 className="text-black font-bold text-2xl ">Ludo game</h1>
    <div className="ludo mt-4 ">
      <p>Blue moves = {Moves.blue}</p>
      <button onClick={Upadate} className="bg-blue-700 py-2 px-5 text-white rounded mb-2">Blue</button>
      <p>Green moves = {Moves.green}</p>
      <button onClick={Upadategreen} className="bg-green-700 py-2 px-5 text-white rounded mb-2">Green</button>
      <p>Yellow moves = {Moves.yellow}</p>
      <button onClick={UpadateY} className="bg-yellow-400 py-2 px-5 text-black rounded mb-2">Yellow</button>
      <p>Red moves = {Moves.red}</p>
      <button onClick={Upadatered} className="bg-red-700 py-2 px-5 text-white rounded mb-2">red</button>
    </div>
    </div>
  )
   
  
}