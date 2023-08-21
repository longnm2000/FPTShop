import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./RegisterPage.css";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email không được để trống")
    .email("Email không hợp lệ")
    .test("valid-domain", "Email không hợp lệ", (value) => {
      if (!value) return true;
      const parts = value.split("@");
      const domainPart = parts[1];
      if (!domainPart) return true;

      const domainParts = domainPart.split(".");
      return domainParts.length <= 3; // Chỉ cho phép tối đa 3 phần sau @
    })
    .max(100, "Email không dài quá 100 ký tự"),
  password: yup
    .string()
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/,
      "Mật khẩu phải chứa ít nhất một chữ hoa, một chữ thường, một số và một ký tự đặc biệt không quá 100 ký tự"
    )
    .required("Vui lòng nhập mật khẩu"),
  name: yup.string().required("Vui lòng nhập họ tên"),
  birthday: yup
    .date()
    .nullable() // Cho phép giá trị rỗng (null)
    .transform((currentValue, originalValue) => {
      if (originalValue === "") {
        return null;
      }
      return currentValue;
    })
    .required("Vui lòng chọn ngày sinh"),
  gender: yup.string().required("Vui lòng chọn giới tính"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Số điện thoại phải có 10 chữ số")
    .required("Vui lòng nhập số điện thoại"),
});

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [toggleType, setToggleType] = useState("password");
  const handleChangeType = (e) => {
    e.preventDefault();
    setToggleType((prev) => (prev === "text" ? "password" : "text"));
  };

  const onSubmit = (data) => {
    console.log(data); // You can handle the form data here

    try {
      axios
        .post("http://localhost:8000/api/v1/auth/signup", data)
        .then((res) => {
          if (res.status === 201) {
            Swal.fire({
              icon: "success",
              title: "Đăng nhập thành công!",
              text: "Tự động chuyển về trang chủ",
              timer: 1000,
            }).then(navigate("/"));
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="register-form mx-auto border p-4 login-form rounded my-5"
      >
        <h3 className="text-center">Đăng ký</h3>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Nhập email"
            {...register("email")}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Label className="register-label">Mật khẩu</Form.Label>
        <InputGroup>
          <Form.Control
            type={toggleType}
            placeholder="Mật khẩu"
            className="pe-5"
            {...register("password")}
          />
          <Button
            onClick={handleChangeType}
            variant="outline-secondary"
            id="button-addon2"
          >
            {toggleType === "text" ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </Button>
        </InputGroup>
        {errors.password && (
          <Form.Text className="text-danger">
            {errors.password.message}
          </Form.Text>
        )}

        <Form.Group className="my-3">
          <Form.Label className="register-label">Họ tên</Form.Label>
          <Form.Control
            type="text"
            placeholder="Họ tên"
            {...register("name")}
          />
          {errors.name && (
            <Form.Text className="text-danger">{errors.name.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Ngày sinh</Form.Label>
          <Form.Control type="date" {...register("birthday")} />
          {errors.birthday && (
            <Form.Text className="text-danger">
              {errors.birthday.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Giới tính</Form.Label>
          <br />
          <Form.Check
            inline
            label="Nam"
            name="gender"
            type="radio"
            value="0"
            {...register("gender")}
          />
          <Form.Check
            inline
            label="Nữ"
            name="gender"
            type="radio"
            value="1"
            {...register("gender")}
          />
          <Form.Check
            inline
            label="Khác"
            name="gender"
            type="radio"
            value="2"
            {...register("gender")}
          />
          {errors.gender && (
            <Form.Text className="text-danger">
              {errors.gender.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="register-label">Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            placeholder="Số điện thoại"
            {...register("phone")}
          />
          {errors.phone && (
            <Form.Text className="text-danger">
              {errors.phone.message}
            </Form.Text>
          )}
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
