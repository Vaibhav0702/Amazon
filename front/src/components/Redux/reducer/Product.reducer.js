const products = [];

export const getProductsReducer = (state = { products }, action) => {
  switch (action.type) {
    case "SUCCESS_GET_PRODUCTS":
      return { products: action.payload };
    case "FAILED_GET_PRODUCTS":
      return { error: action.payload };
    default:
      return state;
  }
};
