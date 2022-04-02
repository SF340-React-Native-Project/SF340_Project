import { ADD_DAY_CALENDAR } from '../types';

export const addDay = (day) => (dispatch) => {

    dispatch({ type: ADD_DAY_CALENDAR, payload: day });

}