import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-image"></div>
      <div className="navbar-main">
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
            <li className="nav-item dropdown show-submenu">
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
            <li className="nav-item dropdown">
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
            <li className="nav-item dropdown">
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
