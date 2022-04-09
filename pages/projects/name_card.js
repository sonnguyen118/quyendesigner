import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

const NameCard = () => {
  return (
    <Layout>
      <div className="namecard">
        <div className="namecard-block1">
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
        <div className="namecard-block3"></div>
        <div className="namecard-block4"></div>
        <div className="namecard-block5"></div>
        <div className="namecard-block6">
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

export default NameCard;
