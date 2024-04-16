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



<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
</head>



export default function Service() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
 
  


    <div>
    <div class="container mt-4">
    <div id="accordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Question 1: What is Bootstrap?
            </button>
          </h5>
        </div>
  
        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">
            Bootstrap is a popular front-end framework for building responsive and mobile-first websites and web applications.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h5 class="mb-0">
            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Question 2: How do I get started with Bootstrap?
            </button>
          </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div class="card-body">
            To get started with Bootstrap, you can include Bootstrap's CSS and JavaScript files in your project, and start using its predefined components and utilities.
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>

  
  
  
  
      <div className="mt-5 mb-5">
      <img src={vid} className='w-100' alt="" />
      
      </div>
  
  
  
      </>
    )
  }
