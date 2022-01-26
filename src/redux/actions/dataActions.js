import { ADD_NAME, EDIT_NAME, DELETE_NAME } from '../types';




export const addName = (name) => async(dispatch) => {
    
    dispatch({ type: ADD_NAME, payload: name });
    
}
export const editName = (name) => async(dispatch) => {

    dispatch({ type: EDIT_NAME, payload: name });
    
}
export const deleteName = (name) => async(dispatch) => {

    dispatch({ type: DELETE_NAME, payload: name });
    
}

