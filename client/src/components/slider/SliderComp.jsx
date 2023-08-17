import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/slide1.webp";
import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";
import slide4 from "../../assets/images/slide4.webp";
import slide5 from "../../assets/images/slide5.webp";
import slide6 from "../../assets/images/slide6.webp";
import "./SliderComp.css";

function SliderComp() {
  let settings = {
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  return (
    <div className="bg-light">
      <Slider asNavFor={nav2} ref={slider1}>
        <div>
          <img src={slide1} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide2} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide3} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide4} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide5} alt="" className="w-100" />
        </div>
        <div>
          <img src={slide6} alt="" className="w-100" />
        </div>
      </Slider>

      <Slider
        {...settings}
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={5}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={false}
        className="l-slider"
      >
        <div className="p-2">
          <h5 className="text-center m-0">Realme C55 chỉ từ 3.890.000đ</h5>
        </div>
        <div className="p-2">
          <h5 className="text-center m-0">Z Fold5 | Z Flip5 giảm 5 triệu</h5>
        </div>
        <div className="p-2">
          <h5 className="text-center m-0">
            iPhone 14 Pro Max giảm đến 5.5 triệu
          </h5>
        </div>
        <div className="p-2">
          <h5 className="text-center m-0">Xiaomi Google TV từ 3.990.000đ</h5>
        </div>
        <div className="p-2">
          <h5 className="text-center m-0">Sắm Robot hút bụi Ecovacs ngay</h5>
        </div>
        <div className="p-2">
          <h5 className="text-center m-0">Redmi Note 12 giá sốc 3.890.000đ</h5>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp;
