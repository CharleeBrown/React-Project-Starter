import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './test.css';

export function BigCount() {

	const [count, setCount] = useState(0);
	return (
		<div>
			
				
					<p> you clicked {count} times. </p>
					<Button id="btnPlus" value="Click Here" onClick={() => setCount(count + 1)}  >
						Click Here for +
					</Button>

					<Button id="btnMinus"  variant="info" value="Click Here" onClick={() => setCount(count - 1)} >
						Click Here for -
					</Button>
			
			</div>
	)
}