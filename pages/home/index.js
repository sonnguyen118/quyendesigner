import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
const Home = () => {
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
    <Layout>
      <div className="home">
        <div className="home-block1">
          <video
            autoPlay="true"
            loop="true"
            muted
            id="myVideo"
            className="home-block1-video"
          >
            <source
              className="home__video-size"
              src={`/image/home_page/background_2.mp4`}
              type="video/mp4"
            />
          </video>
          <div className="home-block1-decription">
            <span className="home-block1-decription-title">
              Xin chào, tôi là
            </span>
            <div className="home-block1-decription-img">
              <Image
                src={`/image/home_page/name.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <span className="home-block1-decription-intro">
              Đến với{" "}
              <span className="home-block1-decription-intro-hightlight">
                Tôi
              </span>
              , bạn sẽ làm việc một cách tận tâm và chuyên nghiệp... Những sản
              phẩm tôi làm đều chứa đựng một câu chuyện riêng một phong cách
              riêng.
            </span>
          </div>
        </div>
        <div className={navbar ? "home-block2" : "home-block2 magrin-top-50px"}>
          <p className="home-block2-title">KHÁCH HÀNG CỦA TÔI</p>
          <div className="home-block2-group">
            <div className="home-block2-group-img">
              <Image
                src={`/image/home_page/manulife_logo.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="home-block2-group-img">
              <Image
                src={`/image/home_page/tannhatminh_logo.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="home-block2-group-img">
              <Image
                src={`/image/home_page/solity_logo.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="home-block2-group-img">
              <Image
                src={`/image/home_page/anycom_logo.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="home-block2-group-img">
              <Image
                src={`/image/home_page/mykim_logo.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="home-block3">
          <div className="home-block3-title">
            <span className="home-block3-title-1">Dịch vụ của</span>
            <span className="home-block3-title-2">Tôi</span>
          </div>
          <div className="home-block3-description">
            Để đáp ứng nhu cầu cảu từng khách hàng. Tôi còn triển khai thiết kế
            theo gói sẽ phù hợp với từng doanh nghiệp và từng ngành nghề khác
            nhau.
          </div>
          <div className="home-block3-group">
            <div className="home-block3-group-item">
              <div className="home-block3-group-item-logo">
                <Image
                  src={`/image/home_page/item_logo_1.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="home-block3-group-item-description">
                Graphic Design
              </p>
              <p className="home-block3-group-item-title">Thiết Kế Sáng Tạo</p>
              <p className="home-block3-group-item-content">
                Không chỉ là những thiết kế để phục vụ cho việc kinh doanh,
                chúng còn có chức năng truyền tải thông điệp của doanh nghiệp
                đến những khách hàng tiềm năng một cách rõ ràng và đơn giản nhất
              </p>
              <div className="home-block3-group-item-btn">Xem chi tiết</div>
            </div>
            <div className="home-block3-group-item">
              <div className="home-block3-group-item-logo">
                <Image
                  src={`/image/home_page/item_logo_2.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="home-block3-group-item-description">
                Printing & Production
              </p>
              <p className="home-block3-group-item-title">In ấn & Sản xuất</p>
              <p className="home-block3-group-item-content">
                Một thiết kế đẹp và hoàn chỉnh thì không thể thiếu phần in ấn và
                sản xuất sản phẩm cuối cùng. Nhưng để sản phẩm làm ra giống nhất
                với bản thiết kế thì lại là một câu chuyện khác.
              </p>
              <div className="home-block3-group-item-btn">Xem chi tiết</div>
            </div>
            <div className="home-block3-group-item">
              <div className="home-block3-group-item-logo">
                <Image
                  src={`/image/home_page/item_logo_3.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="home-block3-group-item-description">Photography</p>
              <p className="home-block3-group-item-title">Chụp ảnh</p>
              <p className="home-block3-group-item-content">
                Chúng ta đang hướng đến một thời kỳ kinh doanh trên mọi nền tảng
                vì thế sẽ thật thiếu sót nếu doanh nghiệp của bạn không ứng dụng
                dịch vụ chụp ảnh vào kinh doanh.
              </p>
              <div className="home-block3-group-item-btn">Xem chi tiết</div>
            </div>
          </div>
        </div>
        <div className="home-block4">
          <div className="home-block4-title home-block3-title">
            <span className="home-block3-title-1">Lý do bạn chọn</span>
            <span className="home-block3-title-2">Tôi</span>
            <p className="home-block4-title-content">
              <span className="home-block4-title-content-hightlight1">Tôi</span>{" "}
              không cam kết với bạn là sản phẩm làm ra là giá thấp nhất và nhanh
              nhất, nhưng tôi{" "}
              <span className="home-block4-title-content-hightlight2">
                cam kết
              </span>{" "}
              với bạn một sản phẩm tôi làm ra sẽ phải đảm bảo yếu tố phải hài
              lòng bạn nhất và hiệu quả nhất cho việc kinh doanh của bạn.
            </p>
            <p className="home-block4-title-content">
              <span className="home-block4-title-content-hightlight1">Tôi</span>{" "}
              tâm huyết trong từng dự án dù nhỏ hay lớn, mục đích lớn nhất của
              tôi là chia sẻ niềm vui và đồng hành cùng bạn trong những giải
              pháp kinh doanh.
            </p>
          </div>
          <div className="home-block4-block">
            <div className="home-block4-block-img">
              <Image
                src={`/image/home_page/block4_image_1.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="home-block4-block-content">
              <p className="home-block4-block-content-title">
                Kinh nghiệm làm việc
              </p>
              <p className="home-block4-block-content-body">
                Với hơn 3 năm làm việc, tôi không chỉ có kinh nghiệm về mặt
                thiết kế, thẩm mỹ, mà tôi luôn tìm kiếm những xu hướng mới để
                giúp cho các dự án khách hàng có nhiều sự khác biệt hơn, song
                tôi còn giúp khách hàng của mình lựa chọn những phương án tốt
                nhất phù hợp với nhu cầu và thị hiếu của thị trường.
              </p>
            </div>
          </div>
          <div className="home-block4-block">
            <div className="home-block4-block-content">
              <p className="home-block4-block-content-title">
                Kinh nghiệm làm việc
              </p>
              <p className="home-block4-block-content-body">
                Với hơn 3 năm làm việc, tôi không chỉ có kinh nghiệm về mặt
                thiết kế, thẩm mỹ, mà tôi luôn tìm kiếm những xu hướng mới để
                giúp cho các dự án khách hàng có nhiều sự khác biệt hơn, song
                tôi còn giúp khách hàng của mình lựa chọn những phương án tốt
                nhất phù hợp với nhu cầu và thị hiếu của thị trường.
              </p>
            </div>
            <div className="home-block4-block-img">
              <Image
                src={`/image/home_page/block4_image_2.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="home-block4-block">
            <div className="home-block4-block-img">
              <Image
                src={`/image/home_page/block4_image_3.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="home-block4-block-content">
              <p className="home-block4-block-content-title">
                Kinh nghiệm làm việc
              </p>
              <p className="home-block4-block-content-body">
                Với hơn 3 năm làm việc, tôi không chỉ có kinh nghiệm về mặt
                thiết kế, thẩm mỹ, mà tôi luôn tìm kiếm những xu hướng mới để
                giúp cho các dự án khách hàng có nhiều sự khác biệt hơn, song
                tôi còn giúp khách hàng của mình lựa chọn những phương án tốt
                nhất phù hợp với nhu cầu và thị hiếu của thị trường.
              </p>
            </div>
          </div>
          <div className="home-block4-block">
            <div className="home-block4-block-content">
              <p className="home-block4-block-content-title">
                Kinh nghiệm làm việc
              </p>
              <p className="home-block4-block-content-body">
                Với hơn 3 năm làm việc, tôi không chỉ có kinh nghiệm về mặt
                thiết kế, thẩm mỹ, mà tôi luôn tìm kiếm những xu hướng mới để
                giúp cho các dự án khách hàng có nhiều sự khác biệt hơn, song
                tôi còn giúp khách hàng của mình lựa chọn những phương án tốt
                nhất phù hợp với nhu cầu và thị hiếu của thị trường.
              </p>
            </div>
            <div className="home-block4-block-img">
              <Image
                src={`/image/home_page/block4_image_4.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="home-block5">
          <div className="home-block5-main">
            <i className="home-block5-main-icon fas fa-quote-left" />
            <p className="home-block5-main-text">
              Điều quan trọng nhất trong thiết kế là việc truyền tải thông điệp
              đúng đến khách hàng
            </p>
            <i className="home-block5-main-icon-2 fas fa-quote-right" />
          </div>
          <p className="home-block5-sign">NGUYEN QUYEN</p>
        </div>
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
    </Layout>
  );
};

export default Home;
