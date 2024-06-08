import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import '../src/css/style.css';
// import '../src/css/login.css';
import {Home} from './components/Home'
import {About} from './components/About'
import {Contact} from './components/Contact'
import { Login } from './components/Login';
import { TrainerRegistrater } from './components/TrainerRegistrater';
import { TrainerDetail } from './components/TrainerDetail';
import { HrDetail } from './components/HrDetail';
import { Main } from './components/Main';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Main/>
    
    </BrowserRouter>
   
    </>
  );
}

export default App;
