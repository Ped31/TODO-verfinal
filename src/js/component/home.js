import React from "react";
import TodoList from "./todolist.jsx";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export function Home() {
	return (
		<div className="App text-center">
			<h1>Any plan for today?</h1>
			<TodoList />
		</div>
	);
}
