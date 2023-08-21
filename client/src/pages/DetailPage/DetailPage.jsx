import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link, useNavigate, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import Swal from "sweetalert2";

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [images, setImage] = useState(null);
  const [colStoQuaPri, setColStoQuaPri] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const fetchImages = async () => {
    await axios
      .get(`http://localhost:8000/api/v1/smartphones/images/${id}`)
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  };
  const fetchColStoQuaPri = async () => {
    await axios
      .get(`http://localhost:8000/api/v1/smartphones/ColStoQuaPri/${id}`)
      .then((res) => setColStoQuaPri(res.data))
      .catch((err) => console.log(err));
  };
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8000/api/v1/smartphones/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
    fetchImages();
    fetchColStoQuaPri();
  }, []);
  if (data?.message === "User not found") {
    navigate("/*");
  }
  const handleToggleDescription = () => {
    setShowFullDescription((prevValue) => !prevValue);
  };
  const uniqueColors = [];
  colStoQuaPri?.forEach((item) => {
    const existingColor = uniqueColors.find(
      (color) => color.color_id === item.color_id
    );
    if (!existingColor) {
      uniqueColors.push({
        color_id: item.color_id,
        color_name: item.color_name,
      });
    }
  });

  const uniqueStorage = [];
  colStoQuaPri?.forEach((item) => {
    const existingStorage = uniqueStorage.find(
      (storage) => storage.storage_id === item.storage_id
    );
    if (!existingStorage) {
      uniqueStorage.push({
        storage_id: item.storage_id,
        storage_capacity: item.storage_capacity,
      });
    }
  });

  const updateSelectedPrice = (updatedOption) => {
    if (updatedOption && colStoQuaPri) {
      const matchingOption = colStoQuaPri.find(
        (option) =>
          option.color_id === updatedOption.color_id &&
          option.storage_id === updatedOption.storage_id
      );

      if (matchingOption) {
        return {
          ...updatedOption,
          price: matchingOption.price,
        };
      }
    }
    return updatedOption;
  };

  const handleColorChange = (color_id, color_name) => {
    const updatedOption = {
      ...selectedOption,
      color_id: color_id,
      color_name: color_name,
    };
    setSelectedOption(updatedOption);
    const updatedOptionWithPrice = updateSelectedPrice(updatedOption);
    setSelectedOption(updatedOptionWithPrice);
  };

  const handleStorageChange = (storage_id, storage_capacity) => {
    const updatedOption = {
      ...selectedOption,
      storage_id: storage_id,
      storage_capacity: storage_capacity,
    };
    setSelectedOption(updatedOption);
    const updatedOptionWithPrice = updateSelectedPrice(updatedOption);
    setSelectedOption(updatedOptionWithPrice);
  };

  // Hàm để thêm sản phẩm đã chọn vào giỏ hàng
  const handleAddToCart = () => {
    if (
      selectedOption &&
      selectedOption.color_id &&
      selectedOption.storage_id
    ) {
      if (localStorage.getItem("token")) {
        const cartItem = {
          id: +id,
          name: data.smartphone_name,
          color_id: selectedOption.color_id,
          color: selectedOption.color_name,
          storage_id: selectedOption.storage_id,
          storage: selectedOption.storage_capacity,
          price: selectedOption.price,
          image: images[0]?.image_url,
        };
        console.log(cartItem);

        // Lấy danh sách sản phẩm trong giỏ hàng từ local storage
        const existingCartItems =
          JSON.parse(localStorage.getItem("cartItems")) || [];

        // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
        const itemIndex = existingCartItems.findIndex(
          (item) =>
            item.id === cartItem.id &&
            item.color_id === cartItem.color_id &&
            item.storage_id === cartItem.storage_id
        );

        if (itemIndex !== -1) {
          // Cập nhật số lượng nếu sản phẩm đã tồn tại trong giỏ hàng
          existingCartItems[itemIndex].quantity += 1;
        } else {
          // Thêm sản phẩm vào giỏ hàng nếu chưa tồn tại
          cartItem.quantity = 1;
          existingCartItems.push(cartItem);
        }

        // Lưu danh sách sản phẩm đã cập nhật vào local storage
        localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
        Swal.fire({
          icon: "success",
          title: "Sản phẩm đã được thêm vào giỏ hàng",
          timer: "1000",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Bạn phải đăng nhập để thêm sản phẩm vào giỏ hàng",
          timer: 1000,
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Bạn phải lựa chọn màu và bộ nhớ",
        timer: "1000",
      });
    }
  };

  return (
    <div>
      <Container>
        <Breadcrumb className="pt-3">
          <Link className="breadcrumb-item" to={"/"}>
            Trang chủ
          </Link>
          <Link className="breadcrumb-item" to={"/smartphone"}>
            Điện thoại
          </Link>
          <Link className="breadcrumb-item active" to={"/smartphone"}>
            Điện thoại
          </Link>
        </Breadcrumb>
        <h3>{data?.smartphone_name}</h3>
        <Row>
          <Col>
            <Carousel>
              {images?.map((e, i) => (
                <Carousel.Item key={i}>
                  <img src={e?.image_url} alt="" width={"100%"} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col>
            <p>Chọn màu sắc</p>
            <div className="d-flex gap-2">
              {uniqueColors?.map((e, i) => (
                <button
                  key={i}
                  className={`btn ${
                    selectedOption?.color_id === e.color_id
                      ? "btn-primary"
                      : "btn-light"
                  }`}
                  onClick={() => handleColorChange(e.color_id, e.color_name)}
                >
                  {e.color_name}
                </button>
              ))}
            </div>

            <p>Chọn bộ nhớ</p>
            <div className="d-flex gap-2">
              {uniqueStorage?.map((e, i) => (
                <button
                  key={i}
                  className={`btn ${
                    selectedOption?.storage_id === e.storage_id
                      ? "btn-primary"
                      : "btn-light"
                  }`}
                  onClick={() =>
                    handleStorageChange(e.storage_id, e.storage_capacity)
                  }
                >
                  {e.storage_capacity} GB
                </button>
              ))}
            </div>
            <div>
              <button
                className="btn text-bg-danger w-100 fs-3 mt-3"
                onClick={handleAddToCart}
              >
                Thêm vào giỏ hàng -{" "}
                {selectedOption?.price ? selectedOption.price : 0}₫
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            {showFullDescription ? (
              <p>{data?.description}</p>
            ) : (
              <p>{data?.description?.slice(0, 1500)}...</p>
            )}
            <Button
              className="d-block mx-auto"
              variant="primary"
              onClick={handleToggleDescription}
            >
              {showFullDescription ? "Thu gọn" : "Xem thêm"}
            </Button>
          </Col>
          <Col>
            <div>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <th>Màn hình</th>
                    <td>{data?.screen_info}</td>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <td>{data?.main_camera_info}</td>
                  </tr>
                  <tr>
                    <th>Camera selfie</th>
                    <td>{data?.selfie_camera_info}</td>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <td>{data?.ram_info}</td>
                  </tr>
                  <tr>
                    <th>Bộ nhớ trong</th>
                    <td>{}</td>
                  </tr>
                  <tr>
                    <th>CPU</th>
                    <td>{data?.chipset_info}</td>
                  </tr>
                  <tr>
                    <th>Dung lượng pin</th>
                    <td>{data?.battery_info}</td>
                  </tr>
                  <tr>
                    <th>Thẻ sim</th>
                    <td>{data?.sim_info}</td>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <td>{data?.os_info}</td>
                  </tr>
                  <tr>
                    <th>Thời gian ra mắt</th>
                    <td>{data?.release_date}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DetailPage;
