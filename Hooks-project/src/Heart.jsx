import { useState } from "react"

export function LikeHeart(){

  let [likeheart , Setlikeheart] = useState(false);
  let [likecount , setlikecount] = useState(0)

 let Likefun = ()=>{
  Setlikeheart(!likeheart)
  setlikecount(!likecount ? likecount + 1 : likecount - 1)
 } 

 let styles = {
  fontSize:"30px",
  color: "red"
 }

  return(
    <div >
      <h1>like buuton for something else</h1>
      <p onClick={Likefun}>
        {!likeheart ?
        <i style={{ fontSize:"30px"}} className="fa-regular fa-heart"></i>: <i style={styles} className="fa-solid fa-heart"></i>}
        
        </p>
        <p  onClick={Likefun}>Set count   {likecount}</p>
    </div>
  )
}