import axios from "axios";


export const getCategory = (id) => async (dispatch) => {
    try {
      const { data } = await axios.get("/api/categories/" + id);
      dispatch({
        type: "CATEGORY_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "CATEGORY_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};

export const getCategoryWithArticles = (id) => async (dispatch) => {
    try {
      const { data } = await axios.get("/api/categories/" + id + "/articles");
      dispatch({
        type: "CATEGORY_ARTICLES_SUCCESS",
        payload: data,
      });
      console.log('axios get category');
      
    } catch (error) {
      dispatch({
        type: "CATEGORY_ARTICLES_ARTICLE_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
};
