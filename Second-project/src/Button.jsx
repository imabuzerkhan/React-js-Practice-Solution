function Clickme(){
  console.log("hello world")
}

export function Button(){
  return(
    <div>
      <button onClick={Clickme} >
        click me 
      </button>
      {/* <p onClick={Clickme}>Who are you buddy</p> */}
      <p onMouseOver={Clickme}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet doloribus error laboriosam corporis maiores delectus natus quia. Mollitia quis odio eligendi voluptatem, nostrum error nobis quaerat eveniet delectus ratione.</p>
      <button onDoubleClick={Clickme}>Doubleclick</button>
    </div>
    
  )
}

