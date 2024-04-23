import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import imgProject from "../../assets/images/head_project.png";
import projectImg from "../../assets/images/image6.png";
import img from "../../assets/images/slider-image-2.jpeg";

export default function Projects() {
  let nav = useNavigate();

  const { t } = useTranslation();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p5">
      <div className="d-flex justify-content-center w-100 align-items-center bg-danger">
        <img src={imgProject} className="w-100" alt="" />
        <div className="homeCustom align-items-center bg w-100">
          <div className="position-absolute justify-content-center w-100">
            <p className="w-100 text-white  d-flex justify-content-center fs-1 fw-bolder">{t("OurProjects.title")}</p>
            <p className="w-100 text-white  d-flex justify-content-center">{t("OurProjects.Section2.Title")}</p>
          </div>
        </div>
      </div>

      <div className="container mt-5 pt-5">
        <div className="mt-5 pt-5">
          <div className="d-flex justify-content-between">
            <h2>
              Learn more about our projects <br />
              Lorem ipsum dolor sit amet.
            </h2>
          </div>
        </div>

        <Slider {...settings} className="mb-5">
          <div className="card col-md-3 mx-auto mt-4 w-50 text-center bg-danger d-flex justify-content-center ">
            <img src={img} className="w-100 " alt="..." />
            <div className="card-body">
              <p className="card-text">{t("OurProjects.Section2.Card1")}</p>
            </div>
          </div>
          <div className="card col-md-3 mx-auto mt-4 w-50 text-center bg-danger d-flex justify-content-center ">
            <img src={img} className="w-100 " alt="..." />
            <div className="card-body">
              <p className="card-text">{t("OurProjects.Section2.Card2")}</p>
            </div>
          </div>
          <div className="card col-md-3 mx-auto mt-4 w-50 text-center bg-danger d-flex justify-content-center ">
            <img src={img} className="w-100 " alt="..." />
            <div className="card-body">
              <p className="card-text">{t("OurProjects.Section2.Card3")}</p>
            </div>
          </div>
        </Slider>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ProjectsCustom pt-5 ps-4">
            <h2 className="w-75">{t("OurProjectsminiTitle")}</h2>
            <p>{t("OurProjectsminiProjects")}</p>
            <button className="customBtn btn p-3  text-center" onClick={() => nav("/contactus")}>
              Contact Us <i class="fa-solid fa-phone-volume"></i>
            </button>
          </div>
          <div className="col-md-6  ProjectsCustom">
            <img src={projectImg} className="w-75  h-100  p-5" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
