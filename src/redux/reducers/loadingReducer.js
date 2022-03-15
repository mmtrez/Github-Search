export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return true;
    case "CLEAR_LOADING":
      return false;
    default:
      return state;
  }
};
