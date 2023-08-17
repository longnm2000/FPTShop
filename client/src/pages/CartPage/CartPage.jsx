import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div className="bg-body-tertiary py-5">
      <Container className="bg-white shadow-sm p-3 rounded">
        <p>Có sản phẩm trong giỏ hàng</p>
        <hr />

        <Row xs={1} sm={3} md={4}>
          <Col className="d-flex justify-content-center align-items-center">
            <img
              src="https://fptshop.com.vn/Uploads/Originals/2023/6/15/638224268892250444_honor-x8-xanh-5.jpg"
              alt=""
              width={"80px"}
              height={"auto"}
            />
          </Col>
          <Col>
            <p className="fw-bold">Honor X8A 8BG-128GB</p>
            <p>
              <span className="fw-bold">Màu sắc: </span>Xanh
            </p>
            <p>
              <span className="fw-bold">RAM: </span>8gb
            </p>
            <p>
              <span className="fw-bold">Bộ nhớ: </span>128gb
            </p>
          </Col>
          <Col>
            <div className="d-flex ">
              <Button variant="secondary" className="rounded-0">
                <i className="fa-solid fa-minus"></i>
              </Button>
              <input
                type="number"
                className="form-control rounded-0"
                defaultValue={1}
                readOnly
              />
              <Button variant="secondary" className="rounded-0">
                <i className="fa-solid fa-plus"></i>
              </Button>
            </div>
            <Button className="d-block mx-auto mt-3" variant="danger">
              <i className="fa-solid fa-trash"></i> Xóa
            </Button>
          </Col>
          <Col>
            <div className="mt-4 d-flex justify-content-between flex-wrap fw-bold">
              <span>Giá bán: </span>
              <span className="text-danger">1800000 đ</span>
            </div>
          </Col>
        </Row>
        <hr />

        <Row xs={1} md={2}>
          <Col>
            <p className="fw-bold">Mã giảm giá</p>
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button class="btn btn-danger" type="button" id="button-addon2">
                Áp dụng
              </button>
            </div>
          </Col>
          <Col>
            <div className="fw-bold">
              <div className="d-flex justify-content-between">
                <span>Tổng tiền: </span>
                <span>4900000đ</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Cần thanh toán: </span>
                <span className="text-danger">4900000đ</span>
              </div>
            </div>
          </Col>
        </Row>
        <div class="mb-3">
          <label class="form-label fw-bold">Địa chỉ</label>
          <input type="text" className="form-control" />
        </div>
        <Link to={"/"}>
          <Button variant="danger" className="d-block mx-auto">
            Hoàn tất đặt hàng
          </Button>
        </Link>
      </Container>
      <div className="d-flex flex-column align-items-center my-5">
        <img
          src="https://fptshop.com.vn/cart/Content/Desktop/images/empty-cart.png"
          alt=""
        />
        <p>Không có sản phẩm trong giỏ hàng</p>
        <Link to={"/"}>
          <Button variant="danger">Trang chủ</Button>
        </Link>
      </div>
    </div>
  );
}

export default CartPage;
