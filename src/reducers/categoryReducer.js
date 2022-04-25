export const categoryReducer = (state = { category: {} }, action) => {
    switch (action.type) {
      case "CATEGORY_SUCCESS":
        return { data: action.payload };
      case "CATEGORY_FAIL":
        return { error: action.payload };
      default:
        return state;
    }
  };

  export const categoryWithArticlesReducer = (state = { category: {} }, action) => {
    switch (action.type) {
      case "CATEGORY_ARTICLES_SUCCESS":
        return { data: action.payload };
      case "CATEGORY_ARTICLES_FAIL":
        return { error: action.payload };
      default:
        return state;
    }
  };