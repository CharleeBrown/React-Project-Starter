import React, {useState} from 'react';
import { Button} from 'react-bootstrap';
export function BigCount(){

	const [count, setCount] = useState(0);
	return(
		<div class="row">
			<div class="col">
				<p> you clicked {count} times. </p>
					<Button  variant="info" value="Click Here" onClick={()=> setCount(count+1)} >
						Click Here for +
					</Button>
				<div class="row">
					<Button  variant="info" value="Click Here" onClick={()=> setCount(count-1)} >
						Click Here for -
					</Button>
				</div>
			</div>	
		</div>
	)
}