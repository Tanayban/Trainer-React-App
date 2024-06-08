import {BrowserRouter as Router, Link, Route, useNavigate} from 'react-router-dom';
import '../css/style.css';

export const Navbar = () => {
    return (
    <nav>
      <input type="checkbox" id="check"></input>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Trainer Engagement</label>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    )
}