import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const NameCard = () => {
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
            <span className="namecard-block1-title-hightlight">
              danh thiếp - Name Card
            </span>
          </h1>
          <p className="namecard-block1-main">
            Khách hàng không những cảm nhận được sự tận tâm mà còn thể hiện sự
            chuyên nghiệp của doanh nghiệp bạn chỉ qua tài liệu được bao trong
            một tấm name card
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
            <p className="namecard-block2-content-title">Name Card là gì?</p>
            <p className="namecard-block2-content-description">
              Name Card, Business Card hay danh thiếp là một tấm thẻ nhỏ kích
              thước là 9.2x5.4cm có nội dung ngắn gọn như tên cá nhân, chức vụ,
              địa chỉ, website, logo... nhằm cung cấp cho khách hàng hoặc đối
              tác thông tin cơ bản một cách đầy đủ nhất.
              <br></br>
              <br></br>- Để tiết kiệm chi phí Name Card thường được in với số
              lượng lớn (từ 5 hộp trở lên - 500 tấm) và sử dụng dần.
              <br></br>- Mặc dù chỉ là một tấm giấy nhỏ và đơn giản nhưng Name
              Card thể hiện bạn là ai và doanh nghiệp của bạn kinh doanh về lĩnh
              vực gì. Dù bạn là doanh nghiệp lớn hay nhỏ thì nhất thiết phải sở
              hữu Name Card không chỉ cung cấp thông tin cho khách hàng mà còn
              thể hiện sự chuyên nghiệp của bạn.
              <br></br>- Ngày nay có rất nhiều sự lựa chọn là công ty in ấn và
              thiết kế Name Card giá rẻ nhưng chúng tôi lại muốn hướng cho bạn
              một Name Card ấn tượng và bắt mắt, vì khách hàng có thể đánh giá
              cả doanh nghiệp của bạn và quyết định có nên hợp tác với bạn không
              chỉ qua một tấm Name Card.
            </p>
          </div>
        </div>
        <div className="namecard-block3">
          <div className="namecard-block3-content">
            <p className="namecard-block3-content-title">
              Các bước thiết kế Name Card
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
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_1.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_2.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_3.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_4.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_5.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_6.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_7.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_8.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="namecard-block4-group-img">
              <Image
                src={`/image/project/name_card_9.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
        <div className="namecard-block5">
          <p className="namecard-block5-title">Bảng giá thiết kế Name Card</p>
          <p className="namecard-block5-sub">
            Bảng báo giá chỉ mang tính chất tham khảo và sẽ được điều chỉnh
            chính xác và tốt nhất theo từng trường hợp với yêu cầu cụ thể.
          </p>
          <div className="namecard-block5-group">
            <div className="namecard-block5-group-box1">
              <p className="namecard-block5-group-box1-title">
                Name Card được thiết kế theo kích thước chuẩn
              </p>
              <p className="namecard-block5-group-box1-content">
                100.000đ {""}
                <span className="namecard-block5-group-box1-content-number">
                  / 1 mẫu
                </span>
              </p>
              <div className="namecard-block5-group-box1-list">
                <i className="namecard-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="namecard-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="namecard-block5-group-box1-list">
                <i className="namecard-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="namecard-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="namecard-block5-group-box1-list">
                <i className="namecard-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="namecard-block5-group-box1-list-text">
                  Toàn quyền sở hữu bản quyền
                </span>
              </div>
              <div className="namecard-block5-group-box1-list">
                <i className="namecard-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="namecard-block5-group-box1-list-text">
                  Chuẩn kích thước in ấn
                </span>
              </div>
              <div className="namecard-block5-group-box1-list">
                <i className="namecard-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="namecard-block5-group-box1-list-text">
                  Không giới hạn chỉnh sửa 3 ngày
                </span>
              </div>
              <div className="namecard-block5-group-box1-list">
                <i className="namecard-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="namecard-block5-group-box1-list-text">
                  Gửi file gốc in ấn
                </span>
              </div>
              <div className="namecard-block5-group-box1-list">
                <i className="namecard-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="namecard-block5-group-box1-list-text">
                  Hỗ trợ in theo yêu cầu
                </span>
              </div>
            </div>
            <div className="namecard-block5-group-box2">
              <div className="namecard-block5-group-box2-col1">
                <p className="namecard-block5-group-box2-col1-item1">
                  BÁO GIÁ IN CARD VISIT
                </p>
                <p className="namecard-block5-group-box2-col1-item2">
                  IN DANH THIẾP - CARD VISIT:{" "}
                  <span className="namecard-block5-group-box2-col1-item2-x">
                    chất liệu giấy: C300 gr
                  </span>
                  . Kích thước thông thường: 54 x 90 mm
                  <br></br>
                  <br></br>
                  Thiết kế miễn phí nếu in từ 5 hộp trở lên. In nhiều màu 2 nặt
                  siêu nét, màu sắc trung thực. Cán nilon hoặc cán bóng 2 mặt.
                  Một hộp gồm 100 Card.
                  <br></br>
                  <br></br>
                  Số lượng in Card Visit được áp dụng trên một nội dung
                </p>
                <p className="namecard-block5-group-box2-col1-item3">
                  IN DANH THIẾP - CARD VISIT:{" "}
                  <span className="namecard-block5-group-box2-col1-item3-x">
                    Chất liệu giấy: Ánh Trai
                  </span>
                  <br></br>
                  <span className="namecard-block5-group-box2-col1-item3-y">
                    Liên Hệ
                  </span>
                </p>
              </div>
              <div className="namecard-block5-group-box2-col2">
                <p className="namecard-block5-group-box2-col2-title">
                  SỐ LƯỢNG
                </p>
                <p className="namecard-block5-group-box2-col2-item">In 1 hộp</p>
                <p className="namecard-block5-group-box2-col2-item">In 2 hộp</p>
                <p className="namecard-block5-group-box2-col2-item">In 3 hộp</p>
                <p className="namecard-block5-group-box2-col2-item">In 5 hộp</p>
                <p className="namecard-block5-group-box2-col2-item">
                  In 10 - 20 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  In 21 - 50 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  In 51 -100 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">In 1 hộp</p>
              </div>
              <div className="namecard-block5-group-box2-col3">
                <p className="namecard-block5-group-box2-col2-title">ĐƠN GIÁ</p>
                <p className="namecard-block5-group-box2-col2-item">
                  90.000đ/ 1 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  80.000đ/ 1 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  70.000đ/ 1 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  60.000đ/ 1 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  35-45.000đ/ 1 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  30-40.000đ/ 1 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  25-30.000đ/ 1 hộp
                </p>
                <p className="namecard-block5-group-box2-col2-item">
                  120.000đ/ 1 hộp
                </p>
              </div>
            </div>
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

export default NameCard;
