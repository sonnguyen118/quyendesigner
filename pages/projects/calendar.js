import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Calendar = () => {
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
              Lịch độc quyền
            </span>
          </h1>
          <p className="namecard-block1-main">
            Thiết kế lịch độc quyền hiện nay đang là xu hướng được lựa chọn rất
            nhiều hiện nay. Với sự phát triển của công nghệ thiết kế và quy mô
            phổ biến của nó mà những sản phẩm lịch độc quyền thiết kế ngày càng
            ưng ý.
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
              Lịch độc quyền là gì?
            </p>
            <p className="namecard-block2-content-description">
              Thiết kế lịch độc quyền - là một trong những hình thức tự do sáng
              tạo một bộ lịch mang thương hiệu riêng của mỗi cá nhân hoặc doanh
              nghiệp. Đây sẽ là món quà ý nghĩa nhất dành tặng bạn bè, người
              thân, khách hàng hoặc đối tác làm ăn. Mỗi bộ lịch tết luôn đi kèm
              những lời chúc với mong muốn năm mới an khang thịnh vượng, gặp
              nhiều may mắn và tài lộc.
              <br></br>
              <br></br>- Những bộ lịch độc quyền thường sử dụng những hình ảnh,
              thương hiệu của cá nhân hoặc doanh nghiệp. Nó được đưa lên với mục
              đích quảng bá rộng hơn tới nhiều người cùng biết. Mỗi thiết kế lại
              mang tới một không gian và màu sắc riêng, màu sắc của bộ lịch độc
              quyền sẽ được lựa chọn trên màu sắc thương hiệu hoặc sản phẩm để
              mang đến điểm nhấn riêng.
              <br></br>- Thiết kế lịch độc quyền đòi hỏi người sáng tạo am hiểu
              về thương hiệu doanh nghiệp, công ty từ đó làm nên những bộ lịch
              mang bản sắc riêng của mình.
              <br></br>- Tôi cung cấp dịch vụ in lịch độc quyền trọn gói hỗ trợ
              khách hàng từ A đến Z cam kết mang lại cho quý khách những mẫu
              lịch tết 2020 đẹp và ý nghĩa nhất.
            </p>
          </div>
        </div>
        <div className="namecard-block3">
          <div className="namecard-block3-content">
            <p className="namecard-block3-content-title">
              Các bước thiết kế Lịch
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
        <div className="calendar-block5">
          <p className="calendar-block5-title">Bảng giá thiết kế Lịch</p>
          <p className="calendar-block5-sub">
            Bảng báo giá chỉ mang tính chất tham khảo và sẽ được điều chỉnh
            chính xác và tốt nhất theo từng trường hợp với yêu cầu cụ thể.
          </p>
          <div className="calendar-block5-group">
            <div className="calendar-block5-group-box1">
              <p className="calendar-block5-group-box1-title">
                Lịch tết treo tường 5 tờ
              </p>
              <p className="calendar-block5-group-box1-content">
                1.500.000đ {""}
                <span className="calendar-block5-group-box1-content-number">
                  / 1 mẫu
                </span>
              </p>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
            </div>
            <div className="calendar-block5-group-box1">
              <p className="calendar-block5-group-box1-title">
                Lịch tết treo tường 5 tờ
              </p>
              <p className="calendar-block5-group-box1-content">
                1.500.000đ {""}
                <span className="calendar-block5-group-box1-content-number">
                  / 1 mẫu
                </span>
              </p>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
            </div>
            <div className="calendar-block5-group-box1">
              <p className="calendar-block5-group-box1-title">
                Lịch tết treo tường 5 tờ
              </p>
              <p className="calendar-block5-group-box1-content">
                1.500.000đ {""}
                <span className="calendar-block5-group-box1-content-number">
                  / 1 mẫu
                </span>
              </p>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
              <div className="calendar-block5-group-box1-list">
                <i className="calendar-block5-group-box1-list-icon 	fas fa-check"></i>
                <span className="calendar-block5-group-box1-list-text">
                  Đảm bảo hoàn tiền
                </span>
              </div>
            </div>
          </div>
          {/* <div className="folder-block6">
            <p className="folder-block6-text">Kích thước A4 : 21cm x 29cm</p>
            <p className="folder-block6-text">In Offset 4 màu 2 mặt</p>
            <p className="folder-block6-text">
              Giấy Couche 120 - Couche 150 - Couche 180
            </p>
            <p className="folder-block6-text">Thời gian giao hàng : 3~4 ngày</p>
            <p className="folder-block6-text">Thời gian giao hàng : 3~4 ngày</p>
            <p className="folder-block6-text">
              Giao Hàng tận nơi trong phạm vi thành phố.
            </p>
          </div> */}
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

export default Calendar;
