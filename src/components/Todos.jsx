import React from 'react'

function Todos(props) {
    return (
        <div className="d-flex justify-content-between align-items-center my-2">
            <li className='list-group-item border-0 fs-5 text-capitalize'>{props.todoItem}</li>
            <button onClick={()=>{props.deleteTodo(props.id)}} className="btn btn-danger px-3"><i className="fa-solid fa-trash"></i></button>
        </div>
    )
}

export default Todos
