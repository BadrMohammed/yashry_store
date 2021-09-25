import { Request } from "../Api";
import { UPDATE_PRODUCTS_PROPS } from "./types";

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: UPDATE_PRODUCTS_PROPS,
    payload: [{ prop: "data.isLoading", value: true }],
  });
  Request()
    .get("/product")
    .then((res) => {
      if (res.status === 200) {
        let prices = res.data.map((d) => d.price);

        dispatch({
          type: UPDATE_PRODUCTS_PROPS,
          payload: [
            {
              prop: "data.price_range",
              value: [0, Math.max(...prices)],
            },
            { prop: "data.items", value: res.data },
          ],
        });
      }
      dispatch({
        type: UPDATE_PRODUCTS_PROPS,
        payload: [{ prop: "data.isLoading", value: false }],
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_PRODUCTS_PROPS,
        payload: [{ prop: "data.isLoading", value: false }],
      });
      console.log(err);
    })
    .finally();
};
