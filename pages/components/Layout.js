import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
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
            <Link href={"/"} passHref>
              <li
                className={router.pathname == "/" ? "act" : ""}
                onClick={handlerOpenMenu}
              >
                <i className="fas fa-home" />
                <span>Trang Chủ</span>
              </li>
            </Link>
            <Link href={"/projects"} passHref>
              <li
                className={router.pathname.includes("/projects") ? "act" : ""}
                onClick={handlerOpenMenu}
              >
                <i className="fas fa-hand-holding" />
                <span>Dịch Vụ</span>
              </li>
            </Link>
            <li>
              <i className="fas fa-award" />
              <span>Dự Án</span>
            </li>
            <Link href={"/contact"} passHref>
              <li
                className={router.pathname.includes("/contact") ? "act" : ""}
                onClick={handlerOpenMenu}
              >
                <i className="fas fa-phone"></i>
                <span>Liên Hệ</span>
              </li>
            </Link>
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
            <div className="mainContainer-ccc">
              <i
                onClick={handlerOpenMenu}
                className={
                  menumobile
                    ? "mainContainer-aaa-icon fas fa-close"
                    : "mainContainer-aaa-icon fas fa-bars"
                }
              />
            </div>
          ) : (
            <div className={scrollUp ? "mainContainer-aaa" : "hide"}>
              <i
                onClick={handlerOpenMenu}
                className={
                  menumobile
                    ? "mainContainer-aaa-icon fas fa-close"
                    : "mainContainer-aaa-icon fas fa-bars"
                }
              />
              <div className="mainContainer-aaa-img">
                <Link href={`/`} passHref>
                  <Image
                    src={`/image/home_page/logo_1.png`}
                    alt="description of image"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </Link>
              </div>
              <Link href={`/contact`} passHref>
                <i className="mainContainer-aaa-icon fas fa-phone" />
              </Link>
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
