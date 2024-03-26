import logo from './logo.svg';
import './App.css';
import Nav from './Component/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import NoteState from './context/NoteState';
import Alert from './Component/Alert';
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Nav/>
      <Alert message="psk technologies app"/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
      </Routes>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
