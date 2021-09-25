import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  Row,
  Col,
  Input,
  Button,
} from "reactstrap";
import Slider from "@mui/material/Slider";
import {
  GetCheckBox,
  getCurrancyInput,
  getRating,
  renderClearFilter,
} from "./ProductFunctions";
import {
  MERGE_PRODUCTS_PROPS,
  UPDATE_PRODUCTS_PROPS,
} from "../../Redux/Actions/types";

const PriceCard = ({ data, general }) => {
  function valuetext(value) {
    return `${value}°C`;
  }

  const clearFilter = (e) => {
    e.preventDefault();
    general(
      [
        { prop: "data.filters.price", value: [0, 0] },
        { prop: "data.current_page", value: 1 },
      ],
      UPDATE_PRODUCTS_PROPS
    );
  };
  return (
    <CardHeader>
      <Form>
        <Row className="ml-1 mr-1">
          <p style={{ fontWeight: "bold" }}>Price Range</p>

          <Col xl={6} lg={6} md={12} sm={12} xs={12} className="mt-1">
            {getCurrancyInput(
              "data.filters.price.0",
              data.filters.price[0],
              "From",
              general
            )}
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12} className="mt-1">
            {getCurrancyInput(
              "data.filters.price.1",
              data.filters.price[1],
              "To",
              general
            )}
          </Col>
        </Row>
        <Row className="ml-1 mr-1">
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mt-2">
            <Slider
              getAriaLabel={() => "Price range"}
              value={data.filters.price}
              min={0}
              max={data.price_range === null ? 1000 : data.price_range[1]}
              onChange={(e, value) => {
                general(
                  [
                    { prop: "data.filters.price", value: value },
                    { prop: "data.current_page", value: 1 },
                  ],
                  UPDATE_PRODUCTS_PROPS
                );
              }}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Col>
        </Row>

        {data.filters.price[0] === 0 && data.filters.price[1] === 0
          ? null
          : renderClearFilter(clearFilter)}
      </Form>
    </CardHeader>
  );
};

const ColorCard = ({ data, general, default_colors }) => {
  const onAddColor = (e) => {
    e.preventDefault();
    if (default_colors.find((c) => c === data.new_color) === undefined) {
      general(
        [{ prop: "default_colors", value: data.new_color }],
        MERGE_PRODUCTS_PROPS
      );
    }
  };

  const clearFilter = (e) => {
    e.preventDefault();
    general(
      [
        { prop: "data.new_color", value: "" },
        { prop: "data.filters.colors", value: [] },
        { prop: "data.current_page", value: 1 },
        {
          prop: "data.default_colors",
          value: ["red", "blue", "green", "white", "black"],
        },
      ],
      UPDATE_PRODUCTS_PROPS
    );
  };
  return (
    <CardBody>
      <Row className="ml-1 mr-1">
        <p style={{ fontWeight: "bold" }}>Color</p>

        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="flex alignItem">
            <Input
              className="input_style"
              placeholder="Color"
              value={data.new_color}
              onChange={(e) =>
                general(
                  [{ prop: "data.new_color", value: e.target.value }],
                  UPDATE_PRODUCTS_PROPS
                )
              }
            />
            {data.new_color !== "" ? (
              <Button className="add_btn" onClick={(e) => onAddColor(e)}>
                save
              </Button>
            ) : null}
          </div>
        </Col>
      </Row>

      {default_colors.map((color, index) => {
        return GetCheckBox(color, index, general, data.filters.colors);
      })}
      {data.filters.colors.length === 0 ? null : renderClearFilter(clearFilter)}
    </CardBody>
  );
};

const RatingCard = ({ data, general }) => {
  const clearFilter = (e) => {
    e.preventDefault();
    general(
      [
        { prop: "data.filters.ratings", value: [] },
        { prop: "data.current_page", value: 1 },
      ],
      UPDATE_PRODUCTS_PROPS
    );
  };
  return (
    <CardFooter>
      <p className="ml-3 mr-3 mt-3" style={{ fontWeight: "bold" }}>
        Aveage Rating
      </p>
      {getRating(5, data.filters.ratings, general)}
      {getRating(4, data.filters.ratings, general)}
      {getRating(3, data.filters.ratings, general)}
      {getRating(2, data.filters.ratings, general)}
      {getRating(1, data.filters.ratings, general)}

      {data.filters.ratings.length === 0
        ? null
        : renderClearFilter(clearFilter)}
    </CardFooter>
  );
};

const ProductFilters = ({ data, general, default_colors }) => {
  return (
    <Card className="card_filter_container card_item">
      <PriceCard data={data} general={general} />
      <ColorCard
        default_colors={default_colors}
        data={data}
        general={general}
      />
      <RatingCard data={data} general={general} />
    </Card>
  );
};

export default ProductFilters;
