import React from "react";
import { Fade, Zoom, Flip, Bounce, Roll } from "react-reveal";
import PropTypes from "prop-types";
// import NotFound from 'general/components/AppNotFound';
import HeaderLandingPage from "general/components/HeaderLandingPage";
import FooterDashboard from "general/components/Footer";
import AppResource from "general/constants/AppResource";
import "./style.scss";
import Line from "../../assets/images/Line.png";
import Web from "../../assets/images/Web.png";
import Img1 from "../../assets/images/PostView.jpg";
import Img2 from "../../assets/images/illo-for-you.png";
import Img3 from "../../assets/images/MainSignedState.jpg";
import Img4 from "../../assets/images/img4.png";
import Img5 from "../../assets/images/Blog.jpg";
import PathImg from "../../assets/images/Path.png";
import ShapeImg from "../../assets/images/Shape.png";
import Img6 from "../../assets/images/img6.png";
import Img7 from "../../assets/images/img7.png";
import Img8 from "../../assets/images/img8.png";
import Img9 from "../../assets/images/img9.png";
import Img10 from "../../assets/images/img10.png";
import Item from "../../assets/images/Item.png";
import Item1 from "../../assets/images/Item-1.png";
import Item2 from "../../assets/images/Item-2.png";
import Item3 from "../../assets/images/Item-3.png";
import Item4 from "../../assets/images/Item-4.png";
import Item5 from "../../assets/images/Item-5.png";

import {
  HtmlIcon,
  CssIcon,
  JavascriptIcon,
  JavaIcon,
  C_plusplusIcon,
  PHPIcon,
  C_sharpIcon,
  PythonIcon,
  StarIcon,
  StarGrayIcon,
} from "../../assets/icons/Icons.js";

LandingPage.propTypes = {};

function LandingPage(props) {
  return (
    <div className="min-vh-100">
      <HeaderLandingPage />
      <div className="bg-white">
        {/* Screen 1 */}
        <div className="Introduction d-flex flex-column flex-lg-row-reverse p-20">
          <div className="IntroductionRight d-flex justify-content-center">
            <Fade right delay={100}>
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                src={Web}
                alt=""
              />
            </Fade>
          </div>
          <div className="IntroductionLeft d-flex flex-column justify-content-center align-items-center align-items-lg-start">
            <Fade left>
              <h1 className="TextIntroduction position-relative">
                Nền tảng trao đổi về lập trình miễn phí
                <img className="left-lg-50" src={Line} alt="" />
              </h1>
              <p className="mt-10 mb-2 fs-5">
                Một cộng đồng lớn mạnh với nhiều lập trình viên có kinh nghiệm.
              </p>
              <p className="fs-5">
                Cung cấp các giải pháp tốt nhất cho vấn đề trong mã nguồn của
                bạn.
              </p>
              <button type="button" className="ButtonPrimary fs-5">
                Đăng ký ngay
              </button>
              <div className="d-flex mt-15">
                <div className="fst-italic col-3">
                  <i className="far fa-check"></i>Miễn phí
                </div>
                <div className="fst-italic col-3">
                  <i className="far fa-check"></i>Chính xác
                </div>
                <div className="fst-italic col-3">
                  <i className="far fa-check"></i>Nhanh chóng
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/* Screen 2 */}
        <div className="d-flex flex-column align-items-center">
          <div
            className="d-flex flex-column align-items-center"
            style={{
              backgroundColor: "#F7F8F9",
              width: "95%",
              borderRadius: "2rem",
            }}
          >
            <Zoom>
              <h1
                className="mt-20 mb-10"
                style={{
                  color: "#183B56",
                  fontSize: "3rem",
                  fontWeight: "800",
                }}
              >
                Có tất cả các ngôn ngữ lập trình
              </h1>
            </Zoom>
            <Zoom delay={100}>
              <p className="fs-5" style={{ color: "#5A7184" }}>
                Mọi câu hỏi và giải pháp về các ngôn ngữ lập trình khác nhau.
              </p>
            </Zoom>
            <div
              className="d-flex justify-content-between my-10"
              style={{ width: "60%" }}
            >
              <Bounce left delay={300}>
                <div className="IconWrapper">
                  <HtmlIcon height="2.5rem" />
                </div>
              </Bounce>
              <Bounce left delay={200}>
                <div className="IconWrapper">
                  <CssIcon height="2.5rem" />
                </div>
              </Bounce>
              <Bounce left delay={100}>
                <div className="IconWrapper">
                  <JavascriptIcon height="2.5rem" />
                </div>
              </Bounce>
              <Bounce left>
                <div className="IconWrapper">
                  <JavaIcon height="2.5rem" />
                </div>
              </Bounce>
              <Bounce right>
                <div className="IconWrapper">
                  <C_plusplusIcon height="2.5rem" />
                </div>
              </Bounce>
              <Bounce right delay={100}>
                <div className="IconWrapper">
                  <PHPIcon height="2.5rem" />
                </div>
              </Bounce>
              <Bounce right delay={200}>
                <div className="IconWrapper">
                  <C_sharpIcon height="2.5rem" />
                </div>
              </Bounce>
              <Bounce right delay={300}>
                <div className="IconWrapper">
                  <PythonIcon height="2.5rem" />
                </div>
              </Bounce>
            </div>
            <div className="d-flex w-100 justify-content-between mt-40 position-relative">
              <Zoom delay={400} duration={2000}>
                <img
                  style={{
                    height: "22rem",
                    borderRadius: "2rem",
                    filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  src={Img1}
                  alt=""
                />
              </Zoom>
              <Zoom delay={400} duration={2000}>
                <img
                  style={{
                    height: "35rem",
                    borderRadius: "2rem",
                    zIndex: "1",
                    position: "absolute",
                    left: "25%",
                    top: "-7rem",
                    filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  src={Img2}
                  alt=""
                />
              </Zoom>
              <Zoom delay={400} duration={2000}>
                <img
                  style={{
                    height: "22rem",
                    borderRadius: "2rem",
                    filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  }}
                  src={Img3}
                  alt=""
                />
              </Zoom>
            </div>
          </div>
        </div>
        {/* Line */}
        <div
          className="mt-40 mb-20 pt-10 mx-auto"
          style={{
            width: "15rem",
            borderBottom: "2px solid #5A7184",
          }}
        ></div>
        {/* Screen 3 */}
        <div
          className="d-flex mx-auto"
          style={{
            backgroundColor: "#FBFBFB",
            width: "95%",
            borderRadius: "2rem",
          }}
        >
          <div className="d-flex flex-column m-30 col-5">
            <Fade left>
              <h1
                className="fw-bold lh-base"
                style={{
                  width: "40rem",
                  fontSize: "3rem",
                  fontWeight: "750",
                  color: "#183B56",
                }}
              >
                Các lập trình viên yêu thích CodeHelper
              </h1>
              <img
                style={{
                  position: "absolute",
                  top: "8.5rem",
                  width: "17rem",
                  height: "auto",
                }}
                src={Line}
                alt=""
              />
            </Fade>
            <Fade left delay={100}>
              <p className="mt-10 mb-2 fs-5 lh-lg" style={{ color: "#5A7184" }}>
                Khi các lập trình viên gặp vấn đề về mã hóa, họ sẽ tìm đến
                CodeHelper. Bởi vì họ biết họ sẽ tìm ra giải pháp.
              </p>
            </Fade>
            <div className="d-flex flex-column mt-10">
              <Fade left delay={200}>
                <div
                  className="d-flex align-items-center py-5 fs-5"
                  style={{
                    backgroundColor: "#FFF5DE",
                    borderRadius: "1.5rem",
                    color: "#5A7184",
                  }}
                >
                  <h1
                    className="mx-5"
                    style={{
                      fontSize: "3rem",
                      fontWeight: "750",
                      color: "#183B56",
                    }}
                  >
                    53%
                  </h1>
                  các lập trình viên truy cập CodeHelper mỗi ngày
                </div>
              </Fade>
              <Fade left delay={300}>
                <div
                  className="d-flex align-items-center p-3 mt-6 fs-5"
                  style={{
                    backgroundColor: "#FFF5DE",
                    borderRadius: "1.5rem",
                    color: "#5A7184",
                  }}
                >
                  <h1
                    className="mx-5"
                    style={{
                      fontSize: "3rem",
                      fontWeight: "750",
                      color: "#183B56",
                    }}
                  >
                    81%
                  </h1>
                  trong số các lập trình viên truy cập CodeHelper ít nhất một
                  lần một tuần
                </div>
              </Fade>
            </div>
          </div>
          <Bounce right duration={2000}>
            <div className="d-flex justify-content-center align-items-center">
              <img style={{ height: "32rem" }} src={Img4} alt="" />
            </div>
          </Bounce>
        </div>
        {/* Line */}
        <div
          className="mt-30 mb-20 mx-auto"
          style={{
            width: "15rem",
            borderBottom: "2px solid #5A7184",
          }}
        ></div>
        {/* Screen 4 */}
        <div
          className="d-flex flex-column mx-auto"
          style={{
            backgroundColor: "#F7F8F9",
            width: "95%",
            borderRadius: "2rem",
          }}
        >
          <Zoom>
            <h1
              className="mt-15 mb-10 mx-auto"
              style={{
                color: "#183B56",
                fontSize: "3rem",
                fontWeight: "800",
              }}
            >
              Các Blog chia sẻ về lập trình
            </h1>
          </Zoom>
          <Zoom delay={100}>
            <p className="fs-5 mx-auto" style={{ color: "#5A7184" }}>
              Giới thiệu bí quyết kỹ thuật của bạn.
            </p>
          </Zoom>
          <div className="d-flex mt-15 mb-40 position-relative">
            <Roll top delay={200}>
              <img
                style={{
                  position: "absolute",
                  top: "10rem",
                  left: "15rem",
                }}
                src={PathImg}
                alt=""
              />
            </Roll>
            <Roll bottom delay={200}>
              <img
                style={{
                  position: "absolute",
                  bottom: "-8rem",
                  right: "21rem",
                  width: "12rem",
                }}
                src={PathImg}
                alt=""
              />
            </Roll>
            <Roll right delay={200}>
              <img
                style={{
                  position: "absolute",
                  top: "-5rem",
                  right: "40rem",
                  width: "10rem",
                }}
                src={PathImg}
                alt=""
              />
            </Roll>
            <Zoom delay={400}>
              <img
                className="w-50"
                style={{
                  filter: "drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.5))",
                  borderRadius: " 20px",
                  margin: "0 auto",
                }}
                src={Img5}
                alt=""
              />
            </Zoom>
            <Fade bottom delay={500}>
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  top: "-4rem",
                  left: "15rem",
                  backgroundColor: "#E3F1FE",
                  height: "15rem",
                  width: "15rem",
                  borderRadius: "3rem",
                  boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <i
                  className="fas fa-check-circle mb-4"
                  style={{
                    color: "#0FA958",
                    fontSize: "2.8rem",
                  }}
                ></i>
                <p className="m-4 fs-5 text-center fw-bold">
                  Kết nối với các lập trình viên theo cách trò chuyện, độc đáo
                </p>
              </div>
            </Fade>
            <Fade bottom delay={700}>
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  top: "10rem",
                  right: "15rem",
                  backgroundColor: "#E3F1FE",
                  height: "15rem",
                  width: "15rem",
                  borderRadius: "3rem",
                  boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <i
                  className="fas fa-check-circle mb-4"
                  style={{
                    color: "#0FA958",
                    fontSize: "2.8rem",
                  }}
                ></i>
                <p className="m-4 fs-5 text-center fw-bold">
                  Các bài blog được biên soạn với trình độ chuyên môn cao
                </p>
              </div>
            </Fade>
            <Fade bottom delay={900}>
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                style={{
                  position: "absolute",
                  bottom: "-8rem",
                  left: "35rem",
                  backgroundColor: "#E3F1FE",
                  height: "15rem",
                  width: "15rem",
                  borderRadius: "3rem",
                  boxShadow: "0px 6px 6px rgba(0, 0, 0, 0.3)",
                }}
              >
                <i
                  className="fas fa-check-circle mb-4"
                  style={{
                    color: "#0FA958",
                    fontSize: "2.8rem",
                  }}
                ></i>
                <p className="m-4 fs-5 text-center fw-bold">
                  Hơn 1000 bài blog được thêm mới trong vòng 6 tháng
                </p>
              </div>
            </Fade>
          </div>
        </div>
        {/* Line */}
        <div
          className="mt-30 mx-auto"
          style={{
            width: "80vw",
            borderBottom: "1px solid #E3E7ED",
          }}
        ></div>
        {/* Screen 5 */}
        <div className="d-flex py-20">
          <Zoom>
            <div className="d-flex mx-18 py-10">
              <img src={Img6} alt="" />
            </div>
          </Zoom>
          <div className="d-flex flex-column align-items-center px-10">
            <Fade bottom>
              <h1
                style={{
                  width: "16rem",
                  fontSize: "2.8rem",
                  fontWeight: " 700",
                  color: "#fff",
                  padding: "0.3rem 1rem",
                  backgroundColor: "#FAAD13",
                  marginLeft: "-30rem",
                  borderRadius: "0.5rem",
                }}
              >
                Phổ biến
              </h1>
            </Fade>
            <Fade bottom delay={100}>
              <h1
                style={{
                  fontSize: "2.8rem",
                  fontWeight: " 700",
                  color: "#183B56",
                }}
              >
                trên toàn thế giới
              </h1>
            </Fade>
            <Fade bottom delay={200}>
              <div>
                <input type="checkbox" id="touch1" />
                <label className="mt-10 mx-4" id="LabelDrop1" for="touch1">
                  <i className="fas fa-chevron-down ArrowDown1"></i>
                  <i className="fas fa-chevron-up ArrowUp1"></i>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.4rem",
                      letterSpacing: "0.2px",
                      color: "#183b56",
                      cursor: "pointer",
                      marginLeft: "2rem",
                    }}
                  >
                    Lượng truy cập CodeHelper lớn
                  </span>
                </label>
                <div className="SlideText1">
                  Trung bình Stack Overflow nhận được hơn 100 triệu lượt truy
                  cập hàng tháng từ các nhà phát triển.
                </div>
              </div>
            </Fade>
            <Fade bottom delay={300}>
              <div>
                <input type="checkbox" id="touch2" />
                <label className="mt-6 mx-4" id="LabelDrop2" for="touch2">
                  <i className="fas fa-chevron-down ArrowDown2"></i>
                  <i className="fas fa-chevron-up ArrowUp2"></i>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "1.4rem",
                      letterSpacing: "0.2px",
                      color: "#183b56",
                      cursor: "pointer",
                      marginLeft: "2rem",
                    }}
                  >
                    10 quốc gia có lưu lượng truy cập nhiều nhất
                  </span>
                </label>
                <div className="SlideText2">
                  Hoa Kỳ, Ấn Độ, Anh, Đức, Canada, Pháp, Brazil, Nga, Úc và Tây
                  Ban Nha
                </div>
              </div>
            </Fade>
          </div>
        </div>
        {/* Line */}
        <div
          className="mx-auto"
          style={{
            width: "15rem",
            borderBottom: "2px solid #5A7184",
          }}
        ></div>
        {/* Screen 6 */}
        <div className="d-flex py-30 justify-content-evenly">
          <Flip top delay={400}>
            <div
              className="d-flex flex-column align-items-center"
              style={{
                backgroundColor: "#FBFBFB",
                padding: "2rem 0",
                borderRadius: "2rem",
                filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
              }}
            >
              <img
                style={{
                  width: "10rem",
                  margin: "0 4.8rem",
                }}
                src={Img7}
                alt=""
              />
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "600",
                  color: "#183B56",
                  margin: "2rem 0 1.5rem",
                }}
              >
                200,000
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#5A7184",
                }}
              >
                Lập trình viên
              </p>
            </div>
          </Flip>
          <Flip top delay={600}>
            <div
              className="d-flex flex-column align-items-center"
              style={{
                backgroundColor: "#FBFBFB",
                padding: "2rem 0",
                borderRadius: "2rem",
                filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
              }}
            >
              <img
                style={{ width: "10rem", margin: "0 4.8rem" }}
                src={Img8}
                alt=""
              />
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "600",
                  color: "#183B56",
                  margin: "2rem 0 1.5rem",
                }}
              >
                +500
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#5A7184",
                }}
              >
                Lập trình viên mới mỗi tháng
              </p>
            </div>
          </Flip>
          <Flip top delay={800}>
            <div
              className="d-flex flex-column align-items-center"
              style={{
                backgroundColor: "#FBFBFB",
                padding: "2rem 0",
                borderRadius: "2rem",
                filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))",
              }}
            >
              <img
                style={{ width: "10rem", margin: "0 4.8rem" }}
                src={Img9}
                alt=""
              />
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "600",
                  color: "#183B56",
                  margin: "2rem 0 1.5rem",
                }}
              >
                +50
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#5A7184",
                }}
              >
                Quốc gia kết nối
              </p>
            </div>
          </Flip>
        </div>
        {/* Screen 7 */}
        <div
          className="d-flex flex-column mx-auto"
          style={{
            backgroundColor: "#F7F8F9",
            width: "95%",
            borderRadius: "2rem",
          }}
        >
          <div className="d-flex flex-column mx-auto">
            <Zoom>
              <h1
                className="mt-15 mb-10 mx-auto"
                style={{
                  color: "#183B56",
                  fontSize: "3rem",
                  fontWeight: "800",
                }}
              >
                Our Customer Testimony
              </h1>
            </Zoom>
            <Zoom delay={100}>
              <p
                className="fs-5 mx-auto w-75 text-center"
                style={{ color: "#5A7184" }}
              >
                See what our customer say about us. It really matter for us. How
                good or bad we will make it for evaluation to make EhyaLive
                better.
              </p>
            </Zoom>
          </div>
          <div className="d-flex p-20 justify-content-around">
            <Fade right delay={200}>
              <div
                className="d-flex flex-column justify-content-between align-items-start p-8 bg-white"
                style={{ borderRadius: "2rem" }}
              >
                <div className="d-flex">
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarGrayIcon className="me-2" />
                </div>
                <p
                  className="my-6"
                  style={{
                    color: "#183B56",
                    fontSize: "1.2rem",
                    lineHeight: "2rem",
                    fontWeight: "400",
                    maxWidth: "28rem",
                  }}
                >
                  "I know in real-time where the money is spent, and I don’t
                  have to lend out the company’s credit card anymore. What a
                  relief!"
                </p>
                <div
                  style={{
                    color: "#183B56",
                    fontSize: "1.3rem",
                    fontWeight: "600",
                  }}
                >
                  Boniface Esanji
                </div>
              </div>
            </Fade>
            <Fade right delay={400}>
              <div
                className="d-flex flex-column justify-content-between align-items-start p-8 bg-white"
                style={{ borderRadius: "2rem" }}
              >
                <div className="d-flex">
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                </div>
                <p
                  className="my-6"
                  style={{
                    color: "#183B56",
                    fontSize: "1.2rem",
                    lineHeight: "2rem",
                    fontWeight: "400",
                    maxWidth: "20rem",
                  }}
                >
                  "A great tool to monitor credit card expenses, collect
                  receipts, and facilitate accounting!!"
                </p>
                <div
                  style={{
                    color: "#183B56",
                    fontSize: "1.3rem",
                    fontWeight: "600",
                  }}
                >
                  Dana Kopřivová
                </div>
              </div>
            </Fade>
            <Fade right delay={600}>
              <div
                className="d-flex flex-column justify-content-between align-items-start p-8 bg-white"
                style={{ borderRadius: "2rem" }}
              >
                <div className="d-flex">
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarIcon className="me-2" />
                  <StarGrayIcon className="me-2" />
                </div>
                <p
                  className="my-6"
                  style={{
                    color: "#183B56",
                    fontSize: "1.2rem",
                    lineHeight: "2rem",
                    fontWeight: "400",
                    maxWidth: "18rem",
                  }}
                >
                  "The easiest expense software I have ever used!"
                </p>
                <div
                  style={{
                    color: "#183B56",
                    fontSize: "1.3rem",
                    fontWeight: "600",
                  }}
                >
                  Gvozden Boskovsky
                </div>
              </div>
            </Fade>
          </div>
        </div>
        {/* Screen 8 */}
        <div className="my-20">
          <h1
            style={{
              textAlign: "center",
              color: "#183B56",
              fontSize: "2.2rem",
              fontWeight: "750",
            }}
          >
            Được chứng nhận bởi các tổ chức hàng đầu
          </h1>
          <div>
            <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3 py-10 mx-25">
              <div className="col">
                <div className="py-5">
                  <img src={Item} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item1} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item2} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item3} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item4} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item5} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item2} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item3} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item1} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item5} alt="" />
                </div>
              </div>
              <div className="col">
                <div className="py-5">
                  <img src={Item4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Screen 9 */}
        <div
          className="d-flex justify-content-end mx-auto"
          style={{
            backgroundColor: "#485763",
            width: "95%",
            borderRadius: "2rem",
          }}
        >
          <div className="position-relative">
            <Roll top delay={300}>
              <img
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "10rem",
                }}
                src={ShapeImg}
                alt=""
              />
            </Roll>
            <Roll bottom delay={300}>
              <img
                style={{
                  position: "absolute",
                  bottom: "8rem",
                  right: "-7rem",
                  width: "12rem",
                }}
                src={ShapeImg}
                alt=""
              />
            </Roll>
            <Roll right delay={300}>
              <img
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "-7rem",
                  width: "15rem",
                }}
                src={ShapeImg}
                alt=""
              />
            </Roll>
            <Zoom delay={400}>
              <div
                className="d-flex flex-column bg-white align-items-center justify-content-between my-20 ms-30 py-10 px-20"
                style={{
                  width: "39rem",
                  height: "23rem",
                  borderRadius: "2rem",
                  boxShadow: "0px 6px 6px 3px rgba(0, 0, 0, 0.25)",
                }}
              >
                <i className="fab fa-forumbee d-flex fa-3x" style={{color: AppResource.colors.featureColor}}></i>
                <h1
                  className="fs-3 fw-bold text-center"
                  style={{ color: "#485763" }}
                >
                  Nền tảng công khai của chúng tôi
                </h1>
                <p className="fs-4 text-center" style={{ color: "#485763" }}>
                  Nơi các nhà phát triển và lập trình viên trao đổi kiến thức
                </p>
                <button type="button" className="ButtonPrimary fs-6">
                  Tham gia ngay
                </button>
              </div>
            </Zoom>
          </div>
          <Fade right delay={400}>
            <div>
              <img src={Img10} alt="" />
            </div>
          </Fade>
        </div>
      </div>
      <FooterDashboard />
    </div>
  );
}

export default LandingPage;
