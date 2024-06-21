import React from "react";



//create your first component
const Todos = ({ todos, onDelete }) => {
    // Asegúrate de que todos siempre sea un array
    const arrayTodos = Array.isArray(todos) ? todos : [];


    const handleDeleteClick = (index) => {
        onDelete(index);
    };
  
    return (
      <div className="border-top" >
        
        <div className="card mt-2">
          {arrayTodos.map((value, index) => {
            return(
                <div key={index} className="d-flex justify-content-around align-items-center m-3">
                    <div>{value}</div>
                    <button className="btn btn-danger" onClick={() => handleDeleteClick(index)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                
            )
            
            })}
        </div>
      </div>
    );
  };
  
  export default Todos;