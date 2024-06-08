import { useNavigate } from "react-router-dom";
import "../css/login.css";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-custom-alert';
import useAuth from './useAuth';


export const Login = () => {
  const navigate = useNavigate();

  const RegisterTrainer = () => {
    navigate("/registerTrainer");
  };

  const [take, settake] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    settake({
      ...take,
      [name]: value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .get(
        "http://localhost:8091/User/login/" + take.email + "/" + take.password
      )
      .then((resolver) => {
        console.log(resolver.data);
        if (resolver.data == "TRAINER") {
          navigate("/trainerdetail", { state: take.email });
        } else if(resolver.data == "COMPANY") {
          navigate("/companydetail", {state: take.email})
        } else if(resolver.data == "HR") {
          navigate("/hrdetail", {state: take.email, replace: true})
        } else if(resolver.data == "ADMIN") {
          navigate("/admin", {state: take.email, replace: true})
        } else if(resolver.data == "Login Unsucessful") {
          toast.error("Incorrect Username or Password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <form>
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="email"
            placeholder="Email or Phone"
            id="username"
            value={take.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={take.password}
            onChange={handleChange}
            required
          />

          {/* <label htmlFor="role">Choose a Role:</label>
          <select name="role" id="role" value={take.role} onChange={handleChange}>
            <option value="trainer">Trainer</option>
            <option value="company">Company</option>
          </select> */}

          <input onClick={login} type="submit" value="Login" />

          <div className="social">
            <h5>Create Account</h5>
            <div className="fb">
              <a onClick={RegisterTrainer}>Trainer</a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
