import React, { useEffect, useRef } from 'react';

function FocusInput() {
	const inputFocus = useRef(null);
	useEffect(() => {
		inputFocus.current.focus();
	}, []);

	return (
		<div>
			<input ref={inputFocus} type="text" />
		</div>
	);
}

export default FocusInput;
// UseRef makes it possible to access DOM nodes within functional components
// common use case: focusing a text input for ex: in forms when we go to login page the the focus automatically goes to the login input field during a page load. this is acheoved by useRef hoook.
// we acheive this by useEffect hook which is runs everytime when the state updates and also the initial load