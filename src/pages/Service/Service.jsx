import React from 'react'
import vid from "../../assets/images/video.svg";
import serviceMain from "../../assets/images/head_services.png";
import CollapseService from '../../Components/Service/Collapse';
import serviceIcon1 from "../../assets/images/ServiceIcon1.svg";
import serviceIcon2 from "../../assets/images/serviceIcon2.svg";
import serviceIcon3 from "../../assets/images/serviceIcon3.svg";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { OurServices } from '../Home/components/OurServices';






export default function Service() {
  let nav = useNavigate();

const {t} = useTranslation();
    return (
      <>
      <div className="d-flex justify-content-center vh-100  w-100 align-items-center">
      <img src={serviceMain} className="w-100 vh-100" alt="" />
      <div className="homeCustom align-items-center bg w-100">
        <div className="position-absolute justify-content-center w-100">
          <p className="w-100 text-white  d-flex justify-content-center fs-1 fw-bolder">
           {t("OurService.main.title")}
          </p>
          <p className="w-100 text-white  d-flex justify-content-center">
         {t("OurService.main.Subtitle")}
        </p>
        </div>
      </div>
    </div>
  
    <div className="cover-container  d-flex justify-content-center align-items-center our-services-section">
        <div className="overflow-hidden">
          <div className="row">
            <div className="col-lg-12">
              <OurServices />
            </div>
            <div className="col-lg-4 text-white ms-3 mt-2">
              <small>{t("ourService.hero.title.prime.forSmall")}</small>
              <p className="fs-2 fw-bolder">{t("ourService.hero.title.prime.forh2")}</p>
              <p className="fs-4">{t("ourService.hero.title.prime.forP1")}</p>
              <p>{t("ourService.hero.title.prime.forP2")}</p>
              <button className="customBtn2 btn py-3 px-5 mt-5 mb-3" onClick={() => nav("/contactus")}>
                {t("home.hero.title.prime-forBtn")}
                <i class="fa-solid fa-phone-volume"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
 <div className="FAQ mx-auto d-flex mx-3 px-5">
 <div className=" mt-2 pt-1">
 <h3>Frequently Asked Questions</h3>
 <p className="w-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique exercitationem iste delectus nisi esse. Aliquam, sunt. Hic nemo a corrupti</p>
 <button
 className="customBtn2 btn py-3 px-5 mt-5 mb-3"
 onClick={() => nav("/contactus")}
>
{t("home.hero.title.prime-forBtn")}<i class="fa-solid fa-phone-volume"></i>
</button>
 </div>
<CollapseService/>

 </div> 


    <div>

    </div>

  
  
  
  
      <div className="mt-5 mb-5">
      <img src={vid} className='w-100' alt="" />
      
      </div>
  
  
  
      </>
    )
  }
