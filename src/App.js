import logo from './logo.svg';
import {Welcome} from './welcome.js';
import {BigCount} from './counts.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Welcome name="Lee"/>
      <BigCount/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
