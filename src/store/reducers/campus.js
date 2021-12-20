import { FETCH_CAMPUS, CLEAR_DATA } from "../actions/actionTypes";

const initialState = {
  students: [],
};

const campus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return action.payload;
    case CLEAR_DATA:
      return []
    default:
      return state;
  }
};

export default campus;