import { useState } from "react"
import {v4 as uuidv4} from "uuid"

export function NewFile(){

  let [Todos , SetTodos] = useState([{task: "simple todo" , id : uuidv4()}])
  let [Newtodo , SetNewtodo] = useState("")

  function AddValue(){
SetTodos([...Todos , {task:Newtodo , id: uuidv4()}])
SetNewtodo("")
  }
  function UpdateValue(e){
SetNewtodo(e.target.value)
  }
  function DeleteTodo(id){
SetTodos((Prevtodo) => Todos.filter((Prevtodo)=> Prevtodo.id != id))
  }

  return(
    <div>
      <h1>Todo list</h1>
      <input type="text" placeholder="Add Task" value={Newtodo} onChange={UpdateValue}  />
      <button onClick={AddValue}>Add Todo</button>

    <ul>
     { Todos.map((Todo)=>(
      <li key={Todo.id}>{Todo.task}
            <button onClick={ () => DeleteTodo(Todo.id)}>delete</button>

      </li>

      ))}
    </ul>
    </div>
  )
}