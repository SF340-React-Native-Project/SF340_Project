import {
    ADD_FOOD_SUGGESTION, EDIT_FOOD_SUGGESTION, DELETE_FOOD_SUGGESTION,
    ADD_FRIEND_SUGGESTION, EDIT_FRIEND_SUGGESTION, DELETE_FRIEND_SUGGESTION,
    ADD_RESTAURANT_SUGGESTION, EDIT_RESTAURANT_SUGGESTION, DELETE_RESTAURANT_SUGGESTION
} from '../types'

const initialState = {
    drink: [],
    snack: [],
    restaurant: [],
    friend: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_FOOD_SUGGESTION:

            if (action.payload.foodType === 'drink') {
                let check = state.drink.indexOf(action.payload.food);
                if (check === -1) {
                    return {
                        ...state,
                        drink: [...state.drink, { name: action.payload.food, detail: '', type: action.payload.foodType, idx: state.drink.length > 0 ? (state.drink[state.drink.length - 1].idx) + 1 : 0 }]
                    }
                } else {
                    return {
                        ...state,
                    }
                }
            } else {
                let check = state.snack.indexOf(action.payload.food);
                if (check === -1) {
                    return {
                        ...state,
                        snack: [...state.snack, { name: action.payload.food, detail: '', type: action.payload.foodType, idx: state.snack.length > 0 ? (state.snack[state.snack.length - 1].idx) + 1 : 0 }]
                    }
                } else {
                    return {
                        ...state,
                    }
                }
            }
        case EDIT_FOOD_SUGGESTION:
            return {
                ...state,
            }
        case DELETE_FOOD_SUGGESTION:
            if (action.payload.type === 'drink') {
                let deleteFoodTemp = [...state.drink.filter(word => word.idx !== action.payload.idx)]
                return {
                    ...state,
                    drink: deleteFoodTemp
                }
            } else {
                let deleteFoodTemp = [...state.snack.filter(word => word.idx !== action.payload.idx)]
                return {
                    ...state,
                    snack: deleteFoodTemp
                }
            }
        case ADD_FRIEND_SUGGESTION:
            let check = state.friend.indexOf(action.payload);
            if (check === -1) {
                return {
                    ...state,
                    friend: [...state.friend, { name: action.payload, type: 'friend', idx: state.friend.length > 0 ? (state.friend[state.friend.length - 1].idx) + 1 : 0 }]
                }

            } else {
                return {
                    ...state,
                }
            }

        case EDIT_FRIEND_SUGGESTION:
            return {
                ...state,
            }
        case DELETE_FRIEND_SUGGESTION:

            let deleteFriendTemp = [...state.friend.filter(word => word.idx !== action.payload.idx)]
            return {
                ...state,
                friend: deleteFriendTemp
            }

        case ADD_RESTAURANT_SUGGESTION:
            return {
                ...state,
            }
        case EDIT_RESTAURANT_SUGGESTION:
            return {
                ...state,
                restaurant: []
            }
        case DELETE_RESTAURANT_SUGGESTION:
            return {
                ...state,
            }

        default:
            return state;
    }
}