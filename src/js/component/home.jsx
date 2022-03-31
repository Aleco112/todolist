import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [listname, setListName] = useState("");
	const [todolist, setTodoList] = useState([]);

	return (
		<>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Recipient's listname"
					onChange={(event) => {
						setListName(event.target.value);
					}}
					value={listname}
				/>
				<button
					onClick={() => {
						setTodoList([...todolist, listname]);
						setListName("");
					}}
					className="btn btn-outline-secondary"
					type="button">
					Add Name
				</button>
			</div>
			<ul>
				{todolist.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</>
	);
};

export default Home;
