import { ADD_USER, DELETE_USER, GET_ALL_USERS, GET_USER, UPDATE_USER } from '../actionTypes';
import axios from 'axios';
// export const getAllUsers = (users) => {
//     return {
//         type: GET_ALL_USERS,
//         payload: users
//     };
// }

// export const getUser = (user) => {
//     return {
//         type: GET_USER,
//         payload: user
//     };
// }

// export const addUser = (user) => {
//     return {
//         type: ADD_USER,
//         payload: user
//     };
// }

// export const updateUser = (user) => {
//     return {
//         type: UPDATE_USER,
//         payload: user
//     };
// }

// export const deleteUser = () => {
//     return {
//         type: DELETE_USER
//     };
// }

export const getAllUsers = () => async dispatch => {
    const url = 'https://noeudicl9i.execute-api.us-east-1.amazonaws.com/dev/users';

    try {
        const response = await axios.get(url);
        const users = response.data;
        dispatch({
            type: GET_ALL_USERS,
            payload: users
        });
    } catch (err) {
        console.log(err);
    }
}

export const getUser = (id) => async dispatch => {
    const url = `https://noeudicl9i.execute-api.us-east-1.amazonaws.com/dev/user/${id}`;

    try {
        const response = await axios.get(url);
        const user = response.data;
        dispatch({
            type: GET_USER,
            payload: [user]
        });
    } catch (err) {
        console.log(err);
    }
}

export const addUser = (user) => async dispatch => {
    const url = 'https://noeudicl9i.execute-api.us-east-1.amazonaws.com/dev/user/'

    const { fname, lname, age } = user;

    const payload = {
        fname,
        lname,
        age
    }

    try {
        const response = await axios.post(url, payload);
        const user = response.data;
        dispatch({
            type: ADD_USER,
            payload: user
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateUser = (id, user) => async dispatch => {
    const url = `https://noeudicl9i.execute-api.us-east-1.amazonaws.com/dev/user/${id}`;

    const { fname, lname, age } = user;

    const payload = {
        fname,
        lname,
        age
    }

    try {
        const response = await axios.put(url, payload);
        const user = response.data;
        dispatch({
            type: UPDATE_USER,
            payload: user
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteUser = (id) => async dispatch => {
    const url = `https://noeudicl9i.execute-api.us-east-1.amazonaws.com/dev/user/${id}`;

    try {
        const response = await axios.delete(url);
        const user = response.data;
        dispatch({
            type: DELETE_USER,
            payload: user
        });
    } catch (err) {
        console.log(err);
    }
}