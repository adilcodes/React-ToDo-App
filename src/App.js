import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [allTodos, setAllTodos] = useState([]); 

  const inputTodo = (event) => {
    setTodo(event.target.value);
  };

  const addTodo = () => {
   if(todo !== ""){
    setAllTodos([...allTodos, todo]);
   };
   setTodo("");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 mx-auto bg-white rounded-4 p-3 mt-5">
          <h2 className='text-center mb-4'>My Todos</h2>
          <div className="d-flex gap-4 mb-4">
            <input
            type="text"
            name='add-todo'
            className='form-control shadow-none text-capitalize'
            placeholder='Enter New Task'
            value={todo}
            onChange={inputTodo} />
            <button onClick={addTodo} className='btn btn-warning px-3 fw-bold shadow-none'>Add</button>
          </div>
          <ul className='list-group'>
            {
              allTodos.map((todoItem, index) => {
                return (
                  <div key={index} className="d-flex justify-content-between align-items-center my-2">
                    <li className='list-group-item border-0 fs-5 text-capitalize'>{todoItem}</li> 
                    <button className="btn btn-danger px-3"><i className="fa-solid fa-trash"></i></button>
                  </div> 
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
