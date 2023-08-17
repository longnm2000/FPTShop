import React from "react";
import Card from "react-bootstrap/Card";

function PhoneCard() {
  return (
    <Card>
      <Card.Img
        className="mt-3"
        variant="top"
        src="https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264986102941277_oppo-reno10-5g-dd-moi.jpg"
      />
      <Card.Body>
        <Card.Title>OPPO Reno10 5G 256GB</Card.Title>
        <p>10.990.000 đ</p>
        <Card.Text>
          <p>
            <i className="fa-solid fa-microchip"></i> MediaTek Dimensity 7050 5G
          </p>
          <p>
            <i class="fa-solid fa-memory"></i> 8GB
          </p>
          <p>
            <i class="fa-solid fa-mobile-screen"></i> 6.7 inch
          </p>
          <p>
            <i class="fa-solid fa-floppy-disk"></i> 256 GB
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PhoneCard;
