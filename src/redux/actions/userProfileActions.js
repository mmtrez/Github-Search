export const setUserProfile = (username) => {
  return {
    type: "SET_USER_PROFILE",
    payload: username,
  };
};
