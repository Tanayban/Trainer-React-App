import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-custom-alert";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/style.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "../css/trainerdetail.css";

export const CompanyDetail = () => {
  const [jobdetail, setJobdetail] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const gotoAddHr = () => [navigate("/addHr", { state: data })];

  useEffect(() => {
    axios
      .get("http://localhost:8091/Hr/all")
      .then((resolver) => {
        setJobdetail(resolver.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DeleteComapany = (i) => {
   console.log("Id"+ i.id)
  };

  return (
    <>
      <nav>
        <input type="checkbox" id="check"></input>
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">Trainer Engagement</label>
        <ul>
          <li>
            <button onClick={gotoAddHr}>Add HR</button>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="trainerdetail ">
        <section id="job-listings">
          {jobdetail.map((r, i) => {
            if (r.company?.email == data) {
              return (
                <div key={i} className="job">
                <h2>{r.name}</h2>
                <p>{r.experience}</p>
                <p>{r.email}</p>
                <p>{r.city}</p>
                <p>{r.education}</p>
                
                <button onClick={() => DeleteComapany(r)} class="apply-button">
                  Delete Hr
                </button>
              </div>
                
              );
            } else {
              return (
                <div></div>
              );
            }
          })}
          {/* {jobdetail.map((r, i) => (
            
            <div key={i} className="job">
              <h2>{r.name}</h2>
              <p>{r.experience}</p>
              <p>{r.email}</p>
              <p>{r.city}</p>
              <p>{r.education}</p>
              
              <button onClick={() => DeleteComapany(r)} class="apply-button">
                Delete Hr
              </button>
            </div>
          ))} */}
        </section>
      </div>
    </>
  );
};
