
export const regionReducer = (state = { region: {} }, action) => {
    switch (action.type) {
      case "REGION_SUCCESS":
        return { data: action.payload };
      case "REGION_FAIL":
        return { error: action.payload };
      default:
        return state;
    }
  };