import React from 'react'

export default function Form() {
  return (
    <> 
  <h4 className="my-3 mx-auto fw-bolder fs-5">Leave your contact here</h4>
    <div className="mb-3">

    <label for="exampleFormControlInput1" className="form-label">Company Name</label>
    <input type="text" className="form-control"  placeholder="type your Company Name" />
  </div>
  <div className="mb-3">

    <label for="exampleFormControlInput1" className="form-label">Description</label>
    <input type="text" className="form-control"  placeholder="Tell us about your company" />
  </div>
    <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control"  placeholder="type your email here" />
  </div>
  <div className="mb-3">  
  <label for="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="text" className="form-control"  placeholder="type your phone here" />
</div>
    </>
  )
}
