import axios from "axios";

const rootURl = "http://localhost:8000/api/v1";
const userApi = rootURl + "/users";

export const postRegister = (frmDt) => {
  try {
    return axios.post(userApi, frmDt);
    // console.log(data);
  } catch (error) {
    const data = {
      status: "error",
      message: error.message,
    };
    return {
      data,
    };
  }
};
