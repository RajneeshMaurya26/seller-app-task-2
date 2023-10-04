import logo from './logo.svg';
import './App.css';
import Home from './conatiners/Home/Home';
import View from './components/UI/View/View';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/property/:id' element={<View/>} />
      </Routes>
    </div>
  );
}

export default App;
