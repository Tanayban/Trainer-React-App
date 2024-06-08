import {BrowserRouter as Router, Link, Route, useNavigate} from 'react-router-dom';
import '../css/style.css';

export const CompanyNav = () => {

  const handle = () => {
    alert("do")
  }
    return(
        <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Trainer Engagement</label>
        <ul>
          <li><button onClick={handle}>AddHr</button><Link to="/addHr">Add Hr</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    )
}