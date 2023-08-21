import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import axios from "axios";
import "./SmartphonePage.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

function SmartphonePage() {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(null);
  const fetchImages = async () => {
    await axios
      .get(`http://localhost:8000/api/v1/smartphones/all-images/`)
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  };
  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/v1/smartphones`)
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
    fetchImages();
  }, []);

  useEffect(() => {
    let filtered = data;
    if (selectedBrands.length > 0) {
      filtered = data.filter((item) =>
        selectedBrands.includes(item.brand_name)
      );
    }

    if (sortByPrice === "asc") {
      filtered.sort((a, b) => a.lowest_price - b.lowest_price);
    } else if (sortByPrice === "desc") {
      filtered.sort((a, b) => b.lowest_price - a.lowest_price);
    }

    setFilteredData(filtered);
  }, [selectedBrands, sortByPrice, data]);

  const handleBrandCheckboxChange = (event) => {
    const brandName = event.target.value;
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };
  const findImg = (product) => {
    if (images) {
      const findImage = images.find((e) => e.smartphone_id === product);
      console.log(findImage);
      return findImage;
    }
  };
  return (
    <div className="smartphone-page">
      <Container>
        <Breadcrumb className="pt-3">
          <Link className="breadcrumb-item" to={"/"}>
            Trang chủ
          </Link>
          <Link className="breadcrumb-item active" to={"/smartphone"}>
            Điện thoại
          </Link>
        </Breadcrumb>
        <Row className="pt-2 pb-3">
          <Col sm={3} className="filter-col">
            <div className="position-sticky fixed-top mb-3">
              <Card className="filter-card border-0">
                <Card.Body>
                  <h5 className="card-title filter-header">
                    Nhãn hiệu điện thoại
                  </h5>
                  <Form>
                    <div className="mb-3">
                      {data?.map((item, i) => (
                        <Form.Check
                          key={i}
                          label={item.brand_name}
                          value={item.brand_name}
                          type="checkbox"
                          className="mb-2"
                          onChange={handleBrandCheckboxChange}
                        />
                      ))}
                    </div>
                  </Form>
                </Card.Body>
              </Card>
              <Card className="filter-card border-0">
                <Card.Body>
                  <h5 className="card-title filter-header">Sắp xếp theo giá</h5>
                  <Form>
                    <div className="mb-3">
                      <Form.Check
                        label="Giá tăng dần"
                        type="radio"
                        name="sortPrice"
                        value="asc"
                        className="mb-2"
                        onChange={(e) => setSortByPrice(e.target.value)}
                      />
                      <Form.Check
                        label="Giá giảm dần"
                        type="radio"
                        name="sortPrice"
                        value="desc"
                        className="mb-2"
                        onChange={(e) => setSortByPrice(e.target.value)}
                      />
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>

          <Col sm={9}>
            <Card className="fw-bold fs-3 mb-4">
              <Card.Body>
                <Card.Text>
                  Điện thoại {`(${filteredData.length} sản phẩm)`}
                </Card.Text>
              </Card.Body>
            </Card>
            <Row xs={1} sm={2} lg={3}>
              {filteredData?.map((item, i) => (
                <Col key={i} className="mb-3">
                  <PhoneCard
                    smartphone={item}
                    image={findImg(item.smartphone_id)?.image_url}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SmartphonePage;
