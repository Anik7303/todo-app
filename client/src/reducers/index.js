import { combineReducers } from "redux";

import { CREATE_TODO, FETCH_TODOS, UPDATE_TODO, DELETE_TODO } from "../actions/types";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO:
            return [...state, action.payload];
        case FETCH_TODOS:
            return action.payload;
        case UPDATE_TODO:
            return state.map((todo) =>
                todo._id.toString() === action.payload._id.toString() ? action.payload : todo
            );
        case DELETE_TODO:
            return state.filter((todo) => todo._id.toString() !== action.payload.toString());
        default:
            return state;
    }
};

export default combineReducers({
    todos: todoReducer,
});
