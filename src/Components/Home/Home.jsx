/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import img from '../Images/image 97.png'
import { Outlet, useNavigate } from 'react-router-dom'
import img1 from '../Images/about_1.png'
import img2 from '../Images/about-2.png'
import img3 from '../Images/about-3.png'
import logoo from '../Images/logo.png'
import frame1 from '../Images/Frame1.svg'
import frame2 from '../Images/Frame2.svg'
import frame3 from '../Images/Frame3.svg'
import frame4 from '../Images/Frame4.svg'
import frame5 from '../Images/Frame5.svg'
import frame6 from '../Images/Frame6.svg'
import WorkNav from '../../WorkshopLayout/WorkNav'
import vid from '../Images/video.svg';
import customers from '../Images/ourCustomers.svg';










export default function Home() {
let nav =  useNavigate();
  return (
    <>
    <div className='d-flex w-100 align-items-center bg-danger vh-100'>
    <img src={img} className='w-100 vh-100' alt="" />
<div className='customImgHome w-100 vh-100'></div>
<div className="homeCustom align-items-center ms-5 ps-5 w-100">
<div className=" ms-4 ps-1">
<h2 className='homecustom2  text-white ms-5 ps-5'><p>Prime  FOR</p>
<p className='w-100'>ENGINEERING SOLUTIONS</p></h2>
<p className='homecustom3 ms-5 ps-5'>Ask For the right Solution</p>
<button className='customBtn btn p-3  text-center' onClick={()=>nav("/contactus")}>Contact Us <i class="fa-solid fa-phone-volume"></i></button>
</div>
</div>
</div>


      // /*===========================Start Of About Section==========================*/ 

      <div className='container  vh-100 d-flex align-items-center '>
    <div className="row">
    <div className="col-md-5    d-flex justify-content-center align-items-center">
    <div className='customAbout  rounded'>
    <img src={logoo} className=" text-white w-100" alt="" />
    </div>
    <div  className="w-50 h-100 pe-2">
     <img src={img1} className='w-100 h-100' alt="" />
    </div>
   <div className="w-50">
   <img src={img2} className='w-100 h-50 pb-1 ' alt="" />
   <img src={img3} className='w-100 h-50 pt-1' alt="" />
   </div>
    </div>
    <div className="col-md-6">
    <h3>About us</h3>

    <div className="h4">Lorem ipsum dolor sit.</div>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, dolores.</p>

    </div>
    </div>   
    </div>

      /*===========================End Of About Section==========================*/
            /*===========================Start Of Service Section==========================*/ 
           
<div className="container-fluid  d-flex justify-content-center align-items-center serviceCustomeHome">
<div className="container">
<div className="row">
<div className="col-md-3  " >
<img src={frame1} className='w-100' alt="" />
<img src={frame2} className='w-100' alt="" />
</div>
<div className="col-md-3 " >
<img src={frame3} className='w-100' alt="" />
<img src={frame4} className='w-100' alt="" />
</div>
<div className="col-md-3 " >
<img src={frame5} className='w-100' alt="" />
<img src={frame6} className='w-100' alt="" />
</div>
<div className="col-md-3 text-white">
<small>Our Service</small>
<p className="fs-2 fw-bolder">our main service</p>
<p className='fs-4'>Prime has the satisfaction of its customers in the following fields</p> 
<p>In 2020 Prime made an agreement with Atta sons to integrate the contracting works and maintenance works with one of the biggest workshops in the middle east
</p>
</div>
</div>
</div>
</div>


  // /*===========================End Of Service Section==========================*/ 
// Our Projects
<div className="container">
<div className='d-flex justify-content-between'>
<div>
<p>OUR PROJECTS</p>
<h2>Learn more about our projects</h2>
<h2>And the solutions we provide</h2>
</div>
      
      <p className="customProjects text-info fw-bolder" onClick={()=>nav('/workshop')}><span className='pe-1'>Show more</span> <i class="fa-solid fa-arrow-right"></i></p>
     </div>
<div className="row justify-content-center mt-5">
<div className="card col-md-3">
  <img src={img1} className="cardImg card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card col-md-3">
  <img src={img2} className="cardImg card-img-top w-100" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card col-md-3">
  <img src={img3} className="cardImg card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
</div>


<div className="container-fluid customCounter bg-danger">
<div className="row justify-content-center  align-content-center align-items-center">
<div className="d-flex align-self-center w-25 align-items-center mt-5">
<div className='px-3  align-content-end'>
<p className=' mt-4 mb-0 fs-2 text-white text-center'>350</p>
<p className=' mb-4 mt-0 pt-0 fs-5 text-white'>Employees</p>
</div>
<div className=" d-flex justify-content-center align-items-center"><i class="fa-solid fa-users fs-1 text-white"></i></div>
</div>
<div className="d-flex align-self-center w-25 align-items-center mt-5">
<div className='px-3  align-content-end'>
<p className=' mt-4 mb-0 fw-bold fs-3 text-white text-center'>21,000</p>
<p className=' mb-4 mt-0 pt-0  text-white small'>AREAS SERVICE CENTER</p>
</div>
<div className=" justify-content-center"><i class="fa-solid fa-location-dot fs-1 text-white"></i></div>
</div>
<div className="d-flex align-self-center w-25 align-items-center mt-5">
<div className='px-3  align-content-end'>
<p className=' mt-4 mb-0 fw-bold fs-3 text-white text-center'>12</p>
<p className='  mb-4 mt-0 pt-0  text-white small'>Eureapean Agents</p>
</div>
<div className=" d-flex justify-content-center align-items-center"><i class="fa-solid fa-users fs-1 text-white "></i></div>
</div>
</div>
</div>

<div className="text-center   mt-5 pt-5 my-5">
<h2>Workshops</h2>
<p className="container px-5 justify-content-center text-center">One of the largest integrated service centers in heavy-duty maintenance with the provision of all services in the areas that characterize our company e.g. Metalworking and forming field, Metal Cutting, Dynamic Balancing Field, welding field.</p>
    <div className='m-3'>Lorem ipsum dolor sit amet.</div>

    <div className="mt-3">    <WorkNav/> </div>
   <Outlet/>

    </div>


    <div className="mt-5">
    <img src={vid} className='w-100' alt="" />
    
    </div>


    <div className='container mb-5 pb-5'>
    <h2 className='mt-5 text-center'>OUR TOP CUSTOMERS</h2>
    <div>
    <img src={customers} className='w-100 mt-5' alt="" />
    </div>
    </div>
    </>
  )
}
