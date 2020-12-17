import React, { useState } from "react";
import Todos from "./todos.jsx";
import PropTypes from "prop-types";

function TodoList() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	const inputTextHandler = e => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const submitTodoHandler = e => {
		e.preventDefault();
		setTodos([...todos, { label: inputText, done: false }]);
		setInputText("");
	};

	return (
		<div className="todo-list">
			<form>
				<input
					value={inputText}
					onChange={inputTextHandler}
					placeholder="new plan here..."
				/>
				<button
					className="todo-button"
					type="submit"
					onClick={submitTodoHandler}>
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
