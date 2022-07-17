import React from 'react'

function Todos(props) {
    return (
        <div className="d-flex justify-content-between align-items-center my-2">
            <li className='list-group-item border-0 fs-5 text-capitalize'>{props.todoItem}</li>
            <div className='p-0 m-0 d-flex gap-3'>
                <button onClick={()=>{props.updateTodo(props.id)}} className="btn btn-success px-3"><i className="fa-solid fa-pen"></i></button>
                <button onClick={()=>{props.deleteTodo(props.id)}} className="btn btn-danger px-3"><i className="fa-solid fa-trash"></i></button>
            </div>
        </div>
    )
}

export default Todos
