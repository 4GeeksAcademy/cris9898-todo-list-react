import React, { useState, useCallback } from "react";
import List from "./list.jsx"


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
  	const [valuesArray, setValuesArray] = useState([]); // Inicializado como array vacío

  	const handleKeyDown = useCallback((event) => {
    if (event.key === "Enter") {
      // Agregar el valor actual del input al arreglo
      setValuesArray((prevValues) => [...prevValues, inputValue]);
      // Borrar el contenido del input
      setInputValue("");
    }
  	}, [inputValue]);

  	const handleChange = useCallback((event) => {
    	setInputValue(event.target.value);
  	}, []);

	  const handleDelete = useCallback((indexToDelete) => {
		setValuesArray((prevValues) => prevValues.filter((_, index) => index !== indexToDelete));
	  }, []);
	return (
		<div className="container text-center mt-3">
			<h1>To Do List</h1>
			<div className="mb-3 ">
				<label htmlFor="exampleFormControlInput1" className="form-label">Add Your To Do:</label>
				<input 
					type="text" 
					className="form-control" 
					id="exampleFormControlInput1" 
					placeholder="Add your task to do..."
					onKeyDown={handleKeyDown}
					onChange={handleChange}
					/>
				
			</div>
			<List todos={valuesArray} onDelete={handleDelete}/>
			
		</div>
	);
};

export default Home;
