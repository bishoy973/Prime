import React from 'react'
import WS1 from '../Images/workshop.png'

export default function Dynamicbalance() {
  return (
    <div>
      <div className="container">
      <div className="row mt-4">
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
