import React, { Component } from "react";
import { Row, Col, Card } from "reactstrap";
import CategoryCard from "./CategoryCard";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/index";
import Loader from "../../ReusableCompnents/Loader";

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  renderCategories = () => {
    const { data, general, categoryId } = this.props;
    if (data.items !== null) {
      if (data.items.length > 0) {
        return data.items.map((category, index) => {
          return (
            <Col className="center mt-4" key={index}>
              <CategoryCard
                category={category}
                general={general}
                categoryId={categoryId}
              />
            </Col>
          );
        });
      }
    }
  };
  render() {
    const { data } = this.props;
    return (
      <div>
        <Card className="card_item ml-5 mr-5">
          <Row className="mb-4">
            <Col xl={12} className="mt-4 ml-5">
              <h5 className="black_color ml-3 mr-3">
                Choose one of our categories from below
              </h5>
            </Col>

            {data.isLoading === true ? (
              <>
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <Col className="center mt-4" key={item}>
                      <Loader width="130px" height="130px" />
                    </Col>
                  );
                })}
              </>
            ) : (
              this.renderCategories()
            )}
          </Row>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ CategoryR, ProductR }) => {
  return { data: CategoryR.data, categoryId: ProductR.data.filters.categoryId };
};

export default connect(mapStateToProps, actions)(Categories);
