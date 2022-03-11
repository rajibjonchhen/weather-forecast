
import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
