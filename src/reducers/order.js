import { SET_ORDER } from "../actions/order";

export default function sorting(state = "Default", action) {
  switch (action.type) {
    case SET_ORDER:
      return action.order;
    default:
      return state;
  }
}
