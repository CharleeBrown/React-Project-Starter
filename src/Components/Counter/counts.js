import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

import './test.css';
export function BigCount() {

	const [count, setCount] = useState(0);
	return (
		<div>
			<div class="col">
				
					<p> you clicked {count} times. </p>
					<Button variant="info" value="Click Here" onClick={() => setCount(count + 1)}  >
						Click Here for +
					</Button>

					<Button variant="info" value="Click Here" onClick={() => setCount(count - 1)} >
						Click Here for -
					</Button>
				
			</div>
			<div class="col">
		
			</div>
			</div>
	)
}