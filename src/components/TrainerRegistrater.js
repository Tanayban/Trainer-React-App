// import "../css/trainerregister.css";

import { useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from 'react-custom-alert';

export const TrainerRegistrater = () => {
  const [formData, setFormData] = useState({
    name: "",
    about: "",
    education: "",
    email: "",
    experience: "",
    gender: "",
    password: "",
    phonenumber: "",
    skills: "",
    location: "",
  });

  const [imageData, setImageData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImageData(e.target.files[0]);
  };

  const createTrainer = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("about", formData.about);
    formdata.append("education", formData.education);
    formdata.append("email", formData.email);
    formdata.append("experience", formData.experience);
    formdata.append("gender", formData.gender);
    formdata.append("password", formData.password);
    formdata.append("phonenumber", formData.phonenumber);
    formdata.append("skills", formData.skills);
    formdata.append("location", formData.location);
    formdata.append("photo", imageData);
    for (const [key, value] of formdata) {
      console.log(key + " " + value);
    }

    axios
      .post(
        "http://localhost:8091/Trainer/add",
        formdata
      )
      .then((resolver) => {
        console.log(resolver);
        toast.success("Successfully Added Trainer");
      })
      .catch((error) => {
        console.log(error);
        toast.warning("Error Adding Trainer");
      });
  };

  return (
    <>
      <div className="conv">
        <h1 className="header">Registration</h1>
        <div className="container">
          <form>
            <div className="form first">
              <div className="details personal">
                <span className="title">Personal Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your Email"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Gender</label>
                    <select
                      required
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option disabled selected>
                        Select gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <label>Birth Date</label>
                    <input
                      type="date"
                      name="birthdate"
                      placeholder="Enter your Birth Date"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Location"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="details ID">
                <span className="title">Professional Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Skills</label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      placeholder="Skills"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Education</label>
                    <input
                      value={formData.education}
                      onChange={handleChange}
                      type="text"
                      name="education"
                      placeholder="Education"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>Experience</label>
                    <input
                      value={formData.experience}
                      onChange={handleChange}
                      type="number"
                      name="experience"
                      placeholder="Experience"
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label>ContactNo.</label>
                    <input
                      value={formData.phonenumber}
                      onChange={handleChange}
                      type="tel"
                      name="phonenumber"
                      placeholder="ContactNo"
                      required
                    />
                  </div>
                </div>

                <button className="nextBtn">
                  <span className="btnText">Next</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
            </div>

            <div className="form second">
              <div className="details address">
                <span className="title">More Details</span>

                <div className="fields">
                  <div className="input-field">
                    <label>About Me</label>
                    <input
                      value={formData.about}
                      onChange={handleChange}
                      type="text"
                      placeholder="About Me"
                      name="about"
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="avatar">Choose a profile picture:</label>
                    <br />
                    <input
                      onChange={handleImageChange}
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>

              <div className="details family">
                <div className="fields">
                  <div className="buttons">
                    <div className="backBtn">
                      <i className="uil uil-navigator"></i>
                      <span className="btnText">Back</span>
                    </div>

                    <button onClick={createTrainer}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
