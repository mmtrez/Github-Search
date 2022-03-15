export const setSearch = (searchTerm) => {
  return {
    type: "SET_SEARCH",
    payload: searchTerm,
  };
};

export const cleanSearch = () => {
  return {
    type: "CLEAN_SEARCH",
  };
};
