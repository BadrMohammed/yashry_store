import {
  UPDATE_HOME_PROPS,
  MERGE_HOME_PROPS,
  DELETE_HOME_PROPS,
  CLEAR_HOME_STATE,
} from "../Actions/types";
import * as general from "./methods";

const INITIAL_STATE = {
  activeIndex: 0,
  question_one: {
    questions: [
      {
        label: "Is your business model B2C or B2B or both?",
        options: ["B2C", "B2B", "both"],
        value: "",
      },

      {
        label: "Do you target all age brackets?",
        options: ["yes", "no"],
        value: "",
      },

      {
        label: "Do you target all industries?",
        options: ["yes", "no"],
        value: "",
      },
    ],
  },
  question_two: {
    questions: [
      {
        label: "Did you have an investment?",
        options: ["yes", "no"],
        value: "",
      },
      { label: "how much was the investment?", options: [], value: "" },
    ],
  },
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_HOME_PROPS: {
      return general.updateProps(state, action);
    }
    case MERGE_HOME_PROPS: {
      return general.mergeProps(state, action);
    }
    case DELETE_HOME_PROPS: {
      return general.deleteProps(state, action);
    }
    case CLEAR_HOME_STATE: {
      let newState = state;
      newState = INITIAL_STATE;
      return newState;
    }

    default:
      return state;
  }
};

export default HomeReducer;
