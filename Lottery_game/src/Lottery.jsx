import { useState } from "react"
import { getticket , Setticket } from "./data"

export default function Lottery(){
  const[ticket , setticket] = useState(getticket(3))

  let iswinnig = Setticket(ticket) === 15;

  function Lotterbtn(){
    setticket(getticket(3))
  }
  return(
    <>
    <h1>Lottery game</h1>
    <div className="lottery" style={{border:"1px solid white"}}>
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
    </div>
    <div>
      <br />
      <br />
      <button onClick={Lotterbtn}>click and get</button>
      <h2>{iswinnig && "conguralation you are winning"}</h2>
    </div>
    
    </>
  )
}