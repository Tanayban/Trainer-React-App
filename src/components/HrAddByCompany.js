import "../css/companyaddbyadmin.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-custom-alert";
import { useNavigate, useLocation } from "react-router-dom";

export const HrAddByCompany = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state;
  console.log(email)
 

  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    email: "",
    password: "",
    education: "",
    company: {
      email: email
    },
  });

  // useEffect(() => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     company: {
  //       companymail: "narayan@gmail.com"
  //     }
  //   }));
  // }, [email]);

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
      .post("http://localhost:8091/Hr/add", formData)
      .then((response) => {
        console.log(response);
        toast.success("Successfully Added Hr");
        navigate("/companydetail", {state: email});
      })
      .catch((error) => {
        console.log(error);
        toast.warning("Error Adding Hr");
      });
  };

  return (
    <>
      <ToastContainer />
      <header>
        <h1>HR Registration</h1>
      </header>
      <main>
        <form id="company-registration-form" onSubmit={createHr}>
          <label htmlFor="name">Name:</label>
          <input
            value={formData.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
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

          <label htmlFor="email">Email:</label>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            required
          />

          <label htmlFor="education">Education:</label>
          <input
            value={formData.education}
            onChange={handleChange}
            type="text"
            id="education"
            name="education"
            required
          />

          <button type="submit">Register</button>
        </form>
      </main>
    </>
  );
};
