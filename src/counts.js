import React, {useState} from 'react';
export function BigCount(){

	const [count, setCount] = useState(0);
	return(
		<div>
			<p> you clicked {count} times. </p>
			<button onClick={()=> setCount(count+1)}>
				Click here
			</button>
			<button onClick={()=> setCount(count-1)}>
				Click here for decrease
			</button>
		</div>
	)
}