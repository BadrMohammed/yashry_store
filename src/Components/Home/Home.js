import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Header from "../../ReusableCompnents/Header";
import Categories from "../Categories/Categories";
import Products from "../Products/Products";
class Home extends Component {
  render() {
    return (
      <div className="page_container">
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Header />
          </Col>
        </Row>
        <h1 className="text-center mt-3 black_color">Our e-commerce store</h1>
        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Categories />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Products />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
