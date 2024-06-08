import '../css/companyaddbyadmin.css';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-custom-alert';
import { useNavigate } from "react-router-dom";

export const CompanyAddByAdmin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
    contactNo: "",
    description: "",
    companylocation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createCompany = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8091/Company/add", formData)
      .then((response) => {
        console.log(response);
        toast.success("Successfully Added Company");
        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
        toast.warning("Error Adding Company");
      });
  };

  return (
    <>
      <ToastContainer />
      <header>
        <h1>Company Registration</h1>
      </header>
      <main>
        <form id="company-registration-form" onSubmit={createCompany}>
          <label htmlFor="companyName">Company Name:</label>
          <input
            value={formData.companyName}
            onChange={handleChange}
            type="text"
            id="companyName"
            name="companyName"
            required
          />

          <label htmlFor="ownerName">Owner Name:</label>
          <input
            value={formData.ownerName}
            onChange={handleChange}
            type="text"
            id="ownerName"
            name="ownerName"
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

          <label htmlFor="address">Address:</label>
          <input
            value={formData.address}
            onChange={handleChange}
            type="text"
            id="address"
            name="address"
            required
          />

          <label htmlFor="companylocation">Company Location:</label>
          <input
            value={formData.companylocation}
            onChange={handleChange}
            type="text"
            id="companylocation"
            name="companylocation"
            required
          />

          <label htmlFor="state">State:</label>
          <input
            value={formData.state}
            onChange={handleChange}
            type="text"
            id="state"
            name="state"
            required
          />

          <label htmlFor="country">Country:</label>
          <input
            value={formData.country}
            onChange={handleChange}
            type="text"
            id="country"
            name="country"
            required
          />

          <label htmlFor="contactNo">Contact Number:</label>
          <input
            value={formData.contactNo}
            onChange={handleChange}
            type="tel"
            id="contactNo"
            name="contactNo"
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            value={formData.description}
            onChange={handleChange}
            id="description"
            name="description"
            rows="4"
            required
          ></textarea>

          <button type="submit" onClick={createCompany}>Register</button>
        </form>
      </main>
    </>
  );
};
