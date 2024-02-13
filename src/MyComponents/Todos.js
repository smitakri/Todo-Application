import React from 'react'
import TodoIteam from "../MyComponents/TodoIteam";

const Todos = (props) => {
  return (
    <div className="container">
          <h3 className="text-center my-3">Todos List</h3>
          {props.todos.length ===0? "No Todos to display": 
          props.todos.map((todo)=>{
                return (
                    <>
                <TodoIteam todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                </>
                )
          })
  }

          
    </div>
  )
}


export default Todos
