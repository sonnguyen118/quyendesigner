import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";

const Layout = ({ children }) => {
  const [backtotop, setBackToTop] = useState(false);
  useEffect(function onFirstMount() {
    // window.addEventListener("scroll", changeBackground);
    window.addEventListener("scroll", SetbackToTop);
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
  return (
    <>
      <Navbar />
      <div>{children}</div>
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
