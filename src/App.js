import Navbar from './Components/navbar';
import MainBody from './Components/mainbody';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          <Navbar />
          <MainBody 
			rating = "5.0"
			reviewCount = {6}
			country = "USA"
			title = "Life lessons by Lewis Hamilton"
			price = {136}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
