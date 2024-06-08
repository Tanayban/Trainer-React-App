import "../css/hrdetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../css/style.css";
import { useLocation, useNavigate } from "react-router-dom";


export const HrDetail = () => {
 
  const [hrdetail, setHrDetail] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const gotoPostJob = () => [navigate("/addJob", { state: data })];

  const seeJob = () => {
    navigate("/seejobposted", {state: data})
  }

  useEffect(() => {
    axios
      .get("http://localhost:8091/Trainer/all")
      .then((resolver) => {
        setHrDetail(resolver.data);
        console.log(resolver.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo"></label>
        <ul>
          <li>
            <button onClick={seeJob}>See Job</button>
          </li>
          <li>
            <button onClick={gotoPostJob}>Add Job</button>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="hrdetail">
        <section id="applications">
          {hrdetail.map((r, i) => (
            <div className="application">
              <img src={r.photo} alt="John Doe" className="photo"></img>
              <div className="details">
                <h2>{r.name}</h2>
                <p>{r.email}</p>
                <p>{r.experience}</p>
                <p>{r.skills}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
