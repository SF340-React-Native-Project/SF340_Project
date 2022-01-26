import { ADD_NAME, EDIT_NAME, DELETE_NAME, ADD_FOOD, EDIT_FOOD, DELETE_FOOD, SET_FOOD_PRICE, SET_NEW_PRICE, SET_MEMBER_VALUE } from '../types'

const initialState = {
    nameList: ["wonyus", "macdecade", "man", "poom"],
    foodList: { 'foodname': 'beer', 'price': '980', 'member': { "wonyus": 1, "macdecade": 1, "man": 1, "poom": 1 } },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_NAME:
            var addNameTemp = [...state.nameList, action.payload]
            return {
                nameList: addNameTemp,
            }
        case EDIT_NAME:
            var editNameTemp = []
            return {
                data: action.payload,
            }
        case DELETE_NAME:
            var deleteNameTemp = [...state.nameList.filter(word => word !== action.payload)]
            return {
                nameList: deleteNameTemp
            }
        case ADD_FOOD:
            return {
                data: action.payload,
            }
        case EDIT_FOOD:
            return {
                data: action.payload,
            }
        case DELETE_FOOD:
            return {
                data: action.payload,
            }
        case SET_FOOD_PRICE:
            return {
                data: action.payload,
            }
        case SET_NEW_PRICE:
            return {
                data: action.payload,
            }
        case SET_MEMBER_VALUE:
            return {
                data: action.payload,
            }


        default:
            return state;
    }
}