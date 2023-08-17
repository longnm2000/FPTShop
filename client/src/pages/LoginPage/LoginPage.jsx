import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./LoginPage.css";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

function LoginPage() {
  const [toggleType, setToggleType] = useState("password");
  const handleChangeType = (e) => {
    e.preventDefault();
    setToggleType((prev) => (prev === "text" ? "password" : "text"));
  };
  return (
    <Container>
      <Form className="mx-auto border p-4 login-form rounded my-5">
        <h3 className="text-center">Đăng Nhập</h3>
        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Email" autoFocus />
        </Form.Group>
        <Form.Label>Mật khẩu</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type={toggleType}
            placeholder="Mật khẩu"
            className="pe-5"
          />
          <Button
            onClick={handleChangeType}
            variant="outline-secondary"
            id="button-addon2"
          >
            {toggleType === "text" ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i class="fa-solid fa-eye-slash"></i>
            )}
          </Button>
        </InputGroup>

        <Button variant="primary" type="submit" className="w-100">
          Đăng nhập
        </Button>
        <p className="my-3 text-center">
          Chưa có tài khoản? <Link to={"/register"}>Đăng ký</Link>
        </p>
        <p className="text-center my-3 fw-bold fs-5">Hoặc đăng nhập với</p>
        <div className="d-flex justify-content-center gap-2">
          <Button variant="dark w-50">
            <i className="fab fa-google"></i> Google
          </Button>
          <Button variant="dark w-50">
            <i className="fab fa-facebook-f" style={{ color: "#fff" }}></i>{" "}
            Facebook
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default LoginPage;
