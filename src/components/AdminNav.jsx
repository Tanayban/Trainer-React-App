import {BrowserRouter as Router, Link, Route, useNavigate} from 'react-router-dom';
import '../css/style.css';

export const AdminNav = () => {

    return (
        <nav>
      <input type="checkbox" id="check"></input>
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Trainer Engagement</label>
      <ul>
      <li><Link to="/addCompany">Add Company</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
    )
}