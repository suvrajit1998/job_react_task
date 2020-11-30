const reducer = (products = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_PRODUCTS":
      return action.payload;
    case "FETCH_SINGLE_PRODUCT":
      return action.payload;
    default:
      return products;
  }
};

export default reducer;
