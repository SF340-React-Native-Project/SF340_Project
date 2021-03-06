import { ADD_NAME, EDIT_NAME, DELETE_NAME, ADD_FOOD, EDIT_FOOD, DELETE_FOOD, SET_FOOD_PRICE, SET_MEMBER_VALUE, CALCULATE } from '../types';
import { addFoodSuggestion, addFriendSuggestion } from './suggestionActions';



export const addName = (name) => (dispatch) => {

    dispatch({ type: ADD_NAME, payload: name });
    dispatch(addFriendSuggestion(name));

}
export const editName = (name) => (dispatch) => {

    dispatch({ type: EDIT_NAME, payload: name });

}
export const deleteName = (name) => (dispatch) => {

    dispatch({ type: DELETE_NAME, payload: name });
    dispatch(calculate())

}
export const addFood = (food) => (dispatch) => {

    dispatch({ type: ADD_FOOD, payload: food });
    dispatch(addFoodSuggestion(food));

}
export const editFood = (food) => (dispatch) => {

    dispatch({ type: EDIT_FOOD, payload: food });

}
export const deleteFood = (id) => (dispatch) => {

    dispatch({ type: DELETE_FOOD, payload: id });

}
export const setFoodPrice = (id, price) => (dispatch) => {

    dispatch({ type: SET_FOOD_PRICE, payload: { id, price } });

}
export const setMemberValue = (id, name) => (dispatch) => {

    dispatch({ type: SET_MEMBER_VALUE, payload: { id, name } });

}
export const calculate = () => (dispatch) => {

    dispatch({ type: CALCULATE });

}




