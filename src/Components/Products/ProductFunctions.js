import { Row, Col } from "reactstrap";
import Rating from "@mui/material/Rating";
import CurrencyInput from "react-currency-input-field";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  DELETE_PRODUCTS_PROPS,
  MERGE_PRODUCTS_PROPS,
  UPDATE_PRODUCTS_PROPS,
} from "../../Redux/Actions/types";
import { FiCheck, FiX } from "react-icons/fi";

const onSelectItem = (prop, value, general, items) => {
  general([{ prop: "data.current_page", value: 1 }], UPDATE_PRODUCTS_PROPS);

  function mergeItem() {
    general([{ prop: prop, value: value }], MERGE_PRODUCTS_PROPS);
  }

  if (items.length === 0) {
    mergeItem();
  } else {
    if (items.find((c) => c === value)) {
      general(
        [{ prop: prop + "." + items.indexOf(value) }],
        DELETE_PRODUCTS_PROPS
      );
    } else {
      mergeItem();
    }
  }
};

export const getRating = (value, ratings, general) => {
  return (
    <Row style={{ marginInline: "1" }}>
      <Col>
        <div className="alignItem flex">
          <span
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              onSelectItem("data.filters.ratings", value, general, ratings);
            }}
          >
            <Rating name="simple-controlled" value={value} readOnly />
          </span>

          {ratings.find((r) => r === value) === undefined ? null : (
            <FiCheck color="blue" />
          )}
        </div>
      </Col>
    </Row>
  );
};

export const getCurrancyInput = (prop, value, title, general) => {
  return (
    <CurrencyInput
      className="form-control input_style"
      id="input-example"
      name="input-name"
      value={value}
      placeholder={title}
      decimalsLimit={2}
      onValueChange={(value) =>
        general(
          [
            { prop: prop, value: value },
            { prop: "data.current_page", value: 1 },
          ],
          UPDATE_PRODUCTS_PROPS
        )
      }
      suffix=" $ "
    />
  );
};

export const GetCheckBox = (color, index, general, colors) => {
  return (
    <Row key={index} className="ml-1 mr-1">
      <Col
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className="checkbox_container"
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) =>
                  onSelectItem("data.filters.colors", color, general, colors)
                }
                checked={
                  colors.find((c) => c === color) === undefined ? false : true
                }
              />
            }
            label={color}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export const renderClearFilter = (handleEvent) => {
  return (
    <Row className="ml-1 mr-1">
      <Col xl={12} lg={12} md={12} sm={12} xs={12} className="flex alignItem">
        <div onClick={(e) => handleEvent(e)} className="clear_container">
          <FiX color="red" style={{ cursor: "pointer" }} />
          <span style={{ cursor: "pointer", fontWeight: "bold" }}>clear</span>
        </div>
      </Col>
    </Row>
  );
};
