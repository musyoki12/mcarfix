import logo from './mcarfix.png';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <div>
      <Navbar/>
      </div>
    </div>
  );
}

export default App;
