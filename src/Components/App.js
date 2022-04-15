import logo from './Logo/logo.svg';
import {Welcome} from './Welcome/welcome.js';
import {BigCount} from './Counter/counts.js';
import {AddLogo} from './Logo/addLogo.js';
import './App.css';
import Button from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Welcome name="Lee"/>
      <BigCount/>
      <AddLogo />
    </div>
  );
}

export default App;
