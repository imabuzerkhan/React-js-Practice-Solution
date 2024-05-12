import { useState } from "react"
import {v4 as uuidv4} from "uuid"

export function NewFile(){

  let [Todos , SetTodos] = useState([{task: "simple todo" , id : uuidv4() , isdone:false  }])
  let [Newtodo , SetNewtodo] = useState("")

  // ! Add value in todo
  function AddValue(){
SetTodos([...Todos , {task:Newtodo , id: uuidv4() , isdone:false }])
SetNewtodo("")
  }
  // ! updated array
  function UpdateValue(e){
SetNewtodo(e.target.value)
  }
  // ! deleting array 
  function DeleteTodo(id){
SetTodos((Prevtodo) => Todos.filter((Prevtodo)=> Prevtodo.id != id))
  }
// ! update uppercase to all the value
  const UpperCase = () => {
    SetTodos((PrevTodos)=>{
    return  PrevTodos.map((Todo) =>{
return{
  ...Todo,
  task: Todo.task.toUpperCase(),
}
      });
 });
  };

// ! update uppercase one by one 
 const Udateone = (id) => {
SetTodos((PrevTodos)=>{
  return PrevTodos.map((Todo)=>{
if(Todo.id === id){
  return{
    ...Todo,
    task: Todo.task.toUpperCase(),
  }
}else{
  return Todo;
}
  })

})
 }

// ! done task features
const IsDone = (id) => {
  SetTodos((PrevTodos)=>{
    return PrevTodos.map((Todo)=>{
  if(Todo.id === id){
    return{
      ...Todo,
     isdone:true,
    }
  }else{
    return Todo;
  }
    })
  
  })
   }

  return(
    <div>
      <h1>Todo list</h1>
      <input type="text" placeholder="Add Task" value={Newtodo} onChange={UpdateValue}  />
      <button onClick={AddValue}>Add Todo</button>

    <ul>
     { Todos.map((Todo)=>(
      <li key={Todo.id}>
        <span style={ Todo.isdone ? {textDecorationLine: "line-through"} : {}}>{Todo.task}</span>
            <button onClick={ () => DeleteTodo(Todo.id)}>delete</button>
            <button onClick={ () => Udateone(Todo.id)}>Uppercase one</button>
            <button onClick={ () => IsDone(Todo.id)}>IsDone</button>
      </li>

      ))}
    </ul>
    <button onClick={UpperCase}>To uppercase all</button>

    </div>
  )
}