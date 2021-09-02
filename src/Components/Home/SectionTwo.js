import React from "react";
import InputCard from "./InputCard";
import { Button, Col, Row } from "reactstrap";
import { Card } from "reactstrap";
import OptionsCard from "./OptionsCard";
const SectionTwo = ({ question_two, general, onSaveQuestions }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onSaveQuestions();
  };
  const getItems = () => {
    return question_two.questions.map((que, index) => {
      if (index === 1 && question_two.questions[0].value !== "") {
        return (
          <InputCard
            question={que}
            index={index}
            general={general}
            prop="question_two.questions."
            type="input"
            disabled={question_two.questions[0].value === "no" ? true : false}
          />
        );
      }

      if (index === 0) {
        return (
          <OptionsCard
            question={que}
            index={index}
            general={general}
            prop="question_two.questions."
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
          <h2>Section Two</h2>
        </Col>
      </Row>

      {getItems()}
      <Row>
        <Col
          className="text-center ml-4 mt-5"
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
        >
          <Button className="submit_btn" onClick={onSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default SectionTwo;
