import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormGroup} from 'react-bootstrap';
import { Form} from 'react-bootstrap';
import { FormControl} from 'react-bootstrap';


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
		<div class="col-sm-4">
					<InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
	  maxLength="3"
    />
  </InputGroup>
			</div>
			</div>
	)
}