import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-block">
          <div className="footer-block-img">
            <Image
              src={`/image/home_page/logo_1.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
          <div className="footer-block-description">
            <span className="footer-block-description-1">Tôi</span>
            <span className="footer-block-description-2">
              là Digital Agency cung cấp giải pháp Identity Branding, Design
              Graphic, Digital Marketing và Website ...
              <br></br>
              Giúp thương hiệu của bạn đến với khách hàng tiềm năng một cách
              trọn vẹn và hiệu quả nhất.
            </span>
          </div>
          <div className="footer-block-social">
            <div className="footer-block-social-img">
              <Image
                src={`/image/home_page/icon_whatapp.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="footer-block-social-img">
              <Image
                src={`/image/home_page/icon_facebook.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="footer-block-social-img">
              <Image
                src={`/image/home_page/icon_be.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="footer-block-social-img">
              <Image
                src={`/image/home_page/icon_zalo.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="footer-block">
          <div className="footer-block-title">Giới Thiệu Chung</div>
          <ul className="footer-block-menu">
            <li className="footer-block-menu-text">Về Tôi</li>
            <li className="footer-block-menu-text">Liên Hệ</li>
          </ul>
        </div>
        <div className="footer-block">
          <div className="footer-block-title">Dịch Vụ</div>
          <ul className="footer-block-menu">
            <li className="footer-block-menu-text">Thiết kế sáng tạo</li>
            <li className="footer-block-menu-text">In ấn sản xuất</li>
            <li className="footer-block-menu-text">Chụp ảnh</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="footer-copyright-img">
          <Image
            src={`/image/home_page/icon_quyendesign__.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <span className="footer-copyright-span1">
          Copyright © 2022 Quyen Nguyen.
        </span>
        <span className="footer-copyright-span2"> All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
