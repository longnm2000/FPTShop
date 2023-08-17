import React from "react";
import logo from "../../assets/images/logo-mb.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";

import { Link, NavLink } from "react-router-dom";

function Header() {
  let expand = "xl";
  return (
    <Navbar key={expand} expand={expand} className="header">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} title="Trang chủ">
            <img src={logo} width={"150px"} alt="Trang chủ" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className="ms-5 bg-danger"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="d-flex my-auto">
              <Form.Control
                type="search"
                placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm"
                className="rounded-0"
                aria-label="Search"
              />
              <Button variant="dark" className="rounded-0">
                <i
                  className="fa-solid fa-magnifying-glass px-3"
                  style={{ color: "#ffffff" }}
                ></i>
              </Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <NavLink to={"/"} className="nav-link">
                <div className="d-flex gap-1 flex-xl-column justify-content-center align-items-center">
                  <i
                    className="fa-regular fa-file-lines"
                    style={{ color: "#ffffff" }}
                  ></i>
                  <span className="m-0 text-white">Thông tin hay</span>
                </div>
              </NavLink>
              <NavLink to={"/"} className="nav-link">
                <div className="d-flex gap-1 flex-xl-column justify-content-center align-items-center">
                  <i
                    class="fa-solid fa-file-invoice-dollar"
                    style={{ color: "#ffffff" }}
                  ></i>
                  <span className="m-0 text-white">Thanh toán & tiện ích</span>
                </div>
              </NavLink>
              <NavLink to={"/cart"} className="nav-link">
                <div className="d-flex gap-1 flex-xl-column justify-content-center align-items-center">
                  <i
                    class="fa-solid fa-cart-shopping"
                    style={{ color: "#ffffff" }}
                  ></i>
                  <span className="m-0 text-white">Giỏ hàng</span>
                </div>
              </NavLink>

              <NavLink to={"/login"} className="nav-link">
                <div className="d-flex gap-1 flex-xl-column justify-content-center align-items-center">
                  <i class="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
                  <span className="m-0 text-white">Tài khoản</span>
                </div>
              </NavLink>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
