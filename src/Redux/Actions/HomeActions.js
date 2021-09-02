import axios from "axios";
import { showNotificationMessage } from "../../ReusableCompnents/GeneralFunctions";
import { CLEAR_HOME_STATE } from "./types";

export const onSaveQuestions = () => (dispatch) => {
  let payload = {
    token: "93Z_iPDkpGGyFWJoKUB5LQ",
    data: {
      name: "",
      email: "",
      phone: "",
      _repeat: 1,
    },
  };

  axios({
    method: "post",
    url: "https://app.fakejson.com/q",
    data: payload,
  })
    .then((res) => {
      showNotificationMessage(
        "Your answers have been saved successfully",
        "success"
      );
      dispatch({ type: CLEAR_HOME_STATE, payload: [] });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally();
};
