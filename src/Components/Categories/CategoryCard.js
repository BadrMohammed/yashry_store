import React from "react";
import { Card } from "reactstrap";
import { UPDATE_PRODUCTS_PROPS } from "../../Redux/Actions/types";

const CategoryCard = ({ category, general, categoryId }) => {
  return (
    <Card
      className="category_card"
      style={{
        border: categoryId === category.id ? "1px solid #4d9ee5" : null,
      }}
      onClick={(e) => {
        e.preventDefault();
        general(
          [
            { prop: "data.filters.categoryId", value: category.id },
            { prop: "data.current_page", value: 1 },
          ],
          UPDATE_PRODUCTS_PROPS
        );
      }}
    >
      <div className="page_container center">
        <img
          src={category.image}
          style={{ borderRadius: "5px", width: "100px", height: "100px" }}
          className="full_image img-fluid"
          alt="img"
        />

        <div className="category_container_name">
          <p> Category {category.name}</p>
        </div>
      </div>
    </Card>
  );
};
export default CategoryCard;
