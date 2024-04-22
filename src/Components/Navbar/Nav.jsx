import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import logos from "../../assets/images/prime.png";

export default function Navbar() {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logos} width={"200px"} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/workshop">
                  Workshops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active mx-3" aria-current="page" to="contact-us">
                  Contact us
                </Link>
              </li>
            </ul>

            <div
              className="d-flex align-items-center py-auto mb-0 px-2"
              onClick={() => {
                if (lang === "en") return setLang("ar");
                return setLang("en");
              }}
            >
              <i class="fa-solid fa-globe mx-1" />
              <div className="btn p-0 m-0">{lang === "en" ? "عربي" : "English"}</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
