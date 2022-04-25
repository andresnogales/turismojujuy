import axios from "axios";

export const singleRegion = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/region/" + id + "/articles");
    dispatch({
      type: "REGION_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "REGION_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};