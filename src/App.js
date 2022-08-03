import Navbar from './Components/navbar';
import MainBody from './Components/mainbody';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <Navbar />
          <MainBody />
        </div>
      </header>
    </div>
  );
}

export default App;
