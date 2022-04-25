import axios from "axios";

export const singleArticle = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/articles/" + id);
    dispatch({
      type: "ARTICLE_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ARTICLE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listArticles = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/articles");
    dispatch({
      type: "ARTICLE_LIST_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ARTICLE_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getArticlesByCategory = (categoryId) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/categories/" + categoryId + "/articles");
    dispatch({
      type: "ARTICLE_LIST_SUCCESS",
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: "ARTICLE_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getArticlesByRegion = (regionId) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/region/" + regionId + "/articles");
    dispatch({
      type: "ARTICLE_LIST_SUCCESS",
      payload: data,
    });
    
  } catch (error) {
    dispatch({
      type: "ARTICLE_LIST_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};