import React, { useState } from "react";

const Home = () => {
	const [listname, setListName] = useState("");
	const [todolist, setTodoList] = useState([]);

	return (
		<>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Todo-list"
					onChange={(event) => {
						setListName(event.target.value);
					}}
					value={listname}
					onKeyUp={(e) => {
						if (e.key == "Enter" && listname !== "") {
							setTodoList([...todolist, listname]);
							setListName("");
						}
					}}
				/>
				<button
					onClick={() => {
						if (listname !== "") {
							setTodoList([...todolist, listname]);
							setListName("");
						}
					}}
					className="btn btn-outline-secondary"
					type="button">
					Add task
				</button>
			</div>
			<ul>
				{todolist.map((item, index) => {
					return (
						<li key={index}>
							{item}
							<button
								onClick={() =>
									setTodoList(
										todolist.filter((item, i) => {
											return index !== i;
										})
									)
								}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default Home;
