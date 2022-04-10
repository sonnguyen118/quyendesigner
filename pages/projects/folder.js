import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Folder = () => {
  return (
    <Layout>
      <div className="namecard">
        <div className="namecard-block1">
          <h1 className="namecard-block1-title">
            Thiết kế{" "}
            <span className="namecard-block1-title-hightlight">Folder</span>
          </h1>
          <p className="namecard-block1-main">
            Một Folder chuyên nghiệp không chỉ gây ấn tượng với khách hàng mà
            còn ảnh hưởng đến thương hiệu của bạn.
          </p>
        </div>
        <div className="namecard-block2">
          <div className="namecard-block2-img">
            <Image
              src={`/image/project/folder.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
          <div className="namecard-block2-content">
            <p className="namecard-block2-content-title">Folder là gì?</p>
            <p className="namecard-block2-content-description">
              Folder (hay còn gọi là bìa kẹp hồ sơ,tài liệu) là 1 ấn phẩm văn
              phòng được làm từ 1 tấm bìa cứng bằng giấy chuyên dụng để kẹp các
              tài liệu, hồ sơ cần thiết khi gửi đến khách hàng, hoặc nội bộ
              trong doanh nghiệp.
              <br></br>
              <br></br>- Folder thường được in ấn số lượng nhiều để tiết kiệm
              chi phí, và sử dụng hàng ngày trong doanh nghiệp.
              <br></br>- Để gửi đến khách hàng một cuốn Catalogue, bảng báo giá
              hay một hợp đồng thì chúng ta thường để chúng vào một Folder và
              gửi đến khách hàng, điều này sẽ làm tăng giá trị sản phẩm, dịch vụ
              và cả giá trị của doanh nghiệp bạn, giúp khách hàng - đối tác của
              bạn cảm thấy sự tôn trọng và sẽ tin tưởng bạn hơn.
              <br></br>- Khi Folder được gửi đến khách hàng và kèm với những ấn
              phẩm khác để tiện công việc và đây cũng là ấn phẩm dễ tiếp cận với
              khách hàng nhất sau Name Card và phong bì thư, vì thế bạn cần chú
              trọng vào việc thiết kế một Folder chuyên nghiệp cũng như đồng bộ
              nhận diện thương hiệu của bạn.
              <br></br>- Hiện nay bạn có rất nhiều lựa chọn cho việc in ấn và
              thiết kế Folder giá rẻ nhưng chúng tôi lại muốn hướng cho bạn một
              Folder chất lượng và bắt mắt, vì khách hàng có thể đánh giá cả
              doanh nghiệp của bạn và quyết định có nên hợp tác với bạn không
              chỉ qua một bìa Folder đơn giản.
            </p>
          </div>
        </div>
        <div className="namecard-block3">
          <div className="namecard-block3-content">
            <p className="namecard-block3-content-title">
              Các bước thiết kế Folder
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
            <div className="folder-block4-group-img">
              <Image
                src={`/image/project/folder_1.png`}
                alt="description of image"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
            <div className="folder-block4-group-img">
              <Image
                src={`/image/project/folder_2.png`}
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
                400.000đ {""}
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
                400.000đ {""}
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
            <p className="folder-block6-text">
              Kích thước A4 : 22cm x 31cmx6,5cm tai cài
            </p>
            <p className="folder-block6-text">In Offset 4 màu 2 mặt</p>
            <p className="folder-block6-text">Giấy Couche 300</p>
            <p className="folder-block6-text">Cán mờ 1 mặt</p>
            <p className="folder-block6-text">Thời gian giao hàng : 3~4 ngày</p>
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

export default Folder;
