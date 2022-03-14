
import './App.css';
import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home';
import { Provider } from 'react-redux';
import { configStore, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Provider store={configStore}>
      <PersistGate  persistor={persistor} loading={null}>
        <BrowserRouter>
          <MyNavbar/>
        <div className="App bg-dark text-white pt-5" style={{minHeight:'100vh'}}>
        
        <Routes>
                <Route path='/' element={<Home/>} />
        </Routes>
        </div>
        </BrowserRouter>

    
      </PersistGate>
    </Provider>
  );
}

export default App;
