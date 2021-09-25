import { Request } from "../Api";
import { UPDATE_CATEGORIES_PROPS } from "../Actions/types";
export const fetchCategories = () => (dispatch) => {
  dispatch({
    type: UPDATE_CATEGORIES_PROPS,
    payload: [{ prop: "data.isLoading", value: true }],
  });
  Request()
    .get("/category")
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: UPDATE_CATEGORIES_PROPS,
          payload: [{ prop: "data.items", value: res.data }],
        });
      }
      dispatch({
        type: UPDATE_CATEGORIES_PROPS,
        payload: [{ prop: "data.isLoading", value: false }],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: UPDATE_CATEGORIES_PROPS,
        payload: [{ prop: "data.isLoading", value: false }],
      });
    })
    .finally();
};
