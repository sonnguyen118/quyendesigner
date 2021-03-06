import React, { useState, useEffect, useCallback } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
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

  // slide show block 1 menu mobile mode
  //
  var windowScrollY;
  const [y, setY] = useState(windowScrollY);
  const [scrollUp, setScrollUp] = useState(true);
  const [scrollDown, setScrollDown] = useState(false);
  const [scrollColor, setScrollColor] = useState(true);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY == 0) {
        setScrollColor(true);
        setScrollUp(true);
        setScrollDown(false);
      } else if (y > window.scrollY) {
        setScrollUp(true);
        setScrollDown(false);
        setScrollColor(false);
      } else if (y < window.scrollY) {
        setScrollUp(false);
        setScrollDown(true);
        setScrollColor(false);
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
              Xin ch??o, t??i l??
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
              ?????n v???i{" "}
              <span className="home-block1-decription-intro-hightlight">
                T??i
              </span>
              , b???n s??? l??m vi???c m???t c??ch t???n t??m v?? chuy??n nghi???p... Nh???ng s???n
              ph???m t??i l??m ?????u ch???a ?????ng m???t c??u chuy???n ri??ng m???t phong c??ch
              ri??ng.
            </span>
          </div>
        </div>
        <div className="home-block1mobile">
          <div className="CSSgal">
            {/* Don't wrap targets in parent */}
            <s id="s1" />
            <s id="s2" />
            <s id="s3" />
            <s id="s4" />
            <div className="home-block1mobile-slider slider">
              <div className="home-block1mobile-infor slider-image-1">
                {/* <div className="home-block1mobile-infor-img">
                  <Image
                    src={`/image/home_page/logo_1.png`}
                    alt="description of image"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="home-block1mobile-infor-text">
                  ?????n v???i{" "}
                  <span className="home-block1mobile-infor-text-hightlight">
                    T??i
                  </span>
                  , b???n s??? l??m vi???c m???t c??ch t???n t??m v?? chuy??n nghi???p... Nh???ng
                  s???n ph???m t??i l??m ra ?????u ch???a ?????ng m???t c??u chuy???n ri??ng m???t
                  phong c??ch ri??ng.
                </div> */}
              </div>
              <div className="home-block1mobile-infor slider-image-2">
                {/* <div className="home-block1mobile-infor-img">
                  <Image
                    src={`/image/home_page/logo_1.png`}
                    alt="description of image"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="home-block1mobile-infor-text">
                  ?????n v???i{" "}
                  <span className="home-block1mobile-infor-text-hightlight">
                    T??i
                  </span>
                  , b???n s??? l??m vi???c m???t c??ch t???n t??m v?? chuy??n nghi???p... Nh???ng
                  s???n ph???m t??i l??m ra ?????u ch???a ?????ng m???t c??u chuy???n ri??ng m???t
                  phong c??ch ri??ng.
                </div> */}
              </div>
              <div className="home-block1mobile-infor slider-image-3">
                {/* <div className="home-block1mobile-infor-img">
                  <Image
                    src={`/image/home_page/logo_1.png`}
                    alt="description of image"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="home-block1mobile-infor-text">
                  ?????n v???i{" "}
                  <span className="home-block1mobile-infor-text-hightlight">
                    T??i
                  </span>
                  , b???n s??? l??m vi???c m???t c??ch t???n t??m v?? chuy??n nghi???p... Nh???ng
                  s???n ph???m t??i l??m ra ?????u ch???a ?????ng m???t c??u chuy???n ri??ng m???t
                  phong c??ch ri??ng.
                </div> */}
              </div>
              <div className="home-block1mobile-infor slider-image-4">
                {/* <div className="home-block1mobile-infor-img">
                  <Image
                    src={`/image/home_page/logo_1.png`}
                    alt="description of image"
                    layout="fill"
                    data-testid="close-icon"
                    objectFit="contain"
                  />
                </div>
                <div className="home-block1mobile-infor-text">
                  ?????n v???i{" "}
                  <span className="home-block1mobile-infor-text-hightlight">
                    T??i
                  </span>
                  , b???n s??? l??m vi???c m???t c??ch t???n t??m v?? chuy??n nghi???p... Nh???ng
                  s???n ph???m t??i l??m ra ?????u ch???a ?????ng m???t c??u chuy???n ri??ng m???t
                  phong c??ch ri??ng.
                </div> */}
              </div>
            </div>
            <div className="prevNext">
              <div>
                <a href="#s4" />
                <a href="#s2" />
              </div>
              <div>
                <a href="#s1" />
                <a href="#s3" />
              </div>
              <div>
                <a href="#s2" />
                <a href="#s4" />
              </div>
              <div>
                <a href="#s3" />
                <a href="#s1" />
              </div>
            </div>
            <div className="bullets">
              <a href="#s1"></a>
              <a href="#s2"></a>
              <a href="#s3"></a>
              <a href="#s4"></a>
            </div>
          </div>
        </div>
        <div
          className={
            navbar
              ? "home-block2"
              : scrollUp
              ? "block2 magrin-top-50px"
              : "block2 magrin-top-60px"
          }
        >
          <p className="home-block2-title">KH??CH H??NG C???A T??I</p>
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
            <span className="home-block3-title-1">D???ch v??? c???a</span>
            <span className="home-block3-title-2">T??i</span>
          </div>
          <div className="home-block3-description">
            ????? ????p ???ng nhu c???u c???u t???ng kh??ch h??ng. T??i c??n tri???n khai thi???t k???
            theo g??i s??? ph?? h???p v???i t???ng doanh nghi???p v?? t???ng ng??nh ngh??? kh??c
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
              <p className="home-block3-group-item-title">Thi???t K??? S??ng T???o</p>
              <p className="home-block3-group-item-content">
                Kh??ng ch??? l?? nh???ng thi???t k??? ????? ph???c v??? cho vi???c kinh doanh,
                ch??ng c??n c?? ch???c n??ng truy???n t???i th??ng ??i???p c???a doanh nghi???p
                ?????n nh???ng kh??ch h??ng ti???m n??ng m???t c??ch r?? r??ng v?? ????n gi???n nh???t
              </p>
              <Link href={`/projects`} passHref>
                <div className="home-block3-group-item-btn">Xem chi ti???t</div>
              </Link>
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
              <p className="home-block3-group-item-title">In ???n & S???n xu???t</p>
              <p className="home-block3-group-item-content">
                M???t thi???t k??? ?????p v?? ho??n ch???nh th?? kh??ng th??? thi???u ph???n in ???n v??
                s???n xu???t s???n ph???m cu???i c??ng. Nh??ng ????? s???n ph???m l??m ra gi???ng nh???t
                v???i b???n thi???t k??? th?? l???i l?? m???t c??u chuy???n kh??c.
              </p>
              <Link href={`/projects`} passHref>
                <div className="home-block3-group-item-btn">Xem chi ti???t</div>
              </Link>
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
              <p className="home-block3-group-item-title">Ch???p ???nh</p>
              <p className="home-block3-group-item-content">
                Ch??ng ta ??ang h?????ng ?????n m???t th???i k??? kinh doanh tr??n m???i n???n t???ng
                v?? th??? s??? th???t thi???u s??t n???u doanh nghi???p c???a b???n kh??ng ???ng d???ng
                d???ch v??? ch???p ???nh v??o kinh doanh.
              </p>
              <Link href={`/projects/photography`} passHref>
                <div className="home-block3-group-item-btn">Xem chi ti???t</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-block4">
          <div className="home-block4-title home-block3-title">
            <span className="home-block3-title-1">L?? do b???n ch???n</span>
            <span className="home-block3-title-2">T??i</span>
            <p className="home-block4-title-content">
              <span className="home-block4-title-content-hightlight1">T??i</span>{" "}
              kh??ng cam k???t v???i b???n l?? s???n ph???m l??m ra l?? gi?? th???p nh???t v?? nhanh
              nh???t, nh??ng t??i{" "}
              <span className="home-block4-title-content-hightlight2">
                cam k???t
              </span>{" "}
              v???i b???n m???t s???n ph???m t??i l??m ra s??? ph???i ?????m b???o y???u t??? ph???i h??i
              l??ng b???n nh???t v?? hi???u qu??? nh???t cho vi???c kinh doanh c???a b???n.
            </p>
            <p className="home-block4-title-content">
              <span className="home-block4-title-content-hightlight1">T??i</span>{" "}
              t??m huy???t trong t???ng d??? ??n d?? nh??? hay l???n, m???c ????ch l???n nh???t c???a
              t??i l?? chia s??? ni???m vui v?? ?????ng h??nh c??ng b???n trong nh???ng gi???i
              ph??p kinh doanh.
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
                Kinh nghi???m l??m vi???c
              </p>
              <p className="home-block4-block-content-body">
                V???i h??n 3 n??m l??m vi???c, t??i kh??ng ch??? c?? kinh nghi???m v??? m???t
                thi???t k???, th???m m???, m?? t??i lu??n t??m ki???m nh???ng xu h?????ng m???i ?????
                gi??p cho c??c d??? ??n kh??ch h??ng c?? nhi???u s??? kh??c bi???t h??n, song
                t??i c??n gi??p kh??ch h??ng c???a m??nh l???a ch???n nh???ng ph????ng ??n t???t
                nh???t ph?? h???p v???i nhu c???u v?? th??? hi???u c???a th??? tr?????ng.
              </p>
            </div>
          </div>
          <div className="home-block4-block">
            <div className="home-block4-block-content">
              <p className="home-block4-block-content-title">
                Kinh nghi???m l??m vi???c
              </p>
              <p className="home-block4-block-content-body">
                V???i h??n 3 n??m l??m vi???c, t??i kh??ng ch??? c?? kinh nghi???m v??? m???t
                thi???t k???, th???m m???, m?? t??i lu??n t??m ki???m nh???ng xu h?????ng m???i ?????
                gi??p cho c??c d??? ??n kh??ch h??ng c?? nhi???u s??? kh??c bi???t h??n, song
                t??i c??n gi??p kh??ch h??ng c???a m??nh l???a ch???n nh???ng ph????ng ??n t???t
                nh???t ph?? h???p v???i nhu c???u v?? th??? hi???u c???a th??? tr?????ng.
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
                Kinh nghi???m l??m vi???c
              </p>
              <p className="home-block4-block-content-body">
                V???i h??n 3 n??m l??m vi???c, t??i kh??ng ch??? c?? kinh nghi???m v??? m???t
                thi???t k???, th???m m???, m?? t??i lu??n t??m ki???m nh???ng xu h?????ng m???i ?????
                gi??p cho c??c d??? ??n kh??ch h??ng c?? nhi???u s??? kh??c bi???t h??n, song
                t??i c??n gi??p kh??ch h??ng c???a m??nh l???a ch???n nh???ng ph????ng ??n t???t
                nh???t ph?? h???p v???i nhu c???u v?? th??? hi???u c???a th??? tr?????ng.
              </p>
            </div>
          </div>
          <div className="home-block4-block">
            <div className="home-block4-block-content">
              <p className="home-block4-block-content-title">
                Kinh nghi???m l??m vi???c
              </p>
              <p className="home-block4-block-content-body">
                V???i h??n 3 n??m l??m vi???c, t??i kh??ng ch??? c?? kinh nghi???m v??? m???t
                thi???t k???, th???m m???, m?? t??i lu??n t??m ki???m nh???ng xu h?????ng m???i ?????
                gi??p cho c??c d??? ??n kh??ch h??ng c?? nhi???u s??? kh??c bi???t h??n, song
                t??i c??n gi??p kh??ch h??ng c???a m??nh l???a ch???n nh???ng ph????ng ??n t???t
                nh???t ph?? h???p v???i nhu c???u v?? th??? hi???u c???a th??? tr?????ng.
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
              ??i???u quan tr???ng nh???t trong thi???t k??? l?? vi???c truy???n t???i th??ng ??i???p
              ????ng ?????n kh??ch h??ng
            </p>
            <i className="home-block5-main-icon-2 fas fa-quote-right" />
          </div>
          <p className="home-block5-sign">NGUYEN QUYEN</p>
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
                  G???i y??u c???u thi???t k???
                </div>
                <div className="home-block6-main-text-body">
                  H??y ????? t??i ?????ng h??nh c??ng d??? ??n c???a qu?? kh??ch.
                </div>
              </div>
            </div>
            <div className="home-block6-btn">G???I Y??U C???U</div>
          </div>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
