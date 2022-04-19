import logo from './logo.svg';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';


export function AddLogo() {
	const [newName, changer] = useState(0);
  const list= ['Coleslaw', 'Coletrain', 'Cole', 'Mr. Hallom'];
  
  return(
    <div>
        <header className="App-header"/>
              <h3>Hi, My name is</h3>
                    <p>{newName}</p>
                  <Button className="nameGeneration" value="Name Changer"
                  onClick={() => changer( foreach(item in list){
                    newName = item})}
                  />
 
    </div>
	)}