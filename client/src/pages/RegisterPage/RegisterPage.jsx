import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./RegisterPage.css";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [toggleType, setToggleType] = useState("password");
  const handleChangeType = (e) => {
    e.preventDefault();
    setToggleType((prev) => (prev === "text" ? "password" : "text"));
  };
  return (
    <Container>
      <Form className="register-form mx-auto border p-4 login-form rounded my-5">
        <h3 className="text-center">Đăng ký</h3>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Label className="register-label">Mật khẩu</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type={toggleType}
            placeholder="Password"
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

        <Form.Group className="mb-3">
          <Form.Label className="register-label">Họ tên</Form.Label>
          <Form.Control type="email" placeholder="Họ tên" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Ngày sinh</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Giới tính </Form.Label>
          <br />
          <Form.Check
            inline
            label="Nam"
            name="gender"
            type={"radio"}
            value={0}
          />
          <Form.Check
            inline
            label="Nữ"
            name="gender"
            type={"radio"}
            value={1}
          />
          <Form.Check
            inline
            label="Khác"
            name="gender"
            type={"radio"}
            value={2}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Số điện thoại</Form.Label>
          <Form.Control type="email" placeholder="Số điện thoại" />
        </Form.Group>
        <p>
          <span className="register-label"></span> Bắt buộc
        </p>
        <Button className="w-100" variant="primary" type="submit">
          Đăng ký
        </Button>
        <p className="my-3 text-center">
          Đã có tài khoản? <Link to={"/login"}>Đăng nhập</Link>
        </p>
      </Form>
    </Container>
  );
}

export default RegisterPage;
