

import { getProductsReducer } from "./Product.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  getProductsReducer: getProductsReducer,
});

export default rootReducer;
