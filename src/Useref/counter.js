import React, { useState, useRef, useEffect } from 'react';

function Counter() {
	const [ count, setCount ] = useState(0);
	const focusRef = useRef();
	useEffect(() => {
		focusRef.current = setInterval(() => {
			setCount((prev) => prev + 1);
		},100);
		return ()=> clearInterval(focusRef.current);
	}, []);
	return (
		<div>
			<input ref={focusRef} type="text" />
			<p>{count}</p>
			<button onClick={() => clearInterval(focusRef.current)}> Click</button>
			

		
			
		</div>
	);
}

export default Counter;
