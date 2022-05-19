import { getProductsReducer } from "./Product.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  getProductsData: getProductsReducer,
});

export default rootReducer;
