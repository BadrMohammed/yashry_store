import axios from "axios";

export const Request = () => {
  return axios.create({
    baseURL: "https://test-api.edfa3ly.io",
    headers: {
      contentType: "application/json",
    },
  });
};
