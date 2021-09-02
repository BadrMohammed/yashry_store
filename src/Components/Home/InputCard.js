import { Col, Input, Row } from "reactstrap";
import React from "react";
import { UPDATE_HOME_PROPS } from "../../Redux/Actions/types";
const InputCard = ({ question, index, general, prop, disabled }) => {
  return (
    <div className="mt-4">
      <Row>
        <Col className="ml-4 mt-3" xl={12} lg={12} md={12} sm={12} xs={12}>
          <h4>{+index + 1 + ". " + question.label}</h4>
        </Col>
      </Row>
      <Row className="alignItem">
        <Col
          className="mt-4 ml-3 cursor"
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <div className="page_container flex alignItem">
            <Input
              disabled={disabled}
              className="input_style"
              placeholder="your answer"
              value={question.value}
              onChange={(e) =>
                general(
                  [
                    {
                      prop: prop + index + ".value",
                      value: e.target.value,
                    },
                  ],
                  UPDATE_HOME_PROPS
                )
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InputCard;
