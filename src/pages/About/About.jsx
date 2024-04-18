import React from "react";
import { useNavigate } from "react-router-dom";

import imgAbout from "../../assets/images/head_about.png";
import img3 from "../../assets/images/about-3.png";
import logoo from "../../assets/images/logo.png";
import img1 from "../../assets/images/about_1.png";
import img2 from "../../assets/images/about-2.png";
import vid from "../../assets/images/video.svg";
import aboutLeft from "../../assets/images/aboutImgLeft.svg";
import aboutRight from "../../assets/images/aboutImg 2.svg";

export default function About() {
  let nav = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center w-100 align-items-center bg-danger">
        <img src={imgAbout} className="w-100" alt="" />
        <div className="homeCustom align-items-center bg w-100">
          <div className="position-absolute justify-content-center w-100">
            <p className="w-100 text-white  d-flex justify-content-center fs-1 fw-bolder">
              About Us
            </p>
          </div>
        </div>
      </div>

      <div className="container  vh-100 w-100  d-flex align-items-center ">
        <div className="row">
          <div className="col-md-5    d-flex justify-content-center align-items-center">
            <div className="w-50 h-100 pe-2">
              <img src={img1} className="w-100 h-100" alt="" />
            </div>
            <div className="w-50">
              <img src={img2} className="w-100 h-50 pb-1 " alt="" />
              <img src={img3} className="w-100 h-50 pt-1" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h3>About us</h3>

            <div className="h4">Lorem ipsum dolor sit.</div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, dolores.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={aboutLeft} className="w-100" alt="" />
          </div>
          <div className="col-md-5">
            <img
              src={aboutRight}
              className="customPositionAbout d-flex w-100"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <img src={vid} className="w-100" alt="" />
      </div>
    </>
  );
}
