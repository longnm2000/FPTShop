import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity = newQuantity;
      setCartItems(updatedCartItems);

      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="bg-body-tertiary py-5">
      {cartItems?.length > 0 ? (
        <Container className="bg-white shadow-sm p-3 rounded">
          <p className="fw-bold">
            Có {cartItems.length} sản phẩm trong giỏ hàng
          </p>
          <hr />
          {cartItems.map((item, i) => (
            <Row xs={1} sm={3} md={4}>
              <Col className="d-flex justify-content-center align-items-center">
                <img src={item.image} alt="" width={"80px"} height={"auto"} />
              </Col>
              <Col>
                <p className="fw-bold">{item.name}</p>
                <p>
                  <span className="fw-bold">Màu sắc: </span>
                  {item.color}
                </p>

                <p>
                  <span className="fw-bold">Bộ nhớ: </span>
                  {item.storage} GB
                </p>
              </Col>
              <Col>
                <div className="d-flex ">
                  <Button
                    variant="secondary"
                    className="rounded-0"
                    disabled={item.quantity === 1}
                    onClick={() => handleQuantityChange(i, item.quantity - 1)}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </Button>
                  <input
                    type="number"
                    className="form-control rounded-0"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(i, parseInt(e.target.value))
                    }
                  />
                  <Button
                    variant="secondary"
                    className="rounded-0"
                    onClick={() => handleQuantityChange(i, item.quantity + 1)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </Button>
                </div>
                <Button
                  className="d-block mx-auto mt-3"
                  variant="danger"
                  onClick={() => handleRemoveItem(i)}
                >
                  <i className="fa-solid fa-trash"></i> Xóa
                </Button>
              </Col>
              <Col>
                <div className="mt-4 d-flex justify-content-between flex-wrap fw-bold">
                  <span>Giá bán: </span>
                  <span className="text-danger">
                    {item.quantity * item.price} đ
                  </span>
                </div>
              </Col>
            </Row>
          ))}

          <hr />

          <Row xs={1} md={2}>
            <Col>
              {/* <p className="fw-bold">Mã giảm giá</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-danger"
                type="button"
                id="button-addon2"
              >
                Áp dụng
              </button>
            </div> */}
            </Col>
            <Col>
              <div className="fw-bold">
                <div className="d-flex justify-content-between">
                  <span>Tổng tiền: </span>
                  <span>{getTotalPrice} Đ</span>
                </div>
              </div>
            </Col>
          </Row>
          <div className="mb-3">
            <label className="form-label fw-bold">Địa chỉ</label>
            <input type="text" className="form-control" />
          </div>
          <Link to={"/"}>
            <Button variant="danger" className="d-block mx-auto">
              Hoàn tất đặt hàng
            </Button>
          </Link>
        </Container>
      ) : (
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
      )}
    </div>
  );
}

export default CartPage;
