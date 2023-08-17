import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
function Footer() {
  return (
    <div className="pt-3">
      <Container className="mb-3">
        <Row xs={1} sm={2} md={3} lg={5}>
          <Col>
            <ul className="mb-0 ps-0">
              <li>
                <a target="_blank" href="http://frt.vn/" rel="noreferrer">
                  Giới thiệu về công ty
                </a>
              </li>
              <li>
                <a href="/" title="">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="/" title="">
                  Quy chế hoạt động
                </a>
              </li>
              <li>
                <a href="/" title="Kiểm tra">
                  Kiểm tra hóa đơn điện tử
                </a>
              </li>
              <li>
                <a href="/" title="">
                  Tra cứu thông tin bảo hành
                </a>
              </li>
              <li>
                <a
                  href="//fptshop.com.vn/ho-tro/cau-hoi-thuong-gap"
                  title="Câu hỏi thường gặp mua hàng"
                >
                  Câu hỏi thường gặp mua hàng
                </a>
              </li>
            </ul>
            <div className="d-flex mt-3 gap-2">
              <div className="">
                <img
                  className="cth1"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img1.png"
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <div className="">
                <img
                  className="cth2"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img2.png"
                  alt=""
                  height={"40px"}
                />
              </div>
            </div>
          </Col>
          <Col>
            <ul className="mb-0 ps-0">
              <li>
                <a href="https://tuyendung.frt.vn/">Tin tuyển dụng</a>
              </li>
              <li>
                <a href="//fptshop.com.vn/tin-tuc/Tin-khuyen-mai" title="">
                  Tin khuyến mãi
                </a>
              </li>
              <li>
                <a href="//fptshop.com.vn/ho-tro/huong-dan-mua-hang" title="">
                  Hướng dẫn mua online
                </a>
              </li>
              <li>
                <a href="//fptshop.com.vn/tra-gop" title="">
                  Hướng dẫn mua trả góp
                </a>
              </li>
              <li>
                <a
                  href="https://fptshop.com.vn/ho-tro/chinh-sach-tra-gop"
                  title=""
                >
                  Chính sách trả góp
                </a>
              </li>
            </ul>
            <p className="fw-bold">Chứng nhận:</p>
            <div className="d-flex gap-2 flex-column">
              <div>
                <img
                  className="dmca"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img3.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="dv"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img5.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="thvn"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img4.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col>
            <ul className="mb-0 ps-0">
              <li>
                <a href="//fptshop.com.vn/cua-hang">Hệ thống cửa hàng</a>
              </li>
              <li>
                <a
                  href="https://fptshop.com.vn/ho-tro/chinh-sach-doi-san-pham"
                  title=""
                >
                  Chính sách đổi trả
                </a>
              </li>
              <li>
                <a href="//fptshop.com.vn/ho-tro/chinh-sach-bao-hanh" title="">
                  Hệ thống bảo hành
                </a>
              </li>
              <li>
                <a
                  href="//fptshop.com.vn/ho-tro/gioi-thieu-may-doi-tra"
                  title=""
                >
                  Giới thiệu máy đổi trả
                </a>
              </li>
            </ul>
          </Col>
          <Col>
            <ul className="mb-0 ps-0">
              <li>
                <p className="fs-ftrtit">Tư vấn mua hàng (Miễn phí)</p>
                <a href="tel:18006601" title="">
                  1800 6601<span>(Nhánh 1)</span>
                </a>
              </li>
              <li className="desktop-only">
                <p className="fs-ftrtit">Hỗ trợ kỹ thuật</p>
                <a href="tel:18006601" title="">
                  1800 6601 <span>(Nhánh 2)</span>
                </a>
              </li>
              <li>
                <p className="fs-ftrtit">Góp ý, khiếu nại (8h00 - 22h00)</p>
                <a href="tel:18006616" title="">
                  1800 6616
                </a>
              </li>
            </ul>
            <div className="fs-ftr1">
              <p className="fs-ftrtit">Hỗ trợ thanh toán:</p>
            </div>
            <div className="d-flex gap-1 flex-wrap ">
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img6.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img7.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img8.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-imgamex.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img9.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img11.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img12.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img10.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img15.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img13.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/ft-img14.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="ft-pay"
                  src="https://fptshop.com.vn/Content/v4/images/alepay.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="mb-4 ps-0">
              <p className="m-0">Kết nối với chúng tôi:</p>
              <a href="https://www.facebook.com/FPTShopOnline" className="me-2">
                <img
                  src="https://fptshop.com.vn/Content/v4/images/icon-facebook.png"
                  alt=""
                  width={"24px"}
                  height={"24px"}
                />
              </a>
              <a href="https://zalo.me/2659487666103055748">
                <img
                  src="https://fptshop.com.vn/Content/v4/images/icon-zalo.png"
                  alt=""
                  width={"24px"}
                  height={"24px"}
                />
              </a>
            </div>
            <div className="fs-ftr3">
              <p className="fw-bold m-0">Website cùng FPT Retail:</p>
              <p className="mt-2">Cửa hàng uỷ quyền bởi Apple:</p>
              <a
                rel="nofollow noopener"
                className="fs-ftr-fstudio"
                href="https://fstudiobyfpt.com.vn"
              >
                <div className="ft-item">
                  <img
                    className="w-100"
                    src="https://fptshop.com.vn/Content/v4/images/ft-img16.png"
                    alt=""
                  />
                </div>
              </a>
              <p className="mt-3">Trung tâm bảo hành uỷ quyền Apple:</p>
              <a
                rel="nofollow noopener"
                className="fs-ftr-fcare"
                href="https://fstudiobyfpt.com.vn/fcare"
              >
                <div className="ft-item">
                  <img
                    className="w-100"
                    src="https://fptshop.com.vn/Content/v4/images/ft-img17.png"
                    alt=""
                  />
                </div>
              </a>
              <p className="mt-3">Chuỗi nhà thuốc:</p>
              <a rel="nofollow noopener" href="https://nhathuoclongchau.com.vn">
                <div className="ft-item">
                  <img
                    className="w-100"
                    src="https://fptshop.com.vn/Content/v4/images/ft-img18.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-body-secondary">
        <Container>
          <div className="py-2">
            <p className="mb-0 text-center fs-6">
              © 2007 - 2023 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ:
              261 - 263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số
              0311609355 do Sở KHĐT TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT
              do sở TTTT TP HCM cấp ngày 02/07/2018. Điện thoại:{" "}
              <a href="/">(028) 7302 3456</a>. Email:
              <a href="/">fptshop@fpt.com.vn</a>. Chịu trách nhiệm nội dung:
              Nguyễn Trịnh Nhật Linh.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
