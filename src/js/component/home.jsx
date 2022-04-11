import React, { useState } from "react";

const Home = () => {
	// state for input
	const [listname, setListName] = useState("");
	// state for array
	const [todolist, setTodoList] = useState([]);

	return (
		<>
			<main>
				<h1> Todos</h1>
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
							//check is input is empty
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
							<li className="newtodos" key={index}>
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
			</main>
			<span>{todolist.length} item left</span>
		</>
	);
};

export default Home;
