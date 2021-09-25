import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/index";
import PaginationItem from "../../ReusableCompnents/PaginationItem";
import { divideArrayToPages } from "../../ReusableCompnents/GeneralFunctions";
import Loader from "../../ReusableCompnents/Loader";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  renderProducts = () => {
    const { data, general } = this.props;
    if (data.items !== null) {
      if (data.items.length > 0 && data.filters.categoryId !== null) {
        let filterByCategory = data.items.filter(
          (cat) => cat.categoryId === data.filters.categoryId
        );

        if (data.filters.ratings.length > 0) {
          filterByCategory = filterByCategory.filter((f) =>
            data.filters.ratings.find((r) => r === f.rating)
          );
        }

        if (data.filters.price[0] !== 0 || data.filters.price[1] !== 0) {
          filterByCategory = filterByCategory.filter(
            (f) =>
              f.price >= data.filters.price[0] &&
              f.price <= data.filters.price[1]
          );
        }

        if (data.filters.colors.length > 0) {
          filterByCategory = filterByCategory.filter((f) =>
            data.filters.colors.find((c) => c === f.color)
          );
        }

        if (filterByCategory.length > 0) {
          let pages = divideArrayToPages(filterByCategory);

          try {
            return (
              <>
                <Row>
                  {pages[data.current_page - 1].map((product) => {
                    return (
                      <Col
                        xl={4}
                        lg={4}
                        className="mt-4"
                        md={6}
                        sm={6}
                        xs={12}
                        key={product.id}
                      >
                        <ProductCard product={product} />
                      </Col>
                    );
                  })}
                </Row>
                <Row>
                  <Col
                    className="mt-5 mb-1 center"
                    xl={12}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <PaginationItem
                      pages={pages}
                      data={data}
                      general={general}
                    />
                  </Col>
                </Row>
              </>
            );
          } catch (e) {}
        } else {
        }
      } else {
        return (
          <div className="page_container center">
            <h1 style={{ fontSize: "40px" }}> Choose Category</h1>
          </div>
        );
      }
    }
  };
  render() {
    const { general, data, default_colors } = this.props;
    return (
      <div className="ml-5 mb-5 mr-5">
        <Row>
          <Col xl={3} lg={3} md={6} sm={12} xs={12} className="mt-4">
            <ProductFilters
              general={general}
              data={data}
              default_colors={default_colors}
            />
          </Col>
          <Col xl={9} lg={9} md={6} sm={12} xs={12}>
            {data.isLoading === true ? (
              <Row>
                {[1, 2, 3, 4, 5, 6].map((item) => {
                  return (
                    <Col
                      key={item}
                      xl={4}
                      lg={4}
                      className="mt-4"
                      md={6}
                      sm={6}
                      xs={12}
                    >
                      <Loader width="250px" height="250px" />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              this.renderProducts()
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ ProductR }) => {
  return { data: ProductR.data, default_colors: ProductR.default_colors };
};

export default connect(mapStateToProps, actions)(Products);
