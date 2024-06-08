import "../css/trainerdetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const TrainerDetail = () => {
  const [jobdetail, setJobdetail] = useState([]);
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get("http://localhost:8091/Jobopening/all")
      .then((resolver) => {
        setJobdetail(resolver.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const ApplyNow = (r) => {
    axios
      .post("http://localhost:8091/Jobopening/refer/"+data, r)
      .then((resolver) => {
        console.log(resolver)
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <>
      <div className="trainerdetail ">
        <section id="job-listings">
            
          {jobdetail.map((r,i) => (
            <div className="job">
            <h2>{r.position}</h2>
            <p>{r.companyname}</p>
            <p>{r.location}</p>
            <p>{r.experience}</p>
            <p>{r.skills}</p>
            <p>
             {r.description}
            </p>
            <button key={i} onClick={() => ApplyNow(r)} class="apply-button">Apply</button>
          </div>
          ))}
        </section>
      </div>
    </>
  );
};
