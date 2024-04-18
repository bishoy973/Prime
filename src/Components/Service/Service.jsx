import React from 'react'
import service1 from '../Images/service1.svg'
import service2 from '../Images/service2.svg'
import service3 from '../Images/service3.svg'
import service4 from '../Images/service4.svg'
import service5 from '../Images/service4.svg'
import service6 from '../Images/service5.svg'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


import { useNavigate } from 'react-router-dom'
import vid from '../Images/video.svg';
import aboutLeft from '../Images/aboutImgLeft.svg'
import aboutRight from '../Images/aboutImg 2.svg'
import serviceMain from '../Images/head_services.png'
import CollapseService from './Collapse'





export default function Service() {
 

    return (
      <>
      <div className='d-flex justify-content-center w-100 align-items-center bg-danger'>
      <img src={serviceMain} className='w-100' alt="" />
  <div className="homeCustom align-items-center bg w-100">
  <div className="position-absolute justify-content-center w-100">
  <p className='w-100 text-white  d-flex justify-content-center fs-1 fw-bolder'>Services</p>
  </div>
  </div>
  </div>
  
<div className="container m-4 w-100 d-flex mt-5">
<div className="row w-100 justify-content-center mx-auto">
<div className="col-md-3" >
<img src={service1} className='w-100 p-1' alt="" />
<img src={service2} className='w-100 p-1' alt="" />
</div>
<div className="col-md-3 " >
<img src={service3} className='w-100 p-1 ' alt="" />
<img src={service4} className='w-100 p-1 ' alt="" />
</div>
<div className="col-md-3 " >
<img src={service5} className='w-100 p-1 ' alt="" />
<img src={service6} className='w-100 p-1 ' alt="" />
</div>
</div>
</div>
 
 <div className="d-flex"><div className="bg-danger">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique exercitationem iste delectus nisi esse. Aliquam, sunt. Hic nemo a corrupti.</div>
 
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
