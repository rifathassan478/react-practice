import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	const handleCount = () => {
		setCount(count + 1);
	}

	const countStyle = {
		border: '2px solid red',
		marginBottom: '20px',
		padding: '10px',
	}

	return (
		<div style={countStyle}>
			<p>Click the button below to count</p>
			<button onClick={handleCount}>{count}</button>
		</div>
	);

}