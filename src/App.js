import logo from './logo.svg';
import './App.css';
import './dist/style.css'
import { BrowserRouter, } from 'react-router-dom';
import Rount from './pages/Rount';
import Nav from './Common/Nav';

function App() {
  return (

    <BrowserRouter>
      <Nav />
      <Rount />
    </BrowserRouter>

  );
}

export default App;
