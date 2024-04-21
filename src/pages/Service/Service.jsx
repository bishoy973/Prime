import React from 'react'
import vid from "../../assets/images/video.svg";
import serviceMain from "../../assets/images/head_services.png";
import CollapseService from '../../Components/Service/Collapse';
import serviceIcon1 from "../../assets/images/ServiceIcon1.svg";
import serviceIcon2 from "../../assets/images/serviceIcon2.svg";
import serviceIcon3 from "../../assets/images/serviceIcon3.svg";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';






export default function Service() {
  let nav = useNavigate();

const {t} = useTranslation();
    return (
      <>
      <div className="d-flex justify-content-center w-100 align-items-center">
      <img src={serviceMain} className="w-100" alt="" />
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
  
<div className="container m-4 w-100 d-flex mt-5">
<div className="row  justify-content-center mx-auto">
<div className="col-md-3 me-5" >
<div className='serviceBox mb-2'>
<div className=" w-100 h-100">
<div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon1} width={"35px"} height={"35px"} alt="" /></div>
<div className="pt-3 text-center  fw-bolder">{t("OurService.Section.div1")}</div>

</div>

</div>
<div  className='serviceBox   bg-danger'>
<div className=" w-100 h-100">
<div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon1} width={"35px"} height={"35px"} alt="" /></div>
<div className="pt-3 text-center  fw-bolder">{t("OurService.Section.div2")}</div>

</div>
</div>
</div>
<div className="col-md-3 me-5" >
<div className='serviceBox mb-2'>
<div className=" w-100 h-100">
<div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon2} width={"35px"} height={"35px"} alt="" /></div>
<div className="pt-3 text-center  fw-bolder">{t("OurService.Section.div3")}</div>

</div>

</div>
<div  className='serviceBox  h-50 bg-danger'>
<div className=" w-100 h-100">
<div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon2} width={"35px"} height={"35px"} alt="" /></div>
<div className="pt-3 text-center  fw-bolder">{t("OurService.Section.div4")}</div>

</div>
</div>
</div>

<div className="col-md-3" >
<div className='serviceBox mb-2 h-50'>
<div className=" w-100 h-100">
<div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon3} width={"35px"} height={"35px"} alt="" /></div>
<div className="pt-3 text-center  fw-bolder">{t("OurService.Section.div5")}</div>

</div>

</div>
<div  className='serviceBox  h-50 bg-danger'>
<div className=" w-100 h-100">
<div className=' h-50 mx-auto d-flex align-items-end justify-content-center'><img src={serviceIcon3} width={"35px"} height={"35px"} alt="" /></div>
<div className="pt-3 text-center  fw-bolder">{t("OurService.Section.div6")}</div>

</div>
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
