import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className={navbar ? "navbar-imagee" : "navbar-image"}></div>
      <div className="navbar-main ">
        <Link href={`/`} passHref>
          <div className="navbar-main-img1">
            <Image
              src={`/image/home_page/logo_1.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
        </Link>

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
                <Link href={`/projects`} passHref>
                  <span>Dịch vụ</span>
                </Link>
              </a>
              <nav className="submenu">
                <ul className="submenu-items">
                  <li className="submenu-item">
                    <Link
                      href={`/projects/name_card`}
                      className="manu-link submenu-link"
                    >
                      <p className="manu-link">Name Card</p>
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      href={`/projects/catalogue`}
                      className=" submenu-link"
                    >
                      <p className="manu-link">Catalogue</p>
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link href={`/projects/flyer`} className=" submenu-link">
                      <p className="manu-link">Tờ rơi</p>
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link href={`/projects/folder`} className=" submenu-link">
                      <p className="manu-link">Folder</p>
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link href={`/projects/poster`} className=" submenu-link">
                      <p className="manu-link">Poster</p>
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link href={`/projects/backdrop`} className=" submenu-link">
                      <p className="manu-link">Backdrop</p>
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link href={`/projects/calendar`} className=" submenu-link">
                      <p className="manu-link">Lịch độc quyền</p>
                    </Link>
                  </li>
                  <li className="submenu-item">
                    <Link
                      href={`/projects/photography`}
                      className=" submenu-link"
                    >
                      <p className="manu-link"> Chụp ảnh sản phẩm</p>
                    </Link>
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
                <Link href={`/projects`} passHref>
                  <span>Dự án</span>
                </Link>
              </a>
              {/* <nav className="submenu">
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
              </nav> */}
            </li>
            <li
              className={
                menu3 ? "nav-item dropdown show-submenu" : "nav-item dropdown"
              }
              onMouseOver={handleOpenMenu3}
              onMouseOut={handleCloseMenu3}
            >
              <a href="#" className="nav-link">
                <Link href={`/contact`} passHref>
                  <span>Liên hệ</span>
                </Link>
              </a>
              {/* <nav className="submenu">
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
              </nav> */}
            </li>
          </ul>
        </nav>
        <Link href={`/contact`} passHref>
          <div className="navbar-main-img2">
            <p className="navbar-main-img2-span">GỬI YÊU CẦU</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
