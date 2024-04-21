import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
import serviceIcon1 from "../../assets/images/ServiceIcon1.svg";
import serviceIcon2 from "../../assets/images/serviceIcon2.svg";
import serviceIcon3 from "../../assets/images/serviceIcon3.svg";
import serviceIcon4 from "../../assets/images/serviceIcon4.svg";
import serviceIcon5 from "../../assets/images/serviceIcon5.svg";

import vid from "../../assets/images/video.svg";
import customers from "../../assets/images/ourCustomers.svg";

export default function Home() {
  let nav = useNavigate();

  const { t } = useTranslation();
   
  return (
    <>
      <div className="d-flex w-100 align-items-center bg-danger vh-100">
        <img src={img} className="w-100 vh-100" alt="" />
        <div className="customImgHome w-100 vh-100"></div>
        <div className="homeCustom align-items-center ms-5 ps-5 w-100">
          <div className=" ms-4 ps-1">
            <h2 className="homecustom2  text-white ms-5 ps-5">
              <p>{t('home.hero.title.prime-forP1')}</p>
              <p className="w-100">{t('home.hero.title.prime-forP2')}</p>
            </h2>
            <p className="homecustom3 ms-5 ps-5">{t('home.hero.title.prime-forP3')}</p>
            <button
              className="customBtn btn p-3  text-center"
              onClick={() => nav("/contactus")}
            >
             {t("home.hero.title.prime-forBtn")}<i class="fa-solid fa-phone-volume"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="container  vh-100 d-flex align-items-center ">
        <div className="row">
          <div className="col-md-5    d-flex justify-content-center align-items-center">
            <div className="customAbout  rounded">
              <img src={logoo} className=" text-white w-100" alt="" />
            </div>
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

            <div className="h4">{t("About.hero.title.prime-forh4")}</div>
            <div className="h5">{t("About.hero.title.prime-forh5")}</div>

           <p><i class="fa-solid fa-circle pe-2 pt-3"></i>{t("About.hero.title.prime-forBullet1")}</p>
           <p><i class="fa-solid fa-circle pe-2"></i>{t("About.hero.title.prime-forBullet2")}</p>
           <p><i class="fa-solid fa-circle pe-2"></i>{t("About.hero.title.prime-forBullet3")}</p>
          </div>
        </div>
      </div>
      <div className="container-fluid  d-flex justify-content-center align-items-center serviceCustomeHome">
        <div className="container">
          <div className="row">
            <div className="col-md-3  ">
            <div className='serviceBoxHome mb-2'>
            <div className=" w-100 h-100">
            <div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon1} width={"35px"} height={"35px"} alt="" /></div>
            <div className="pt-3 text-center  fw-bolder">{t("OurService.hero.card1")}</div>
            
            </div>
            
            </div>
            <div  className='serviceBoxHome   bg-danger'>
            <div className=" w-100 h-100">
            <div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon1} width={"35px"} height={"35px"} alt="" /></div>
            <div className="pt-3 text-center  fw-bolder">{t("OurService.hero.card2")}</div>
            
            </div>
            </div>
            </div>
            <div className="col-md-3  ">
            <div className='serviceBoxHome mb-2'>
            <div className=" w-100 h-100">
            <div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon2} width={"35px"} height={"35px"} alt="" /></div>
            <div className="pt-3 text-center  fw-bolder">{t("OurService.hero.card3")}</div>
            
            </div>
            
            </div>
            <div  className='serviceBoxHome   bg-danger'>
            <div className=" w-100 h-100">
            <div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon2} width={"35px"} height={"35px"} alt="" /></div>
            <div className="pt-3 text-center  fw-bolder">{t("OurService.hero.card4")}</div>
            
            </div>
            </div>
            </div>
            <div className="col-md-3  ">
            <div className='serviceBoxHome mb-2'>
            <div className=" w-100 h-100">
            <div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon3} width={"35px"} height={"35px"} alt="" /></div>
            <div className="pt-3 text-center  fw-bolder">{t("OurService.hero.card5")}</div>
            
            </div>
            
            </div>
            <div  className='serviceBoxHome   bg-danger'>
            <div className=" w-100 h-100">
            <div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon3} width={"35px"} height={"35px"} alt="" /></div>
            <div className="pt-3 text-center  fw-bolder">{t("OurService.hero.card6")}</div>
            
            </div>
            </div>
            </div>
            <div className="col-md-3 text-white">
              <small>{t("ourService.hero.title.prime.forSmall")}</small>
              <p className="fs-2 fw-bolder">{t("ourService.hero.title.prime.forh2")}</p>
              <p className="fs-4">
           
              {t("ourService.hero.title.prime.forP1")}
              </p>
              <p>
              {t("ourService.hero.title.prime.forP2")}

              </p>
              <button
              className="customBtn2 btn py-3 px-5 mt-5"
              onClick={() => nav("/contactus")}
            >
             {t("home.hero.title.prime-forBtn")}<i class="fa-solid fa-phone-volume"></i>
            </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <p>{t("ourProject.hero.title")}</p>
            <h2>{t("ourProject.hero.title.P1")}</h2>
            <h2>{t("ourProject.hero.title.P2")}</h2>
          </div>

          <p
            className="customProjects text-info fw-bolder"
            onClick={() => nav("/projects")}
          >
            <span className="pe-1">{t("ourProject.hero.title.btn")}</span>{" "}
            <i class="fa-solid fa-arrow-right"></i>
          </p>
        </div>
        <div className="row justify-content-center mt-5">
       
          <div className="card col-md-3">
            <img src={img2} className="cardImg card-img-top w-100" alt="..." />
            <div className="card-body">
              <p className="card-text">
              {t("ourProject.hero.title.subP2")}

              </p>
            </div>
          </div>
          <div className="card col-md-3">
            <img src={img3} className="cardImg card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
              {t("ourProject.hero.title.subP3")}

              </p>
            </div>
          </div>
        
          <div className="card col-md-3">
          <img src={img1} className="cardImg card-img-top w-100" alt="..." />
          <div className="card-body">
            <p className="card-text">
            {t("ourProject.hero.title.subP1")}
            </p>
          </div>
     
         
          </div>
        </div>
      </div>
      <div className="container-fluid customCounter bg-danger">
        <div className="row justify-content-center  align-content-center align-items-center">
          <div className="d-flex align-self-center w-25 align-items-center mt-5">
            <div className="px-3  align-content-end">
              <p className=" mt-4 mb-0 fs-2 text-white text-center">350</p>
              <p className=" mb-4 mt-0 pt-0 fs-5 text-white">Employees</p>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-users fs-1 text-white"></i>
            </div>
          </div>
          <div className="d-flex align-self-center w-25 align-items-center mt-5">
            <div className="px-3  align-content-end">
              <p className=" mt-4 mb-0 fw-bold fs-3 text-white text-center">
                21,000
              </p>
              <p className=" mb-4 mt-0 pt-0  text-white small">
                AREAS SERVICE CENTER
              </p>
            </div>
            <div className=" justify-content-center">
              <i class="fa-solid fa-location-dot fs-1 text-white"></i>
            </div>
          </div>
          <div className="d-flex align-self-center w-25 align-items-center mt-5">
            <div className="px-3  align-content-end">
              <p className=" mt-4 mb-0 fw-bold fs-3 text-white text-center">
                12
              </p>
              <p className="  mb-4 mt-0 pt-0  text-white small">
                Eureapean Agents
              </p>
            </div>
            <div className=" d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-users fs-1 text-white "></i>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center   mt-5 pt-5 my-5">
        <h2>{t("workshop.hero.title")}</h2>
        <p className="container px-5 justify-content-center text-center">
        {t("workshop.home.p")}
        </p>
        <div className="m-3">Lorem ipsum dolor sit amet.</div>

        <div className="mt-3">
          {" "}
          <WorkNav />{" "}
        </div>
        <Outlet />
      </div>
      <div className="mt-5">
        <img src={vid} className="w-100" alt="" />
      </div>
      <div className="container mb-5 pb-5">
        <h2 className="mt-5 text-center">{t("topCustomers.home.title")}</h2>
        <div>
          <img src={customers} className="w-100 mt-5" alt="" />
        </div>
      </div>
    </>
  );
}
