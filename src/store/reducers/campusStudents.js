import * as at from "../actions/actionTypes";

const campusStudents = (state = [], action) => {
    switch (action.type) {
        case at.FETCH_CAMPUS_STUDENTS:
            return action.payload;
        case at.ADD_STUDENT:
            return [...state, action.payload]
        case at.DELETE_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case at.CLEAR_DATA:
            return [];
        default:
            return state;
    }
};

export default campusStudents;