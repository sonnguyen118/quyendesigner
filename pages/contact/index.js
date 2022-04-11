import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Contact = () => {
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
  var windowScrollY;
  const [y, setY] = useState(windowScrollY);
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollDown, setScrollDown] = useState(false);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY == 0) {
        setScrollUp(true);
        setScrollDown(false);
      } else if (y > window.scrollY) {
        setScrollUp(true);
        setScrollDown(false);
      } else if (y < window.scrollY) {
        setScrollUp(false);
        setScrollDown(true);
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
    <Layout>
      <div className="contact">
        <div
          className={
            navbar
              ? "contact-block1"
              : scrollUp
              ? "contact-block1 magrin-top-up"
              : "contact-block1 magrin-top-down"
          }
        >
          <p className="contact-block1-text">
            Liên hệ
            <span className="contact-block1-text-hightlight">Tôi</span>
          </p>
          <div className="contact-block1-img">
            <Image
              src={`/image/contact/image_block1.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="contact-block2">
          <div className="contact-block2-box">
            <div className="contact-block2-box-img">
              <Image
                src={`/image/contact/icon_1.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <p className="contact-block2-box-title">Hotline</p>
            <p className="contact-block2-box-description">038.444.6994</p>
          </div>
          <div className="contact-block2-box">
            <div className="contact-block2-box-img">
              <Image
                src={`/image/contact/icon_2.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <p className="contact-block2-box-title">Zalo</p>
            <p className="contact-block2-box-description">038.444.6994</p>
          </div>
          <div className="contact-block2-box">
            <div className="contact-block2-box-img">
              <Image
                src={`/image/contact/icon_3.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <p className="contact-block2-box-title">Email</p>
            <p className="contact-block2-box-description-email">
              quyennv244@gmail.com
            </p>
          </div>
        </div>
        <div className="contact-block3">
          <Image
            src={`/image/contact/image_main.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="contact-block4">
          <div className="home-block6">
            <div className="home-block6-main">
              <div className="home-block6-main-logo">
                <Image
                  src={`/image/home_page/logo_white.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="home-block6-main-text">
                <div className="home-block6-main-text-title">
                  Gửi yêu cầu thiết kế
                </div>
                <div className="home-block6-main-text-body">
                  Hãy để tôi đồng hành cùng dự án của quý khách.
                </div>
              </div>
            </div>
            <div className="home-block6-btn">GỬI YÊU CẦU</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
