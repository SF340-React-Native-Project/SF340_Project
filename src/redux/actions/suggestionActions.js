import {
    ADD_FOOD_SUGGESTION, EDIT_FOOD_SUGGESTION, DELETE_FOOD_SUGGESTION,
    ADD_FRIEND_SUGGESTION, EDIT_FRIEND_SUGGESTION, DELETE_FRIEND_SUGGESTION,
    ADD_RESTAURANT_SUGGESTION, EDIT_RESTAURANT_SUGGESTION, DELETE_RESTAURANT_SUGGESTION
} from '../types'

export const addFoodSuggestion = (food) => (dispatch) => {

    dispatch({ type: ADD_FOOD_SUGGESTION, payload: food });

}
export const editFoodSuggestion = (data) => (dispatch) => {

    dispatch({ type: EDIT_FOOD_SUGGESTION, payload: data });

}
export const deleteFoodSuggestion = (data) => (dispatch) => {

    dispatch({ type: DELETE_FOOD_SUGGESTION, payload: data });

}
export const addRestaurantSuggestion = (foodname) => (dispatch) => {

    dispatch({ type: ADD_RESTAURANT_SUGGESTION, payload: foodname });

}
export const editRestaurantSuggestion = (data) => (dispatch) => {

    dispatch({ type: EDIT_RESTAURANT_SUGGESTION, payload: data });

}
export const deleteRestaurantSuggestion = (id) => (dispatch) => {

    dispatch({ type: DELETE_RESTAURANT_SUGGESTION, payload: id });

}
export const addFriendSuggestion = (name) => (dispatch) => {

    dispatch({ type: ADD_FRIEND_SUGGESTION, payload: name });

}
export const editFriendSuggestion = (foodname) => (dispatch) => {

    dispatch({ type: EDIT_FRIEND_SUGGESTION, payload: foodname });

}
export const deleteFriendSuggestion = (data) => (dispatch) => {

    dispatch({ type: DELETE_FRIEND_SUGGESTION, payload: data });

}