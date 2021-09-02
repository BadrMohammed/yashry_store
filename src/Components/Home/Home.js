import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/index";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import Carousel from "./Carousel";
import { CLEAR_HOME_STATE } from "../../Redux/Actions/types";
class Home extends Component {
  componentDidMount() {
    this.props.general([], CLEAR_HOME_STATE);
  }

  componentWillUnmount() {
    this.props.general([], CLEAR_HOME_STATE);
  }

  renderSections = () => {
    const { question_one, question_two, general, onSaveQuestions } = this.props;
    let items = [
      <div className="center">
        <SectionOne question_one={question_one} general={general} />
      </div>,
      <div className="center">
        <SectionTwo
          question_two={question_two}
          general={general}
          onSaveQuestions={onSaveQuestions}
        />
      </div>,
    ];

    return items;
  };
  render() {
    const { activeIndex, general } = this.props;
    return (
      <div className="page_container center">
        <Carousel
          general={general}
          items={this.renderSections()}
          activeIndex={activeIndex}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ HomeR }) => {
  return {
    question_one: HomeR.question_one,
    question_two: HomeR.question_two,
    activeIndex: HomeR.activeIndex,
  };
};

export default connect(mapStateToProps, actions)(Home);
