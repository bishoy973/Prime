import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import StatsList from "./components/Stats";
import { OurServices } from "./components/OurServices";
import ProjectsOverview from "./components/OurProjects";
import WorkshopsTabs from "./components/WorkshopCarousel/WorkshopCarousel";

import WorkNav from "../../WorkshopLayout/WorkNav";

import img from "../../assets/images/image 97.png";
import img1 from "../../assets/images/about_1.png";
import img2 from "../../assets/images/about-2.png";
import img3 from "../../assets/images/about-3.png";
import logoo from "../../assets/images/logo.png";
import frame1 from "../../assets/images/Frame1.svg";
import frame2 from "../../assets/images/Frame2.svg";
import frame3 from "../../assets/images/Frame3.svg";
import frame4 from "../../assets/images/Frame4.svg";
import frame5 from "../../assets/images/Frame5.svg";
import frame6 from "../../assets/images/Frame6.svg";

import vid from "../../assets/images/video.svg";
import customers from "../../assets/images/ourCustomers.svg";

export default function Home() {
  let nav = useNavigate();

  const { t } = useTranslation();

  return (
    <>
      <div className="cover-container d-flex align-items-center col-12 bg-danger w-100  vh-100">
        <img src={img} className="img-fluid h-100" alt="" />
        <div className="customImgHome w-100 vh-100"></div>
        <div className="homeCustom align-items-center ms-5 ps-5 w-100">
          <div className=" ms-4 ps-1">
            <h2 className="homecustom2  text-white ms-5 ps-5">
              <p>{t("home.hero.title.prime-forP1")}</p>
              <p className="w-100">{t("home.hero.title.prime-forP2")}</p>
            </h2>
            <p className="homecustom3 ms-5 ps-5">{t("home.hero.title.prime-forP3")}</p>
            <button className="customBtn btn p-3  text-center" onClick={() => nav("/contactus")}>
              {t("home.hero.title.prime-forBtn")}
              <i class="fa-solid fa-phone-volume"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="container vh-100 d-flex align-items-center">
        <div className="row">
          <div className="col-lg-5 mb-4 mb-lg-2 d-flex justify-content-center align-items-center">
            <div className="customAbout rounded">
              <img src={logoo} className="" alt="" />
            </div>
            <div className="w-50 h-100 pe-2">
              <img src={img1} className="w-100 h-100" alt="" />
            </div>
            <div className="w-50">
              <img src={img2} className="w-100 h-50 pb-1" alt="" />
              <img src={img3} className="w-100 h-50 pt-1" alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <h3>{t("home.hero.title.prime-forP2")}</h3>

            <div className="h4">{t("About.hero.title.prime-forh4")}</div>
            <div className="h5">{t("About.hero.title.prime-forh5")}</div>

            <p>
              <i class="fa-solid fa-circle pe-2 pt-3"></i>
              {t("About.hero.title.prime-forBullet1")}
            </p>
            <p>
              <i class="fa-solid fa-circle pe-2"></i>
              {t("About.hero.title.prime-forBullet2")}
            </p>
            <p>
              <i class="fa-solid fa-circle pe-2"></i>
              {t("About.hero.title.prime-forBullet3")}
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid  d-flex justify-content-center align-items-center our-services-section">
        <div className="p-10">
          <div className="row">
            <div className="col-lg-8">
              <OurServices />
            </div>
            <div className="col-lg-4 text-white">
              <small>{t("ourService.hero.title.prime.forSmall")}</small>
              <p className="fs-2 fw-bolder">{t("ourService.hero.title.prime.forh2")}</p>
              <p className="fs-4">{t("ourService.hero.title.prime.forP1")}</p>
              <p>{t("ourService.hero.title.prime.forP2")}</p>
              <button className="customBtn2 btn py-3 px-5 mt-5" onClick={() => nav("/contactus")}>
                {t("home.hero.title.prime-forBtn")}
                <i class="fa-solid fa-phone-volume"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProjectsOverview />

      <StatsList />

      <div className="workshops-section my-10">
        <div className="text-center mb-5">
          <h2 className="text-uppercase mb-4">{t("workshop.hero.title")}</h2>
          <p className="container w-100 w-lg-50 px-5 justify-content-center text-center">{t("workshop.home.p")}</p>
        </div>

        <WorkshopsTabs />
      </div>

      <div className="mt-5">
        <img src={vid} className="w-100" alt="" />
      </div>

      <div className="container my-10">
        <h2 className="text-center">{t("topCustomers.home.title")}</h2>
        <div>
          <img src={customers} className="w-100 mt-5" alt="" />
        </div>
      </div>
    </>
  );
}
