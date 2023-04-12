import React from "react";
import { NavLink, Link } from "react-router-dom";
import imghome from "../src/images/imagehome.png";
const Home = () => {

  return (
    <>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto mt-5 pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-5">
                <h5 className="homecontent">At ExamTime, we are determined to help you during this stage in your life so we have prepared a guide for university students with everything you need to succeed at University.<br/><br/> In this guide you will find a wide range of information: practical tips, learning techniques, study tools and resources to maximise your productivity.</h5>

                <NavLink to="/learn" className="btn btn-success" style={{ fontSize: "1.5rem", fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", marginTop: "15px" }}>Learn Now</NavLink>
                <div className="login">
                  <Link to="/login" className="btn btn-outline-primary loginlink">Login</Link>
                  <Link to="/register" className="btn btn-outline-warning loginlink">Signup</Link>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <img src={imghome} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home;