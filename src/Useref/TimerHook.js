import React, { useState, useEffect, useRef } from 'react';

function TimerHook() {
    const [ timer, setTimer ] = useState(0);
    const intervalRef = useRef()

	useEffect(() => {
        // const INterval = below function
		 intervalRef.current = setInterval(() => {
			setTimer((prevInterval) => prevInterval + 1);
		}, 1000);
        return(  ) =>{
            clearInterval(intervalRef.current)
        }
    }, []);
	return <div>
        Hook Timer - {timer}
<button onClick= {()=>clearInterval(intervalRef.current)} >Timer</button>
    </div>
}

export default TimerHook;
// you cannnot access the interval, since it cannot be accessed globally and only be accesed by useEffect.
// by using useRef hook we access the "intervalREf.current" in the button function as well which is outside the useEffect hook.
