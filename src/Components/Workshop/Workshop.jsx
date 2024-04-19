import React from 'react'
import WS1 from '../../assets/images/workshop.png'
import imgWS from '../../assets/images/head_workshop.png'


export default function Workshop() {
  return (
    
    <div>
    <div className="d-flex justify-content-center w-100 align-items-center bg-danger">
        <img src={imgWS} className="w-100" alt="" />
        <div className="homeCustom align-items-center bg w-100">
          <div className="position-absolute justify-content-center w-100">
            <p className="w-100 text-white  d-flex justify-content-center fs-1 fw-bolder">
             Workshops
            </p>
            <p className="w-100 text-white  d-flex justify-content-center">
            Creating spaces | Enhancing lives
          </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
      <div className="row mt-5">
      <div className="col-md-4 dynamicCustom mt-3 mb-2">
      <h2 className="mt-4 pt-3">Dynamic Balancing</h2>
      <p>We have the latest German balancing machine "SCHENCK" with the possibility of doing dynamic balancing up to 12 meters long and weights up to 25 tons ,Balancing for all kinds of machines</p>
      <p>machines e.g. Turbines, Engines, fans, washers... etc with the possibility of making detection of dynamic balancing on customer's site using the German SMART Balancer by our specialists in the Machines Axial tuning work</p>
      </div>
      
      <div className="col-md-6">
      <img src={WS1} className='w-100 dynamicCustom' alt="" />
      </div>
      </div>
    

      </div> 
      <div className="container mt-5">
      <div className="row mt-5 d-flex">
      <div className="col-md-6">
      <img src={WS1} className='w-100 dynamicCustom' alt="" />
      </div>

      <div className="col-md-4 dynamicCustom mt-3 mb-2">
      <h2 className="mt-4 pt-3">Dynamic Balancing</h2>
      <p>We have the latest German balancing machine "SCHENCK" with the possibility of doing dynamic balancing up to 12 meters long and weights up to 25 tons ,Balancing for all kinds of machines</p>
      <p>machines e.g. Turbines, Engines, fans, washers... etc with the possibility of making detection of dynamic balancing on customer's site using the German SMART Balancer by our specialists in the Machines Axial tuning work</p>
      </div>
      </div>
   
    

      </div> 
      <div className="container mt-5">
      <div className="row mt-5">
      <div className="col-md-4 dynamicCustom mt-3 mb-2">
      <h2 className="mt-4 pt-3">Dynamic Balancing</h2>
      <p>We have the latest German balancing machine "SCHENCK" with the possibility of doing dynamic balancing up to 12 meters long and weights up to 25 tons ,Balancing for all kinds of machines</p>
      <p>machines e.g. Turbines, Engines, fans, washers... etc with the possibility of making detection of dynamic balancing on customer's site using the German SMART Balancer by our specialists in the Machines Axial tuning work</p>
      </div>
      
      <div className="col-md-6">
      <img src={WS1} className='w-100 dynamicCustom' alt="" />
      </div>
      </div>
    

      </div> 
    </div>
  )
}
