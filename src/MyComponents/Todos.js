import React from 'react'
import { TodoItem } from "./TodoItem"


export default function Todos(props) {
let myStyle={
    minHeight:"70vh",
    margin:"40px auto"
}

    return (
        <div className="container my-3" style={myStyle}>
            <h1 className="text-center my-3">TO Do's List</h1>
            {props.todoItems.length === 0 ? "No tasks to complete" :
                props.todoItems.map((element) => {
                    return <TodoItem item={element} key={element.sno} onDelete={props.onDelete} />
                })

            }

        </div>
    )
}
