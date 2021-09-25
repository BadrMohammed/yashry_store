import {
  UPDATE_PRODUCTS_PROPS,
  MERGE_PRODUCTS_PROPS,
  DELETE_PRODUCTS_PROPS,
  CLEAR_PRODUCTS_STATE,
} from "../Actions/types";
import * as general from "./methods";

const INITIAL_STATE = {
  data: {
    items: null,
    isLoading: false,
    filters: {
      categoryId: null,
      price: [0, 0],
      ratings: [],
      colors: [],
    },
    current_page: 1,
    new_color: "",
    price_range: null,
  },
  default_colors: ["red", "blue", "green", "white", "black"],
};

const ProductR = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS_PROPS: {
      return general.updateProps(state, action);
    }
    case MERGE_PRODUCTS_PROPS: {
      return general.mergeProps(state, action);
    }
    case DELETE_PRODUCTS_PROPS: {
      return general.deleteProps(state, action);
    }
    case CLEAR_PRODUCTS_STATE: {
      let newState = state;
      newState = INITIAL_STATE;
      return newState;
    }

    default:
      return state;
  }
};

export default ProductR;
