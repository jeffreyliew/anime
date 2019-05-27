import { RECEIVE_DATA } from "../actions/data";

export default function data(state = [], action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data;
    default:
      return state;
  }
}
