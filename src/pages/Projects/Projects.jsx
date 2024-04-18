import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../assets/images/slider-image-2.jpeg"


export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className='container mt-5 pt-5'>
     <div className='mt-5 pt-5'>
     <div className='d-flex justify-content-between'>
      <h2>Learn more about our projects</h2>
      <p className="text-info "><span className='pe-1'>learn more</span> <i class="fa-solid fa-arrow-right"></i></p>
     </div>
      </div>
  
<Slider {...settings} className='mb-5'>
    
    <div className="card col-md-3 mx-auto mt-4 w-50 text-center bg-danger d-flex justify-content-center ">
<img src={img} className="w-100 " alt="..." />
<div className="card-body">
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>
<div className="card col-md-3 mx-auto mt-4 w-50 text-center bg-danger d-flex justify-content-center ">
<img src={img} className="w-100 " alt="..." />
<div className="card-body">
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>    
  </Slider>
  
</div>
<div className='customDiv mb-5'>

<div className="container">
<div className="row justify-content-center  align-content-center align-items-center">
<div className="d-flex align-self-center w-25 align-items-center mt-5">
<div className='px-3  align-content-end'>
<p className=' mt-4 mb-0 fs-2 text-white'>350</p>
<p className=' mb-4 mt-0 pt-0 fs-5 text-white'>Employees</p>
</div>
<div className="customsqr d-flex justify-content-center align-items-center"><i class="fa-solid fa-users fs-4"></i></div>
</div>
<div className="d-flex align-self-center w-25 align-items-center mt-5">
<div className='px-3  align-content-end'>
<p className=' mt-4 mb-0 fs-2 text-white'>350</p>
<p className=' mb-4 mt-0 pt-0 fs-5 text-white'>Employees</p>
</div>
<div className="customsqr d-flex justify-content-center align-items-center"><i class="fa-solid fa-users fs-4"></i></div>
</div>
<div className="d-flex align-self-center w-25 align-items-center mt-5">
<div className='px-3  align-content-end'>
<p className=' mt-4 mb-0 fs-2 text-white'>350</p>
<p className=' mb-4 mt-0 pt-0 fs-5 text-white'>Employees</p>
</div>
<div className="customsqr d-flex justify-content-center align-items-center"><i class="fa-solid fa-users fs-4"></i></div>
</div>
</div>
</div>

</div>
<div className='text-center'>
<h2 className='text-center m-2 mb-4 fs-2 fw-bolder'>OUR TOP CUSTOMERS</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorum pariatur quidem! Assumenda, voluptas sed.</p>
</div>
<div>
<img src={img} className='w-100 mb-5 mt-5' height= "200px" alt="" />
</div>

    </>
  );
}
