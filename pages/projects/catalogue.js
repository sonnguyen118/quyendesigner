import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Catalogue = () => {
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
      <div className="namecard">
        <div
          className={
            navbar
              ? "namecard-block1"
              : scrollUp
              ? "namecard-block1 magrin-top-up"
              : "namecard-block1 magrin-top-down"
          }
        >
          <h1 className="namecard-block1-title">
            Thiết kế{" "}
            <span className="namecard-block1-title-hightlight">Catalogue</span>
          </h1>
          <p className="namecard-block1-main">
            Nếu thiết kế Phong bì thư bắt mắt sẽ giúp cho khách hàng ấn tượng
            với thương hiệu mạnh mẽ hơn.
          </p>
        </div>
        <div className="namecard-block2">
          <div className="namecard-block2-img">
            <Image
              src={`/image/project/name_card.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
          <div className="namecard-block2-content">
            <p className="namecard-block2-content-title">Catalogue là gì?</p>
            <p className="namecard-block2-content-description">
              Catalogue là một cuốn tài liệu được biên soạn để giới thiệu về một
              loạt sản phẩm hoặc dịch vụ của doanh nghiệp và được đóng thành
              quyển. Tối thiểu số lượng trang 1 quyển catalogue khoảng 16-20
              trang. Và còn được gọi là Catalog.
              <br></br>
              <br></br>- Catalogue thường được in ấn số lượng nhiều để tiết kiệm
              chi phí, và sử dụng trong hằng ngày trong doanh nghiệp, cửa
              hàng...
              <br></br>- Catalogue mục đích là để tra cứu thông tin sản phẩm một
              cách đầy đủ nhất, nếu số lượng trang chỉ khoảng 4 hoặc 6 trang thì
              quyển catalogue sẽ trở thành tờ gấp giới thiệu sản phẩm hoặc gọi
              là brochure, vì thể bạn cần phải phân biệt các ấn phẩm này để có
              thể thiết kế chính xác nhất.
              <br></br>- Hiện nay có rất nhiều đơn vị thiết kế catalogue giá rẻ,
              nhưng bạn nên nhớ rằng catalogue là một ấn phẩm có thể tiếp xúc
              trực tiếp đến khách hàng, vì thế bạn phải tạo ra một catalogue
              thật ấn tượng bắt mắt nguyên liệu giấy phải chất lượng không lem
              luốt thì khách hàng mới có thể chú ý, nếu ngược lại thì không chỉ
              khách hàng không đón nhận mà thậm chí còn có ấn tượng xấu đến
              thương hiệu của bạn.
            </p>
          </div>
        </div>
        <div className="namecard-block3">
          <div className="namecard-block3-content">
            <p className="namecard-block3-content-title">
              Các bước thiết kế Catalogue
            </p>
            <div className="namecard-block3-content-group">
              <div className="namecard-block3-content-group-block">
                <div className="namecard-block3-content-group-block-step">
                  Bước 1
                </div>
                <div className="namecard-block3-content-group-block-title">
                  Nhận thông tin và yêu cầu
                </div>
                <div className="namecard-block3-content-group-block-description">
                  Tôi sẽ tiếp nhận thông tin cơ bản của bạn để thiết kế name
                  Card như: Tên cá nhân, chức danh, số điện thoại, logo, email,
                  hình ảnh ...
                </div>
              </div>
              <div className="namecard-block3-content-group-block">
                <div className="namecard-block3-content-group-block-step">
                  Bước 1
                </div>
                <div className="namecard-block3-content-group-block-title">
                  Nhận thông tin và yêu cầu
                </div>
                <div className="namecard-block3-content-group-block-description">
                  Tôi sẽ tiếp nhận thông tin cơ bản của bạn để thiết kế name
                  Card như: Tên cá nhân, chức danh, số điện thoại, logo, email,
                  hình ảnh ...
                </div>
              </div>
              <div className="namecard-block3-content-group-block">
                <div className="namecard-block3-content-group-block-step">
                  Bước 1
                </div>
                <div className="namecard-block3-content-group-block-title">
                  Nhận thông tin và yêu cầu
                </div>
                <div className="namecard-block3-content-group-block-description">
                  Tôi sẽ tiếp nhận thông tin cơ bản của bạn để thiết kế name
                  Card như: Tên cá nhân, chức danh, số điện thoại, logo, email,
                  hình ảnh ...
                </div>
              </div>
              <div className="namecard-block3-content-group-block">
                <div className="namecard-block3-content-group-block-step">
                  Bước 1
                </div>
                <div className="namecard-block3-content-group-block-title">
                  Nhận thông tin và yêu cầu
                </div>
                <div className="namecard-block3-content-group-block-description">
                  Tôi sẽ tiếp nhận thông tin cơ bản của bạn để thiết kế name
                  Card như: Tên cá nhân, chức danh, số điện thoại, logo, email,
                  hình ảnh ...
                </div>
              </div>
            </div>
          </div>
          <div className="namecard-block3-img">
            <Image
              src={`/image/project/image_block3.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="namecard-block4">
          <p className="namecard-block4-title">Các thiết kế đã thực hiện</p>
          <div className="namecard-block4-group">
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_1.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_2.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_3.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_4.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_5.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_6.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_7.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_8.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_9.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_10.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_11.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/catalogue_12.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="folder-block5">
          <p className="folder-block5-title">Bảng giá thiết kế Folder</p>
          <p className="folder-block5-sub">
            Bảng báo giá chỉ mang tính chất tham khảo và sẽ được điều chỉnh
            chính xác và tốt nhất theo từng trường hợp với yêu cầu cụ thể.
          </p>
          <div className="folder-block5-group">
            <div className="folder-block5-group-box1">
              <p className="folder-block5-group-box1-title">
                “Gói đơn giản làm theo mẫu có sẵn”
              </p>
              <p className="folder-block5-group-box1-content">
                150.000đ {""}
                <span className="folder-block5-group-box1-content-number">
                  / 1 trang
                </span>
              </p>
              <div className="folder-block5-group-box1-list">
                <i className="folder-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box1-list">
                <i className="folder-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box1-list">
                <i className="folder-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box1-list-text">
                  Toàn quyền sở hữu bản quyền
                </span>
              </div>
              <div className="folder-block5-group-box1-list">
                <i className="folder-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box1-list-text">
                  Chuẩn kích thước in ấn
                </span>
              </div>
              <div className="folder-block5-group-box1-list">
                <i className="folder-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box1-list-text">
                  Không giới hạn chỉnh sửa 3 ngày
                </span>
              </div>
              <div className="folder-block5-group-box1-list">
                <i className="folder-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box1-list-text">
                  Gửi file gốc in ấn
                </span>
              </div>
              <div className="folder-block5-group-box1-list">
                <i className="folder-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box1-list-text">
                  Hỗ trợ in theo yêu cầu
                </span>
              </div>
            </div>
            <div className="folder-block5-group-box2">
              <div className="folder-block5-group-box2-img">
                <Image
                  src={`/image/project/vip.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <p className="folder-block5-group-box2-title">
                “Gói đơn giản làm theo mẫu có sẵn”
              </p>
              <p className="folder-block5-group-box2-content">
                300.000đ {""}
                <span className="folder-block5-group-box2-content-number">
                  / 1 trang
                </span>
              </p>
              <div className="folder-block5-group-box2-list">
                <i className="folder-block5-group-box2-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box2-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box2-list">
                <i className="folder-block5-group-box2-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box2-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box2-list">
                <i className="folder-block5-group-box2-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box2-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box2-list">
                <i className="folder-block5-group-box2-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box2-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box2-list">
                <i className="folder-block5-group-box2-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box2-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box2-list">
                <i className="folder-block5-group-box2-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box2-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="folder-block5-group-box2-list">
                <i className="folder-block5-group-box2-list-icon 	fas fa-check"></i>
                <span className="folder-block5-group-box2-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
            </div>
          </div>
          <div className="folder-block6">
            <p className="folder-block6-text">
              Catalog dùng giấy bìa C250, lõi C150, cán mờ trang bìa, in 4 màu,
              2 mặt.
            </p>
            <p className="folder-block6-text">
              Báo giá trên sai số cho phép là dưới 5%, vui lòng liên hệ trực
              tiếp để có báo giá chính xác.
            </p>
            <p className="folder-block6-text">
              Bảng giá cập nhật ngày: 18/09/2021
            </p>
            <p className="folder-block6-text">
              KH tạm ứng 50% chi phí khi triển khai
            </p>
            {/* <p className="folder-block6-text">Thời gian giao hàng : 3~4 ngày</p>
            <p className="folder-block6-text">
              Giao Hàng tận nơi trong phạm vi thành phố.
            </p> */}
          </div>
        </div>

        <Link href={`/contact`} passHref>
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
        </Link>
      </div>
    </Layout>
  );
};

export default Catalogue;
