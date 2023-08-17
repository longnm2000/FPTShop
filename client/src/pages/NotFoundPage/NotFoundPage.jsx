import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2 className="text-center">Whoop! 404 Page Not Found</h2>
      <img
        src="https://fptshop.com.vn/Content/v4/error/images/logo.png"
        alt="404 Page Not Found"
        className="mx-auto d-block my-5"
      />
      <img
        src="https://fptshop.com.vn/Content/v4/error/images/bn.png"
        alt=""
        className="mx-auto d-block"
      />
      <h2 className="text-center my-5">
        RẤT TIẾC, TRANG BẠN TÌM KIẾM KHÔNG TỒN TẠI
      </h2>
      <Link to={"/"}>
        <Button className="d-block mx-auto mb-3">Quay về trang chủ</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
