import { Col, Row } from "reactstrap";
import React from "react";
import { numToLetter } from "../../ReusableCompnents/GeneralFunctions";
import { UPDATE_HOME_PROPS } from "../../Redux/Actions/types";
const OptionsCard = ({ question, index, general, prop }) => {
  const onChangeBox = (e, option) => {
    e.preventDefault();
    function updateValue(entry) {
      general(
        [
          {
            prop: prop + index + ".value",
            value: entry,
          },
        ],
        UPDATE_HOME_PROPS
      );
    }
    if (question.value === "") {
      updateValue(option);
    } else {
      if (question.value === option) {
        updateValue("");
      } else {
        updateValue(option);
      }
    }
  };
  const renderCheckoBox = (option) => {
    return (
      <div className="round">
        <input
          type="checkbox"
          id="checkbox"
          checked={option === question.value ? true : false}
        />
        <label htmlFor="checkbox"></label>
      </div>
    );
  };
  const getOptions = () => {
    return question.options.map((option, i) => {
      return (
        <Row key={i} className="alignItem">
          <Col
            className="mt-4 ml-3 cursor"
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <div
              className="page_container flex alignItem"
              onClick={(e) => onChangeBox(e, option)}
            >
              {renderCheckoBox(option)}

              <div className="ml-5">
                <p className="cursor" onClick={(e) => onChangeBox(e, option)}>
                  {numToLetter(+i + 1) + ". " + option}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      );
    });
  };
  return (
    <div className="mt-4">
      <Row>
        <Col className="ml-4 mt-3" xl={12} lg={12} md={12} sm={12} xs={12}>
          <h4>{+index + 1 + ". " + question.label}</h4>
          {getOptions()}
        </Col>
      </Row>
    </div>
  );
};

export default OptionsCard;
