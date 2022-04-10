import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Backdrop = () => {
  return (
    <Layout>
      <div className="namecard">
        <div className="namecard-block1">
          <h1 className="namecard-block1-title">
            Thiết kế{" "}
            <span className="namecard-block1-title-hightlight">Backdrop</span>
          </h1>
          <p className="namecard-block1-main">
            Một Backdrop chuyên nghiệp không chỉ gấy ấn tượng với khách hàng mà
            còn ảnh hưởng đến thương hiệu của bạn.
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
            <p className="namecard-block2-content-title">Backdrop là gì?</p>
            <p className="namecard-block2-content-description">
              Backdrop (hay còn gọi là phông nền sự kiện) là một ấn phẩm
              marketing truyền thống đặt ở vị trí chính diện sân khấu hoặc trên
              bục sự kiện nhằm giới thiệu đến mọi người nội dung chương trình,
              sự kiện.
              <br></br>
              <br></br>- Nếu tổ chức một sự kiện thì việc thiết kế backdrop là
              không thể thiếu và bên cạnh đó thì các ấn phẩm quảng cáo như
              Bandroll, Poster, Standee, tờ rơi, brochure… sẽ là những ấn phẩm
              góp phần tăng hiệu quả cho trương trình của bạn.
              <br></br>- Backdrop thường được in với số lượng tùy theo chiến
              dịch quảng cáo, và được thiết kế bắt mắt, đa dạng màu sắc cũng như
              tạo hình và ngôn ngữ thiết kế tùy theo ý tưởng của nhà thiết kế
              vào từng loại sự kiện.
              <br></br>- Có 3 loại backdrop cơ bản là: Backdrop Hiflex phẳng
              (Loại này là phổ biến nhất từ chất liệu bạt hiflex) Backdrop 3D
              (Loại này thường được thiết kế từ những designer chuyên nghiệp,
              thường được dùng cho các rạp phim để khách hàng chụp hình kỷ
              niệm). Backdrop hoa giấy - hoa tươi: (Loại backdrop này thường
              dùng cho các đám cưới, hỏi, liên hoan, sinh nhật…)
              <br></br>- Backdrop là ấn phẩm mà thương hiệu của bạn sẽ được làm
              nổi bật và bắt mắt nhất, vì thế chúng tôi luôn muốn hướng bạn đến
              những thiết kế thật đẹp, bắt mắt. Điều này góp phần làm người nhìn
              có cảm tình đến thương hiệu của bạn.
              <br></br>
              Các dịp thường thiết kế backdrop như: khai trương, lễ, tết, tiệc
              tất niên, Dinner Party, 8/3, 20/10, giáng sinh, sinh nhật….
            </p>
          </div>
        </div>
        <div className="namecard-block3">
          <div className="namecard-block3-content">
            <p className="namecard-block3-content-title">
              Các bước thiết kế Backdrop
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
          <p className="folder-block5-title">Bảng giá thiết kế Backdrop</p>
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

export default Backdrop;
