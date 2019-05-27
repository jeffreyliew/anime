import { SET_FILTER } from "../actions/filter";

export default function filter(state = "", action) {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
