import {
  UPDATE_CATEGORIES_PROPS,
  MERGE_CATEGORIES_PROPS,
  DELETE_CATEGORIES_PROPS,
  CLEAR_CATEGORIES_STATE,
} from "../Actions/types";
import * as general from "./methods";

const INITIAL_STATE = {
  data: { items: null, isLoading: false },
};

const CategoryR = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CATEGORIES_PROPS: {
      return general.updateProps(state, action);
    }
    case MERGE_CATEGORIES_PROPS: {
      return general.mergeProps(state, action);
    }
    case DELETE_CATEGORIES_PROPS: {
      return general.deleteProps(state, action);
    }
    case CLEAR_CATEGORIES_STATE: {
      let newState = state;
      newState = INITIAL_STATE;
      return newState;
    }

    default:
      return state;
  }
};

export default CategoryR;
