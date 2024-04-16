import React from 'react'
import { Link } from 'react-router-dom'
import logos from '../Images/prime.png'

export default function Navbar() {
  return (
    <>
  <nav className="navbar fixed-top  navbar-expand-lg bg-white">
  <div className="container">
    <Link className="navbar-brand" to="/home"><img src={logos}  width={"200px"} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto">
        <li className="nav-item">
          <Link className="nav-link active mx-3" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active mx-3" aria-current="page" to="/aboutus">Aboutus</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link active mx-3" aria-current="page" to="/service">Service</Link>
    </li>
    <li className="nav-item">
    <Link className="nav-link active mx-3" aria-current="page" to="workshop">Workshops</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link active mx-3" aria-current="page" to="contactus">Contact us</Link>
</li> 
      </ul>
      <i class="fa-solid fa-globe"></i>
       <ul  className="dropdown py-auto mx-0 px-2">
       <li className="btn p-0  m-0" type="submit">Ar</li>/
       <li className="btn p-0  m-0" type="submit">En</li>
       </ul>

 
    </div>
  </div>
</nav>

    </>
  )
}
