import React, { useEffect, useState } from "react";
import image from "../../assets/images/638259858145408752_desk-header.webp";
import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import SliderComp from "../../components/slider/SliderComp";
import { Helmet } from "react-helmet";
import PhoneLogo from "../../assets/images/img-dienthoai-desk.webp";
import LaptopLogo from "../../assets/images/icon-laptop.webp";
import PCLogo from "../../assets/images/icon-pc.webp";
import TabletLogo from "../../assets/images/icon-mtb-desk.webp";
import SmartDevice from "../../assets/images/icon-smart.webp";
import HouseWare from "../../assets/images/icon-houseware.webp";
import Apple from "../../assets/images/img-apple-desk.webp";
import Samsung from "../../assets/images/destop-ic-samsung.webp";
import Smartwatch from "../../assets/images/icon-smartwatch.webp";
import Accessories from "../../assets/images/icon-accessories.webp";
import Screen from "../../assets/images/icon-screen.webp";
import SecondHand from "../../assets//images/icon-tcdm.webp";
import { Link } from "react-router-dom";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import axios from "axios";

function HomePage() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const fetchImages = async () => {
    await axios
      .get(`http://localhost:8000/api/v1/smartphones/all-images/`)
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  };
  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/v1/smartphones/`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
    fetchImages();
  }, []);

  const findImg = (product) => {
    if (images) {
      const findImage = images.find((e) => e.smartphone_id === product);
      return findImage;
    }
  };
  return (
    <div className="homepage pb-4">
      <Helmet>
        <title>
          Fptshop.com.vn | Điện thoại, Laptop, Tablet, Phụ kiện chính hãng giá
          tốt nhất
        </title>
      </Helmet>
      <Container>
        <img src={image} alt="" className="w-100" />
        <SliderComp />
        <br />
        <div className="bg-white rounded text-center second-nav-bar">
          <Row sm={2} md={3} xl={6} className="px-3">
            <Link to={"/smartphone"} className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={PhoneLogo}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Điện thoại</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={LaptopLogo}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Laptop</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={PCLogo}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">PC</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={TabletLogo}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Máy tính bảng</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={SmartDevice}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Thiết bị thông minh</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={HouseWare}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Gia dụng</p>
              </Col>
            </Link>
          </Row>
          <Row sm={2} md={3} xl={6} className="px-3">
            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={Apple}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Apple</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={Samsung}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Samsung</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={Smartwatch}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Đồng hồ thông minh</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={Accessories}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Phụ kiện</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={Screen}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Màn hình</p>
              </Col>
            </Link>

            <Link className=" text-decoration-none">
              <Col className="d-flex flex-column gap-2 text-dark justify-content-between align-items-center p-3">
                <div className="bg-body-secondary rounded-circle">
                  <img
                    src={SecondHand}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    className="m-3"
                  />
                </div>
                <p className="m-0 ">Máy cũ</p>
              </Col>
            </Link>
          </Row>
        </div>
        <div className="mt-3">
          <Row sm={2} md={4}>
            <Col className="p-2">
              <img
                src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/18/638252807173982813_desk-html-banner.png"
                alt=""
                className="w-100"
              />
            </Col>
            <Col className="p-2">
              <img
                src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/18/638252807174329645_desk-html-banner-1.png"
                alt=""
                className="w-100"
              />
            </Col>
            <Col className="p-2">
              <img
                src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/17/638252153564593656_desk-html-banner-2.png"
                alt=""
                className="w-100"
              />
            </Col>
            <Col className="p-2">
              <img
                src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/17/638252153564228431_desk-html-banner-3.png"
                alt=""
                className="w-100"
              />
            </Col>
          </Row>
          <div>
            <img
              src="https://images.fpt.shop/unsafe/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/7/19/638253578750862624_desk-html-sub-cate.png"
              alt=""
              className="w-100"
            />
          </div>
        </div>
        <div className="bg-white mt-4 rounded p-2">
          <h4 className="fw-bold">MUA TIVI XIAOMI NGAY HÔM NAY</h4>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/1168x97/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/12/638274375701106789_H7-%201200x100.png"
            alt=""
            className="w-100"
          />
          <Row sm={2} lg={4} className="mt-3 justify-content-sm-center">
            <Col xs={12}>
              <img
                src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/12/638274373683671987_brand-banner.png"
                alt=""
                width={"100%"}
              />
            </Col>
            <Col xs={12}>
              <img
                src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/10/638272844332160286_brand-banner-1.png"
                alt=""
                width={"100%"}
              />
            </Col>
            <Col xs={12}>
              {" "}
              <img
                src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/10/638272844332160286_brand-banner-2.png"
                alt=""
                width={"100%"}
              />
            </Col>
            <Col xs={12}>
              <img
                src="https://images.fpt.shop/unsafe/fit-in/262x324/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/10/638272844332160286_brand-banner-2.png"
                alt=""
                width={"100%"}
              />
            </Col>
          </Row>
        </div>
        <div className="bg-white mt-4 rounded">
          <div className="p-2 d-flex justify-content-between">
            <h4 className="fw-bold">ĐIỆN THOẠI NỔI BẬT</h4>
            <Link to={"/smartphone"} className="text-decoration-none">
              Xem tất cả
            </Link>
          </div>
          <Row xs={1} sm={2} lg={3} xl={4} className="p-2">
            {data?.map((e, i) => (
              <Col key={i} className="mt-3">
                <PhoneCard
                  smartphone={e}
                  image={findImg(e.smartphone_id)?.image_url}
                />
              </Col>
            ))}
          </Row>
        </div>

        <img
          className="w-100 mt-4 rounded"
          src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264471565749818_H5_1200x200.png"
          alt=""
        />
        <div className="bg-white mt-4 rounded">
          <div className="p-2 d-flex justify-content-between">
            <h4 className="fw-bold">LAPTOP</h4>
            <Link className="text-decoration-none">Xem tất cả</Link>
          </div>
          <Row xs={1} sm={2} lg={3} xl={4} className="p-2">
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
          </Row>
        </div>
        <img
          className="w-100 mt-4 rounded"
          src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/14/638276053160731790_H5-1200x200.png"
          alt=""
        />
        <div className="bg-white mt-4 rounded">
          <div className="p-2 d-flex justify-content-between">
            <h4 className="fw-bold">TABLET</h4>
            <Link className="text-decoration-none">Xem tất cả</Link>
          </div>
          <Row xs={1} sm={2} lg={3} xl={4} className="p-2">
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
            <Col className="mt-3">
              <PhoneCard />
            </Col>
          </Row>
        </div>
        <img
          className="w-100 mt-4 rounded"
          src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/14/638276289072398234_H5.png"
          alt=""
        />
        <div className="bg-white mt-4 rounded">
          <div className="p-2 d-flex justify-content-between">
            <h4 className="fw-bold">DỊCH VỤ TIỆN ÍCH</h4>
            <Link className="text-decoration-none">Xem tất cả</Link>
          </div>
          <Row xs={1} sm={2} lg={3} xl={4} className="p-2">
            <Col className="mt-3">
              <div
                className="d-flex gap-2 border rounded p-2 justify-content-between"
                style={{ background: "#f0fff4" }}
              >
                <img
                  src="https://fptshop.com.vn/Content/v5d/images/ic-water.png"
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
                <div>
                  <b>Thanh toán tiền nước</b>
                  <p className="mb-0">Thanh toán nhanh chóng, tiện lợi</p>
                </div>
              </div>
            </Col>
            <Col className="mt-3">
              <div
                className="d-flex gap-2 border rounded p-2 justify-content-between"
                style={{ background: "#fff7ad" }}
              >
                <img
                  src="https://fptshop.com.vn/Content/v5d/images/service-item2.png"
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
                <div>
                  <b>Thanh toán tiền điện</b>
                  <p className="mb-0">Thanh toán nhanh chóng, tiện lợi</p>
                </div>
              </div>
            </Col>
            <Col className="mt-3">
              <div
                className="d-flex gap-2 border rounded p-2 justify-content-between"
                style={{ background: "#daffff" }}
              >
                <img
                  src="https://fptshop.com.vn/Content/v5d/images/service-item3.png"
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
                <div>
                  <b>Thẻ cào điện thoại</b>
                  <p className="mb-0">Giảm 2% cho thẻ mệnh giá từ 100000đ</p>
                </div>
              </div>
            </Col>
            <Col className="mt-3">
              <div
                className="d-flex gap-2 border rounded p-2 justify-content-between"
                style={{ background: "#ffbfb9" }}
              >
                <img
                  src="https://fptshop.com.vn/Content/v5d/images/ic-credit-card.png"
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
                <div>
                  <b>Thẻ game</b>
                  <p className="mb-0">Giảm 2% cho thẻ mệnh giá từ 100000đ</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
