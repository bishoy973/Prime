import { useTranslation } from "react-i18next";

import img2 from "../../assets/images/about-2.png";
import img3 from "../../assets/images/about-3.png";
import aboutRight from "../../assets/images/aboutImg 2.svg";
import img1 from "../../assets/images/about_1.png";
import imgAbout from "../../assets/images/head_about.png";
import vid from "../../assets/images/video.svg";

export default function About() {
  // let nav = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <div className="d-flex justify-content-center w-100 align-items-center bg-danger">
        <img src={imgAbout} className="w-100" alt="" />
        <div className="homeCustom align-items-center bg w-100">
          <div className="position-absolute justify-content-center w-100">
            <p className="w-100 text-white  d-flex justify-content-center fs-1 fw-bolder">About Us</p>
          </div>
        </div>
      </div>

      <div className="container  vh-100 w-100  d-flex align-items-center ">
        <div className="row">
          <div className="col-md-5    d-flex justify-content-center align-items-center">
            <div className="w-50 h-100">
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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, dolores.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 aboutBoxContent">
            <p className="text-start fs-2 pt-2 ps-3 fw-bolder">{t("About.section.main.title")}</p>
            <p className="fs-4 ps-3 pe-2">{t("About.section.main.Subtitle")}</p>
            <div className="container">
              <div className="row">
                <div className="col-md-4 pt-3 d-flex">
                  <i class="fa-solid fa-circle px-1 pt-2"></i>
                  <h6 className="px-1 pt-2 titleFixedAbout">{t("About.section.left.title1")}</h6>
                  <p className="vl ms-2 pe-0"></p>
                </div>
                <p className=" col-md-8 pt-3">{t("About.section.right.description")}</p>

                <div className="col-md-4 pt-3 d-flex">
                  <i class="fa-solid fa-circle px-1 pt-2"></i>
                  <h6 className="px-1 pt-2 titleFixedAbout">{t("About.section.left.title2")}</h6>
                  <p className="vl ms-2 pe-0"></p>
                </div>
                <p className=" col-md-8 pt-3">{t("About.section.right.description2")}</p>
                <div className="col-md-4 pt-3 d-flex">
                  <i class="fa-solid fa-circle px-1 pt-2"></i>
                  <h6 className="px-1 pt-2 titleFixedAbout">{t("About.section.left.title3")}</h6>
                  <p className="vl ms-2 pe-0"></p>
                </div>
                <p className=" col-md-8 pt-2">{t("About.section.right.description3")} </p>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <img src={aboutRight} className="customPositionAbout d-flex w-100" alt="" />
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5">
        <img src={vid} className="w-100" alt="" />
      </div>
    </>
  );
}
