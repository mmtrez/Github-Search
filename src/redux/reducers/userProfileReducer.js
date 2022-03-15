const initialState = JSON.parse(localStorage.getItem("SET_USER_PROFILE")) || {};
export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return { ...action.payload };
    default:
      return state;
  }
};
