import axios from "../axios";

import { CREATE_TODO, FETCH_TODOS, UPDATE_TODO, DELETE_TODO } from "./types";

const getActionObj = (type, payload) => ({ type, payload });

export const fetchTodos = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/todos");
        return dispatch(getActionObj(FETCH_TODOS, res.data));
    } catch (err) {
        console.log({ error: err });
    }
};

export const createTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post("/api/todos", data);
        return dispatch(getActionObj(CREATE_TODO, res.data));
    } catch (err) {
        console.log({ error: err });
    }
};

export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.patch(`/api/todos/${id}`, data);
        return dispatch(getActionObj(UPDATE_TODO, res.data));
    } catch (err) {
        console.log({ error: err });
    }
};

export const updateStatus = (id, current) => async (dispatch) => {
    try {
        const res = await axios.patch(`/api/todos/${id}`, { isDone: !current });
        return dispatch(getActionObj(UPDATE_TODO, res.data));
    } catch (err) {
        console.log({ error: err });
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/todos/${id}`);
        return dispatch(getActionObj(DELETE_TODO, id));
    } catch (err) {
        console.log({ error: err });
    }
};
