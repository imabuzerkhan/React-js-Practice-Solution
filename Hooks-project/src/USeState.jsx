import { useState } from 'react'





export function Counter(){
  
 const [count , setcount]= useState(0)
  
    function incCount(){
      setcount(count+1);
  
    }
    function Deccount(){
      setcount(count>0 ? count-1 : null);
  
    }

  return(
    <div>
      <h1 >Counter = {count}</h1>
      <button onClick={incCount}>Increase count</button>
      <button onClick={Deccount}>Decrese counter</button>
    </div>
  )
 
}