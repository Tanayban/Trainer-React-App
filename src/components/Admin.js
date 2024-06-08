import "../css/trainerdetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-custom-alert";

export const Admin = () => {
  const [jobdetail, setJobdetail] = useState([]);
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8091/Company/all")
      .then((resolver) => {
        setJobdetail(resolver.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DeleteComapany = (r) => {
    axios
    .delete("http://localhost:8091/Company/delete/" + r.email)
    .then((resolver) => {
        console.log(resolver);
        toast.info("successfully deleted");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Error in deleting");
    });
    
  }

  return (
    <>
      <div className="trainerdetail ">
        <section id="job-listings">
          {jobdetail.map((r, i) => (
            <div className="job">
              <h2>{r.ownerName}</h2>
              <p>{r.companyName}</p>
              <p>{r.companylocation}</p>
              <p>{r.city}</p>
              <p>{r.country}</p>
              <p>{r.address}</p>
              <button key={i} onClick={() => DeleteComapany(r)} class="apply-button">
                Delete Company
              </button>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
