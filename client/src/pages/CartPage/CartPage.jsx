import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Swal from "sweetalert2";
import numeral from "numeral";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const schema = yup.object().shape({
  shippingAddress: yup.string().required("Địa chỉ giao hàng không được trống"),
});
function CartPage() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  let decoded = null;
  if (localStorage.getItem("token")) {
    decoded = jwtDecode(localStorage.getItem("token"));
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  const getTotalPrice = cartItems.reduce((total, item) => {
    if (decoded?.data.id === item.userId) {
      return total + item.quantity * item.price;
    }
    return total;
  }, 0);

  const handlePlaceOrder = (data) => {
    if (decoded !== null) {
      const orderDetailsArray = cartItems.filter(
        (item) => decoded?.data.id === item.userId
      );
      axios(`http://localhost:8000/api/v1/users/${decoded.data.id}`)
        .then((res) => {
          if (res.data.is_login === 1) {
            const orderDateTime = new Date();
            axios
              .post("http://localhost:8000/api/v1/orders/create-order", {
                userId: decoded?.data.id,
                totalAmount: getTotalPrice,
                shippingAddress: data.shippingAddress,
                orderTime: orderDateTime,
                orderStatus: 0,
                orderDetails: orderDetailsArray,
              })
              .then((response) => {
                if (response.status === 200) {
                  console.log("Đặt hàng thành công!");
                  Swal.fire({
                    icon: "success",
                    title: "Bạn đã đặt hàng thành công",
                    timer: 2000,
                  });
                  const updatedCartItems = cartItems.filter(
                    (item) => item.userId !== decoded?.data.id
                  );
                  localStorage.setItem(
                    "cartItems",
                    JSON.stringify(updatedCartItems)
                  );
                  setCartItems(updatedCartItems);
                }
              })
              .catch((error) => {
                console.error("Error placing order:", error);
              });
          } else {
            Swal.fire({
              icon: "error",
              title: "Tài khoản của bạn đã bị khóa",
              timer: 2000,
            });
          }
        })
        .catch((error) => console.log(error));
    } else {
      Swal.fire({
        icon: "error",
        timer: 2000,
        title: "Bạn phải đăng nhập!",
      }).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <>
      <Header />
      <div className="bg-body-tertiary py-5">
        {cartItems.filter((e) => e.userId === decoded?.data.id).length > 0 &&
        decoded !== null ? (
          <Container className="bg-white shadow-sm p-3 rounded">
            <p className="fw-bold">
              Có {cartItems.filter((e) => e.userId === decoded?.data.id).length}{" "}
              sản phẩm trong giỏ hàng
            </p>
            <hr />
            {cartItems.map((item, i) => {
              if (decoded?.data.id === item.userId)
                return (
                  <Row key={i} xs={1} sm={3} md={4}>
                    <Col className="d-flex justify-content-center align-items-center">
                      <img
                        src={item.image}
                        alt=""
                        width={"80px"}
                        height={"auto"}
                      />
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
                          onClick={() =>
                            handleQuantityChange(i, item.quantity - 1)
                          }
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
                          onClick={() =>
                            handleQuantityChange(i, item.quantity + 1)
                          }
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
                          {numeral(item.quantity * item.price).format("0, ")} đ
                        </span>
                      </div>
                    </Col>
                  </Row>
                );
            })}

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
            <form onSubmit={handleSubmit(handlePlaceOrder)}>
              <div className="mb-3">
                <label className="form-label fw-bold">Địa chỉ</label>
                <Controller
                  name="shippingAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input type="text" className="form-control" {...field} />
                  )}
                />
                {errors.shippingAddress && (
                  <span className="text-danger">
                    {errors.shippingAddress.message}
                  </span>
                )}
              </div>
              <Button
                variant="danger"
                className="d-block mx-auto"
                type="submit"
              >
                Hoàn tất đặt hàng
              </Button>
            </form>
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
      <Footer />
    </>
  );
}

export default CartPage;
