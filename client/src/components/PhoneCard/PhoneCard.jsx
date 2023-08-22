import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import numeral from "numeral";

function PhoneCard({ smartphone, image }) {
  return (
    <Link to={`/smartphone/${smartphone?.smartphone_id}`}>
      <Card className="h-100">
        <Card.Img
          className="mt-3"
          variant="top"
          src={
            image ||
            "https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264986102941277_oppo-reno10-5g-dd-moi.jpg"
          }
        />
        <Card.Body>
          <Card.Title>{smartphone?.smartphone_name}</Card.Title>
          <p className="text-danger fw-bold">
            {numeral(smartphone?.lowest_price).format("0,")} đ
          </p>
          <div>
            <p>
              <i className="fa-solid fa-microchip"></i>{" "}
              {smartphone?.chipset_info}
            </p>
            <p>
              <i className="fa-solid fa-memory"></i> {smartphone?.ram_info} GB
            </p>
            <p>
              <i className="fa-solid fa-mobile-screen"></i>{" "}
              {smartphone?.screen_info}
            </p>
            <p>
              <i className="fa-solid fa-floppy-disk"></i>{" "}
              {smartphone?.lowest_storage} GB
            </p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default PhoneCard;
