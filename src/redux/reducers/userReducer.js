import { ADD_USER, DELETE_USER, GET_ALL_USERS, GET_USER, UPDATE_USER } from '../actionTypes';
 
const initalState = {
    users: []
}

const userReducer = (state = initalState, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: payload 
            };
        case GET_USER:
            return {
                ...state,
                users: payload 
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload] 
            };
        case UPDATE_USER:
            return {
                ...state,
                users: [ ...state.users.filter(item => item.id !== payload.id), payload ] 
            };
        case DELETE_USER:
            return {
                ...state,
                users: [ ...state.users.filter(item => item.id !== payload.id) ]
            };
        default: 
            return {
                ...state
            }
    }
}

export default userReducer;