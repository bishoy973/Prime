import React from "react";

import logos from "../../assets/images/prime.png";

export default function Footer() {
  return (
    <>
      <hr className="fs-4" />
      <div className="container footer">
        <div className="row d-flex">
          <div className="col-md-3 d-flex">
            <div className="w-50">
              <img src={logos} className="w-100 d-flex" alt="" />
            </div>
            <div className="w-100">
              <p className="d-flex w-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                est?
              </p>
              <div>
                <p>
                  Address: 7 Hamed Al-kholy st, San Stefano Alexandria, EGYPT
                </p>
              </div>
              <div typeof="tel" className="my-3 ms-0">
                +20-106 344 0 288
              </div>
              <div className="my-3">E-mail: info@prime-solutions.org</div>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Company</h3>
            <div className="w-100">
              <p className="d-flex w-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                est?
              </p>
              <div>
                <p>
                  Address: 7 Hamed Al-kholy st, San Stefano Alexandria, EGYPT
                </p>
              </div>
              <div typeof="tel" className="my-3 ms-0">
                +20-106 344 0 288
              </div>
              <div className="my-3">E-mail: info@prime-solutions.org</div>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="mb-3">Customer Care</h3>
            <div className="w-100">
              <p className="d-flex w-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                est?
              </p>
              <div>
                <p>
                  Address: 7 Hamed Al-kholy st, San Stefano Alexandria, EGYPT
                </p>
              </div>
              <div typeof="tel" className="my-3 ms-0">
                +20-106 344 0 288
              </div>
              <div className="my-3">E-mail: info@prime-solutions.org</div>
            </div>
          </div>

          <div className="col-md-3">
            <h3 className="mb-3">News Letter</h3>
            <div className="w-100">
              <p className="d-flex w-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                est?
              </p>
              <div>
                <p>
                  Address: 7 Hamed Al-kholy st, San Stefano Alexandria, EGYPT
                </p>
              </div>
              <div typeof="tel" className="my-3 ms-0">
                +20-106 344 0 288
              </div>
              <div className="my-3">E-mail: info@prime-solutions.org</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
