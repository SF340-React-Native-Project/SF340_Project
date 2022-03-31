import {
    ADD_FOOD_SUGGESTION, EDIT_FOOD_SUGGESTION, DELETE_FOOD_SUGGESTION,
    ADD_FRIEND_SUGGESTION, EDIT_FRIEND_SUGGESTION, DELETE_FRIEND_SUGGESTION,
    ADD_RESTAURANT_SUGGESTION, EDIT_RESTAURANT_SUGGESTION, DELETE_RESTAURANT_SUGGESTION
} from '../types'

const initialState = {
    food: [],
    restaurant: [],
    friend: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FOOD_SUGGESTION:
            return {
                ...state,
            }
        case EDIT_FOOD_SUGGESTION:
            return {
                ...state,
            }
        case DELETE_FOOD_SUGGESTION:
            return {
                ...state,
            }
        case ADD_FRIEND_SUGGESTION:
            return {
                ...state,
            }
        case EDIT_FRIEND_SUGGESTION:
            return {
                ...state,
            }
        case DELETE_FRIEND_SUGGESTION:
            return {
                ...state,
            }
        case ADD_RESTAURANT_SUGGESTION:
            return {
                ...state,
            }
        case EDIT_RESTAURANT_SUGGESTION:
            return {
                ...state,
            }
        case DELETE_RESTAURANT_SUGGESTION:
            return {
                ...state,
            }

        default:
            return state;
    }
}