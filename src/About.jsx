import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png"
import manwor from "../src/images/about1.png"
import phone from "../src/images/about2.png"
const About = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <img src={logo} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <h5 className="aboutdis">
                    You may be asking yourself how this guide can be useful to both a first year engineering student and a final year engineering student for example. Well, we can easily answer that question! In this guide, we do not focus on specific issues but on the learning process and tasks that you may face in university and these are common to all university students.
                  </h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <h5 className="aboutdis">
                    The resources listed in this guide are just an example of what you can do with our study tools. Our goal here is not to provide you with all the study material you need but to encourage you to create some yourself. This is a great way to enhance your knowledge, productivity and achieve your academic goals.
                  </h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <img src={manwor} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <img src={phone} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <h2 className="aboutdis">Connect with us through our App</h2>
                <div className="appbtnmain">
                  <Link to="https://apple.com" className="btn btn-outline-dark appbtn"><b><i className="fa-brands fa-apple"></i>Download</b></Link>
                  <Link to="https://play.google.com/store" className="btn btn-outline-dark appbtn"><b><i className="fa-brands fa-google-play"></i>Download</b></Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default About;