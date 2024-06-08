import "../css/jobaddByHr.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-custom-alert";
import { useNavigate, useLocation } from "react-router-dom";

export const JobAddByHr = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state;

  const [formData, setFormData] = useState({
    companyname: "",
    location: "",
    position: "",
    experience: "",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const createHr = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8091/Jobopening/add/" + email, formData)
      .then((response) => {
        console.log(response);
        toast.success("Successfully Added Job");
        navigate("/hrdetail", { state: email });
      })
      .catch((error) => {
        console.log(error);
        toast.warning("Error Adding Job");
      });
  };

  return (
    <>
      <ToastContainer />
      <header>
        <h1>Post Job</h1>
      </header>
      <main>
        <form id="company-registration-form" onSubmit={createHr}>
          <label htmlFor="companyname">Company Name:</label>
          <input
            value={formData.companyname}
            onChange={handleChange}
            type="text"
            id="companyname"
            name="companyname"
            required
          />

          <label htmlFor="location">Location:</label>
          <input
            value={formData.location}
            onChange={handleChange}
            type="text"
            id="location"
            name="location"
            required
          />

          <label htmlFor="position">Position:</label>
          <input
            value={formData.position}
            onChange={handleChange}
            type="text"
            id="position"
            name="position"
            required
          />

          <label htmlFor="experience">Experience:</label>
          <input
            value={formData.experience}
            onChange={handleChange}
            type="text"
            id="experience"
            name="experience"
            required
          />

          <label htmlFor="skills">Skills:</label>
          <input
            value={formData.skills}
            onChange={handleChange}
            type="text"
            id="skills"
            name="skills"
            required
          />

          <label htmlFor="description">Description:</label>
          <input
            value={formData.description}
            onChange={handleChange}
            type="text"
            id="description"
            name="description"
            required
          />

          <button type="submit">Post Job</button>
        </form>
      </main>
    </>
  );
};
