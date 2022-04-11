import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Flyer = () => {
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
            <span className="namecard-block1-title-hightlight">Tờ rơi</span>
          </h1>
          <p className="namecard-block1-main">
            Tờ rơi một hình thức quảng cáo truyền thống nhưng có thể nhắm đúng
            đối tượng và khu vực nhất định rất hiệu quả.
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
            <p className="namecard-block2-content-title">
              Tờ rơi - tờ gấp là gì?
            </p>
            <p className="namecard-block2-content-description">
              Tờ rơi (Flyer), tờ gấp, còn có thể gọi là Leaflet hoặc là Handbill
              là một loại giấy rời để giới thiệu, quảng cáo, tuyên truyền về một
              sự kiện, dịch vụ, sản phẩm… trong một thời gian ngắn.
              <br></br>
              <br></br>- Tờ rơi thường được in ấn số lượng nhiều để tiết kiệm
              chi phí, và sử dụng trong một chiến dịch quảng cáo ngắn hạn của
              doanh nghiệp, cửa hàng.
              <br></br>- Tờ rơi thường được in ấn số lượng nhiều để tiết kiệm
              chi phí, và sử dụng trong một chiến dịch quảng cáo ngắn hạn của
              doanh nghiệp, cửa hàng.
              <br></br>- Điểm nổi bật của quảng cáo bằng tờ rơi là tiết kiệm chi
              phí và nhắm đúng đến đối tượng khách hàng bạn cần.
              <br></br>- Hiện nay có rất nhiều đơn vị thiết kế tờ rơi giá rẻ,
              nhưng bạn nên nhớ rằng tờ rơi là một ấn phẩm có thể tiếp xúc trực
              tiếp đến khách hàng, vì thế bạn phải tạo ra một tờ rơi thật ấn
              tượng bắt mắt, chất liệu giấy phải chất lượng không lem luốt thì
              khách hàng mới có thể chú ý, nếu ngược lại thì không chỉ khách
              hàng không đón nhận mà thậm chí còn có ấn tượng xấu đến thương
              hiệu của bạn.
            </p>
          </div>
        </div>
        <div className="namecard-block3">
          <div className="namecard-block3-content">
            <p className="namecard-block3-content-title">
              Các bước thiết kế Tờ rơi
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
                src={`/image/project/leaflets_1.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/leaflets_2.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/leaflets_3.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/leaflets_4.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/leaflets_5.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/leaflets_6.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/leaflets_7.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/leaflets_8.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="folder-block5">
          <p className="folder-block5-title">Bảng giá thiết kế Poster</p>
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
                200.000đ {""}
                <span className="folder-block5-group-box1-content-number">
                  / 1 mẫu
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
                500.000đ {""}
                <span className="folder-block5-group-box2-content-number">
                  / 1 mẫu
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
            <p className="folder-block6-text">Kích thước A4 : 21cm x 29cm</p>
            <p className="folder-block6-text">In Offset 4 màu 2 mặt</p>
            <p className="folder-block6-text">
              Giấy Couche 120 - Couche 150 - Couche 180
            </p>
            <p className="folder-block6-text">Thời gian giao hàng : 3~4 ngày</p>
            {/* <p className="folder-block6-text">Thời gian giao hàng : 3~4 ngày</p> */}
            <p className="folder-block6-text">
              Giao Hàng tận nơi trong phạm vi thành phố.
            </p>
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

export default Flyer;
