import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/style.css";
import "../css/trainerdetail.css";
import { ToastContainer, toast } from "react-custom-alert";

export const JobListInHr = () => {
  const [seealljob, setJobList] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const link = "http://localhost:8091/Hr/all";

  useEffect(() => {
    axios
      .get(link)
      .then((resolver) => {
        if (Array.isArray(resolver.data)) {
         setJobList(resolver.data);
         
         console.log(resolver.data[0].jb)
        } else {
          console.error("Expected an array response from the API");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DeleteComapany = (i) => {
    console.log("Id" + i.id);
  };

  return (
    <>
      <ToastContainer />
      <header>
        <h1>Post Job</h1>
      </header>
      <div className="trainerdetail ">
        <section id="job-listings">
          {seealljob.map((r, i) => (
            <div key={i} className="job">
              <h2>{r.jb.companyname}</h2>
              <p>{r.jb.location}</p>
              <p>{r.jb.position}</p>
              <p>{r.jb.experience}</p>
              <p>{r.jb.skills}</p>

              <button onClick={() => DeleteComapany(r)} className="apply-button">
                Delete Job
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
