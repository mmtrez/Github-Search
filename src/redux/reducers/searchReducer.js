const initialState = JSON.parse(localStorage.getItem("SET_SEARCH")) || [];
export const searchReducer = (state = initialState, action) => {
  if (action.type === "SET_SEARCH") {
    return [...action.payload];
  }
  if (action.type === "CLEAN_SEARCH") {
    return [];
  } else {
    return state;
  }
};
