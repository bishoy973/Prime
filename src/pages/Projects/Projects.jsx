import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import imgProject from "../../assets/images/head_project.png";
import projectImg from "../../assets/images/image6.png";
import img1 from "../../assets/images/about_1.png";
import img2 from "../../assets/images/contact.png";
import img3 from "../../assets/images/about-3.png";

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
        <img src={imgProject} className="w-100 vh-100" alt="" />
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

   <ProjectsList/>     
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 ProjectsCustom pt-5 ps-4">
            <h2 className="w-75">{t("OurProjectsminiTitle")}</h2>
            <p className="text-center w-50">{t("OurProjectsminiProjects")}</p>
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
 const ProjectsList = () => {
  const { t } = useTranslation();

  return (
    <div className="row justify-content-center mt-5">
      {ourProjectsList.map(({ img, title, text }) => (
        <div className="col-12 col-lg-4 card project-overview">
        <img src={img} className="w-100 rounded-2" height={"250px"} alt="" />
          <div/>

          <div class="card-body">
            <h5 class="card-title text-primary">{t(title)}</h5>
            <p className="card-text">{t(text)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

 const ourProjectsList = [
  {
    img: img2,
    title: "ourProject.overview.pOne.title",
    text: "ourProject.overview.pOne.text",
  },
  {
    img: img1,
    title: "ourProject.overview.pTwo.title",
    text: "ourProject.overview.pTwo.text",
  },
  {
    img: img3,
    title: "ourProject.overview.pThree.title",
    text: "ourProject.overview.pThree.text",
  },
];

