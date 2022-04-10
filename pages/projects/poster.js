import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Poster = () => {
  return (
    <Layout>
      <div className="namecard">
        <div className="namecard-block1">
          <h1 className="namecard-block1-title">
            Thiết kế{" "}
            <span className="namecard-block1-title-hightlight">Poster</span>
          </h1>
          <p className="namecard-block1-main">
            Một Poster chuyên nghiệp không chỉ gấy ấn tượng với khách hàng mà
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
            <p className="namecard-block2-content-title">Poster là gì?</p>
            <p className="namecard-block2-content-description">
              Poster là một loại ấn phẩm truyền thông, quảng cáo cho một sự kiện
              hoặc một chiến dịch của doanh nghiệp đến người tiêu dùng. Và được
              tạo nên thông qua các công cụ thiết kế có tính thẫm mỹ cao nhằm
              truyền tải một thông điệp nào đó đến người nhìn.
              <br></br>
              <br></br>- Poster thường được in với số lượng tùy theo chiến dịch
              quảng cáo, và được thiết kế bắt mắt, đa dạng màu sắc cũng như tạo
              hình và ngôn ngữ thiết kế tùy theo ý tưởng của nhà thiết kế vào
              từng loại sản phẩm hay sự kiện.
              <br></br>- Có 3 loại Poster cơ bản là: Poster quảng cáo (sản phẩm,
              dịch vụ của doanh nghiệp), Poster truyền tải thông điệp (truyền
              tải một thông điệp nào đó của nhà thiết kế đến người xem) và
              Poster thông tin cộng đồng (Poster phim, tuyên truyền, cổ động…)
              <br></br>- Kích thước poster thường rất đa dạng vì thế bạn nên xác
              định đúng kích thước thì nhà thiết kế sẽ biết được chính xác bối
              cảnh, vi trí poster cũng như thông điệp truyền tải điều này giúp
              poster phát huy tối đa hiệu quả.
              <br></br>- Poster là một ấn phẩm đặc biệt hơn so với những ấn phẩm
              quảng cáo khác vì đòi hỏi kỹ năng thiết kế, tính ẩn dụ của thông
              điệp và sự sắp xếp bố cục cũng sẽ phải thật rõ ràng, vì thế chúng
              tôi khuyên bạn nên chọn những đơn vị thiết kế chuyên nghiệp để có
              thể tạo ra những poster thật bắt mắt và ấn tượng.
            </p>
          </div>
        </div>
        <div className="namecard-block3">
          <div className="namecard-block3-content">
            <p className="namecard-block3-content-title">
              Các bước thiết kế Poster
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
                src={`/image/project/poster_1.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/poster_2.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/poster_3.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/poster_4.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/poster_5.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/poster_6.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/poster_7.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="catalogue-block4-group-img">
              <Image
                src={`/image/project/poster_8.png`}
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
          {/* <div className="folder-block6">
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
            </p> */}
          {/* <p className="folder-block6-text">Thời gian giao hàng : 3~4 ngày</p>
            <p className="folder-block6-text">
              Giao Hàng tận nơi trong phạm vi thành phố.
            </p> */}
          {/* </div> */}
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

export default Poster;
