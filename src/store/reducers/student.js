import { FETCH_STUDENT, CLEAR_DATA } from "../actions/actionTypes";

const initialState = {
  campus: {},
};

// REDUCER;
const student = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT:
      return action.payload;
    case CLEAR_DATA:
      console.log("clear")
      return []
    default:
      return state;
  }
};

export default student;