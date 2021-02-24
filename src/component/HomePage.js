import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
	const [data, setData] = useState([]);

	const getGames = async () => {
		const result = await axios.get(
			"https://sheltered-reaches-05616.herokuapp.com/movie/api/movie"
		);
		if (result.data) {
			console.log(result.data);
			setData(result.data);
		}
	};

	useEffect(() => {
		getGames();
	}, []);
	return (
		<div>
			{data.map(({ id, Mname }) => (
				<h3 key={id}>{Mname}</h3>
			))}
		</div>
	);
}

export default HomePage;
