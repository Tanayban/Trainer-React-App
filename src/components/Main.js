import { Navbar } from "../components/Navbar";
import { BrowserRouter, Route, Routes, useLocation, Navigate } from "react-router-dom";
import "../css/style.css";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Login } from "../components/Login";
import { TrainerRegistrater } from "../components/TrainerRegistrater";
import { TrainerDetail } from "../components/TrainerDetail";
import { HrDetail } from "../components/HrDetail";
import { TrainerNav } from "./TrainerNav";
import { CompanyDetail } from "./CompanyDetail";
import { CompanyNav } from "./CompanyNav";
import { AdminNav } from "./AdminNav";
import { Admin } from "./Admin";
import { CompanyAddByAdmin } from "./CompanyAddByAdmin";
import { JobAddByHr } from "./JobAddByHr";
import { HrAddByCompany } from "./HrAddByCompany";
import { JobListInHr } from "./JobListInHr";
import { useState } from "react";

export const Main = () => {
  const location = useLocation();
  const path = ["/trainerdetail", "/companydetail", "/hrdetail", "/admin", "/addCompany", "/addJob", "/addHr", "/seejobposted"];


  const hidenavbar = path.includes(location.pathname);

  return (
    <>
      {/* {hidenavbar ? <TrainerNav/> : <Navbar/>} */}
      {!hidenavbar && <Navbar />}

      <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/registerTrainer"
            element={<TrainerRegistrater />}
          ></Route>
          <Route
            path="/trainerdetail"
            element={
              <>
                <TrainerNav />
                <TrainerDetail />
              </>
            }
          ></Route>
          <Route
            path="/companydetail"
            element={
              <>
                {/* <CompanyNav/> */}
                <CompanyDetail />
              </>
            }
          ></Route>
          <Route path="/hrdetail" element={<>
             <HrDetail  /> 
          </>}></Route>
          <Route path="/admin" element={<>
          <AdminNav/>
          <Admin />
          </>}></Route>
          <Route path="/addCompany" element={<>
          <CompanyAddByAdmin/>
          </>}></Route>
          <Route path="/addJob" element={<>
           <JobAddByHr/>
          </>}></Route>
          <Route path="/addHr" element={<>
           <HrAddByCompany/>
          </>}></Route>
          <Route path="/seejobposted" element={<JobListInHr/>}/>
          
        </Routes>
        
      </section>
    </>
  );
};
