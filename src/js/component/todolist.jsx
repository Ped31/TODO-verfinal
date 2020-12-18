import React, { useState } from "react";
import Todos from "./todos.jsx";
import PropTypes from "prop-types";

function TodoList() {
	const [inputText, setInputText] = useState(null);
	const [todos, setTodos] = useState([]);

	const inputTextHandler = e => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const submitTodoHandler = e => {
		e.preventDefault();
		if (inputText != "" && inputText != null) {
			setTodos([...todos, { label: inputText, done: false }]);
			setInputText("");
		}
	};

	return (
		<div className="todo-list">
			<form onClick={submitTodoHandler} onChange={inputTextHandler}>
				<input value={inputText} placeholder="new plan here..." />
				<button className="todo-button" type="submit">
					<i className="far fa-plus-square" />
				</button>

				<div className="todo-container">
					<Todos todos={todos} setTodos={setTodos} />
				</div>
			</form>
			<div>
				<div className="counter">{todos.length} pending plans</div>
			</div>
		</div>
	);
}

export default TodoList;
