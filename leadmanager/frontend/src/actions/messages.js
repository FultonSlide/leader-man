import { CREATE_MESSAGE } from "../actions/types";

// Create message
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};
