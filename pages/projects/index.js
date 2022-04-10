import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const Projects = () => {
  return (
    <Layout>
      <div className="projects">
        <div className="projects-block1">
          <div className="projects-block1-content">
            <span className="projects-block1-content-title">
              Thiết kế{" "}
              <span className="projects-block1-content-title-hightlight">
                sáng tạo
              </span>
            </span>
            <p className="projects-block1-content-main">
              Không chỉ là những thiết kế phục vụ cho việc kinh doanh, chúng còn
              có chức năng truyền tải thông điệp của doanh nghiệp đến những
              khách hàng tiềm năng một cách rõ ràng và đơn giản nhất.
            </p>
          </div>
          <div className="projects-block1-img">
            <Image
              src={`/image/project/image_block1.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="projects-block2">
          <p className="projects-block2-title">Ấn phẩm văn phòng</p>
          <div className="projects-block2-group">
            <Link href={`/projects/name_card`} passHref>
              <div className="projects-block2-group-box">
                <p className="projects-block2-group-box-title">
                  Thiết kế danh thiếp - Name Card
                </p>
                <p className="projects-block2-group-box-content">
                  Chỉ là một tấm danh thiếp nhỏ, nhưng vô cùng quan trọng, không
                  chỉ là thông tin mà còn là hình ảnh thương hiệu của bạn
                </p>
              </div>
            </Link>
            <Link href={`/projects/folder`} passHref>
              <div className="projects-block2-group-box">
                <p className="projects-block2-group-box-title">
                  Thiết kế bìa kẹp hồ sơ, tài liệu - Folder
                </p>
                <p className="projects-block2-group-box-content">
                  Chỉ là một tấm danh thiếp nhỏ, nhưng vô cùng quan trọng, không
                  chỉ là thông tin mà còn là hình ảnh thương hiệu của bạn
                </p>
              </div>
            </Link>
            <Link href={`/projects/calendar`} passHref>
              <div className="projects-block2-group-box">
                <p className="projects-block2-group-box-title">
                  Thiết kế Lịch độc quyền
                </p>
                <p className="projects-block2-group-box-content">
                  Chỉ là một tấm danh thiếp nhỏ, nhưng vô cùng quan trọng, không
                  chỉ là thông tin mà còn là hình ảnh thương hiệu của bạn
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="projects-block2">
          <p className="projects-block2-title">Ấn phẩm quảng cáo</p>
          <div className="projects-block2-group">
            <Link href={`/projects/flyer`} passHref>
              <div className="projects-block2-group-box">
                <p className="projects-block2-group-box-title">
                  Thiết kế tờ rơi - Flyer
                </p>
                <p className="projects-block2-group-box-content">
                  Chỉ là một tấm danh thiếp nhỏ, nhưng vô cùng quan trọng, không
                  chỉ là thông tin mà còn là hình ảnh thương hiệu của bạn
                </p>
              </div>
            </Link>
            <Link href={`/projects/poster`} passHref>
              <div className="projects-block2-group-box">
                <p className="projects-block2-group-box-title">
                  Thiết kế Poster
                </p>
                <p className="projects-block2-group-box-content">
                  Chỉ là một tấm danh thiếp nhỏ, nhưng vô cùng quan trọng, không
                  chỉ là thông tin mà còn là hình ảnh thương hiệu của bạn
                </p>
              </div>
            </Link>
            <Link href={`/projects/catalogue`} passHref>
              <div className="projects-block2-group-box">
                <p className="projects-block2-group-box-title">
                  Thiết kế Catalogue
                </p>
                <p className="projects-block2-group-box-content">
                  Chỉ là một tấm danh thiếp nhỏ, nhưng vô cùng quan trọng, không
                  chỉ là thông tin mà còn là hình ảnh thương hiệu của bạn
                </p>
              </div>
            </Link>
            <Link href={`/projects/backdrop`} passHref>
              <div className="projects-block2-group-box">
                <p className="projects-block2-group-box-title">
                  Thiết kế Backdrop
                </p>
                <p className="projects-block2-group-box-content">
                  Chỉ là một tấm danh thiếp nhỏ, nhưng vô cùng quan trọng, không
                  chỉ là thông tin mà còn là hình ảnh thương hiệu của bạn
                </p>
              </div>
            </Link>
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

export default Projects;
