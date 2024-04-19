import React from 'react'
import contactHeader from '../../assets/images/head_contact.png'
import contacttImg from "../../assets/images/contact.png"


export default function Contactus() {
  return (
    <>
    <div className="d-flex justify-content-center w-100 align-items-center bg-danger mb-5">
        <img src={contactHeader} className="w-100" alt="" />
        <div className="homeCustom align-items-center bg w-100">
          <div className="position-absolute justify-content-center w-100">
            <p className="w-100 text-white  d-flex justify-content-center fs-1 fw-bolder">
            Contact Us
            </p>
          </div>
        </div>
      </div>

     
      <div className="">
      <div className="container mt-5">
  <div className="row">
  <div className="container-fluid position-relative d-flex justify-content-center contactCustom shadow">

<div className="position-absolute d-flex w-100 h-100">
<div>
<h2 className="pt-3 ps-3">Contact Us</h2>
<p className="pt-3 ps-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered simply free text available</p>
<p className="pt-3 ps-3"><i className="fa-solid fa-location-dot pe-1"></i>7 Mohandes Hamed Al Kholi, San Stefano, El Raml 1, Alexandria</p>
<p className="pt-3 ps-3"><i className="fa-solid fa-phone-volume pe-1"></i>+20-106 344 0 288</p>
<p className="pt-3 ps-3"><i className="fa-solid fa-envelope pe-1"></i>info@prime-solutions.org</p>


</div>
<div className=" h-100  p-3">
<img src={contacttImg} className="h-100" alt="" />
</div>

</div>

</div>
</div>

 

  </div>
      
  
   <div className="map-section">
<div className="gmap-frame">
<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=7%20%D8%B4%D8%A7%D8%B1%D8%B9%20%D8%AD%D8%A7%D9%85%D8%AF%20%D8%A7%D9%84%D8%AE%D9%88%D9%84%D9%8A%20,%20%D8%B3%D8%A7%D9%86%20%D8%A7%D8%B3%D8%AA%D9%8A%D9%81%D8%A7%D9%86%D9%88%20%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9+(Prime)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
</div>
</div>   
      </div>

    </>
  )
};