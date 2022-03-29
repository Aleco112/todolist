import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [username, setUserName] = useState("");
	return (
		<>
			<div className="input-group">
				<input
					type="text"
					className="form-control"
					placeholder="Recipient's username"
					onChange={(event) => {
						setUserName(event.target.value);
					}}
					value={username}
				/>
				<button className="btn btn-outline-secondary" type="button">
					Button
				</button>
			</div>
		</>
	);
};

export default Home;
