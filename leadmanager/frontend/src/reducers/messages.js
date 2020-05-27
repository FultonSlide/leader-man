import { CREATE_MESSAGE } from "../actions/types";

const initalState = {};

export default function (state = initalState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
