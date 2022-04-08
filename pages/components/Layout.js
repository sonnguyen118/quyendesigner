import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

const Layout = ({ children }) => {
  const [backtotop, setBackToTop] = useState(false);
  useEffect(function onFirstMount() {
    // window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", SetbackToTop);
    // var windowScrollY = window.scrollY;
  }, []);
  const SetbackToTop = () => {
    if (window.scrollY >= 150) {
      setBackToTop(true);
    } else {
      setBackToTop(false);
    }
  };
  useEffect(() => {
    handleBackToTop();
  }, []);
  const handleBackToTop = () => {
    window.scrollTo(0, 0);
  };

  // code d9ong1 mo73 menu mobile menu
  const [menumobile, setMenumobile] = useState(false);
  const handlerOpenMenu = () => {
    if (menumobile) {
      setMenumobile(false);
      document.body.style.overflow = "scroll";
    } else {
      setMenumobile(true);
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    }
  };

  // code hiệu ứng scroll down up
  var windowScrollY;
  const [y, setY] = useState(windowScrollY);
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollColor, setScrollColor] = useState(true);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY == 0) {
        console.log("0");
        setScrollColor(true);
        setScrollUp(true);
        setScrollDown(false);
      } else if (y > window.scrollY) {
        console.log("scrolling up");
        setScrollUp(true);
        setScrollDown(false);
        setScrollColor(false);
      } else if (y < window.scrollY) {
        console.log("scrolling down");
        setScrollUp(false);
        setScrollDown(true);
        setScrollColor(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  return (
    <>
      <Navbar />
      <div className={menumobile ? "cusbody act" : "cusbody"}>
        <nav className="mainMenu">
          <ul>
            <li className="act">
              <a href="#">
                <i className="fa fa-adjust" />
                <span>Về Tôi</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-server" />
                <span>Dịch Vụ</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-smile-o" />
                <span>Dự Án</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-usd" />
                <span>Liên Hệ</span>
              </a>
            </li>
          </ul>
          <div className="mainMenu-contact">
            <div className="mainMenu-contact-img">
              <Image
                src={`/image/home_page/image_main.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </nav>
        <div className="mainContainer">
          <header className="mainContainer-header">
            {/* <a href="#" className="menuBtn">
              <span className="lines" />
            </a> */}
            {/* <a href="#" className="logo">
              logo
            </a> */}
          </header>
          {scrollColor ? (
            <div className="mainContainer-ccc" onClick={handlerOpenMenu}>
              <i
                className={
                  menumobile
                    ? "mainContainer-aaa-icon fas fa-close"
                    : "mainContainer-aaa-icon fas fa-bars"
                }
              />
            </div>
          ) : (
            <div
              className={scrollUp ? "mainContainer-aaa" : "hide"}
              onClick={handlerOpenMenu}
            >
              <i
                className={
                  menumobile
                    ? "mainContainer-aaa-icon fas fa-close"
                    : "mainContainer-aaa-icon fas fa-bars"
                }
              />
              <div className="mainContainer-aaa-img">
                <Image
                  src={`/image/home_page/logo_1.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <i className="mainContainer-aaa-icon fas fa-phone" />
            </div>
          )}

          <div
            className={scrollDown ? "mainContainer-bbb" : "hide"}
            onClick={handlerOpenMenu}
          >
            <i className="mainContainer-bbb-icon fas fa-bars" />
          </div>
          <div>{children}</div>
          <footer></footer>
        </div>
      </div>

      {/* back top top */}
      <div
        className={
          backtotop ? "home-back-to-top active" : "home-back-to-top hide"
        }
        onClick={handleBackToTop}
      >
        <div className="home-back-to-top-img">
          <Image
            src={`/image/home_page/icon_quyendesign_cam.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
