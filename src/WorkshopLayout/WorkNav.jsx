import React from "react";
import { Link } from "react-router-dom";

export default function WorkNav() {
  return (
    <>
      <nav className="navbar  navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="forming">
                  Forming(Metal working)
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="dynamic">
                  Dynamic Balancing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="welding">
                  Welding
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="Pressing">
                  Pressing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="Hydraulic">
                  Hydraulic Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="metal">
                  Metal Cutting
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="wire">
                  Wire Manfucture and supply
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
