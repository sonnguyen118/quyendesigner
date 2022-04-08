import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Navbar = () => {
  // code bật tắt sub menu
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  const handleOpenMenu1 = () => {
    setMenu1(true);
  };
  const handleCloseMenu1 = () => {
    setMenu1(false);
  };
  const handleOpenMenu2 = () => {
    setMenu2(true);
  };
  const handleCloseMenu2 = () => {
    setMenu2(false);
  };
  const handleOpenMenu3 = () => {
    setMenu3(true);
  };
  const handleCloseMenu3 = () => {
    setMenu3(false);
  };
  //lo gic cuộn navabar fixed
  const [navbar, setNavbar] = useState(true);
  useEffect(function onFirstMount() {
    window.addEventListener("scroll", changeBackground);
    // window.addEventListener("scroll", SetbackToTop);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  return (
    <div className={navbar ? "navbar" : "navbar navbar-scroll"}>
      <div className="navbar-image"></div>
      <div className="navbar-main ">
        <div className="navbar-main-img1">
          <Image
            src={`/image/home_page/logo_1.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <nav role="navigation" className="nav">
          <ul className="nav-items">
            <li className="nav-item ">
              <a href="#" className="nav-link">
                <i className="navigation-logo-home fas fa-home"></i>
              </a>
            </li>
            <li
              className={
                menu1 ? "nav-item dropdown show-submenu" : "nav-item dropdown"
              }
              onMouseOver={handleOpenMenu1}
              onMouseOut={handleCloseMenu1}
            >
              <a href="#" className="nav-link">
                <span>Dịch vụ</span>
              </a>
              <nav className="submenu">
                <ul className="submenu-items">
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Product #1
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Product #2
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Product #3
                    </a>
                  </li>
                </ul>
              </nav>
            </li>
            <li
              className={
                menu2 ? "nav-item dropdown show-submenu" : "nav-item dropdown"
              }
              onMouseOver={handleOpenMenu2}
              onMouseOut={handleCloseMenu2}
            >
              <a href="#" className="nav-link">
                <span>Dự án</span>
              </a>
              <nav className="submenu">
                <ul className="submenu-items">
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      About
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Contact
                    </a>
                  </li>
                  <li className="submenu-item">
                    <hr className="submenu-seperator" />
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Support
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      FAQs
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </li>
            <li
              className={
                menu3 ? "nav-item dropdown show-submenu" : "nav-item dropdown"
              }
              onMouseOver={handleOpenMenu3}
              onMouseOut={handleCloseMenu3}
            >
              <a href="#" className="nav-link">
                <span>Liên hệ</span>
              </a>
              <nav className="submenu">
                <ul className="submenu-items">
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      About
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Contact
                    </a>
                  </li>
                  <li className="submenu-item">
                    <hr className="submenu-seperator" />
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Support
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      FAQs
                    </a>
                  </li>
                  <li className="submenu-item">
                    <a href="#" className="submenu-link">
                      Careers
                    </a>
                  </li>
                </ul>
              </nav>
            </li>
          </ul>
        </nav>
        <div className="navbar-main-img2">
          <p className="navbar-main-img2-span">GỬI YÊU CẦU</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
