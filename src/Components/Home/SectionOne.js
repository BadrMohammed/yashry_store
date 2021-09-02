import React from "react";
import OptionsCard from "./OptionsCard";
import { Col, Row, Card } from "reactstrap";
const SectionOne = ({ question_one, general }) => {
  const getItems = () => {
    return question_one.questions.map((que, index) => {
      if (
        index === 1 &&
        question_one.questions[0].value !== "" &&
        question_one.questions[0].value !== "B2C"
      ) {
        return (
          <OptionsCard
            question={que}
            index={index}
            general={general}
            prop="question_one.questions."
          />
        );
      }

      if (
        index === 2 &&
        question_one.questions[0].value !== "" &&
        question_one.questions[0].value !== "B2B"
      ) {
        return (
          <OptionsCard
            question={que}
            index={index}
            general={general}
            prop="question_one.questions."
          />
        );
      }

      if (index === 0) {
        return (
          <OptionsCard
            question={que}
            index={index}
            general={general}
            prop="question_one.questions."
          />
        );
      }
    });
  };

  return (
    <Card className="question_card">
      <Row>
        <Col
          className="text-center ml-4 mt-3"
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <h2>Section One</h2>
        </Col>
      </Row>

      {getItems()}
    </Card>
  );
};

export default SectionOne;
