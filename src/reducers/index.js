import { combineReducers } from "redux";
import data from "./data";
import filter from "./filter";
import order from "./order";
import loading from "./loading";

export default combineReducers({
  data,
  filter,
  order,
  loading
});
