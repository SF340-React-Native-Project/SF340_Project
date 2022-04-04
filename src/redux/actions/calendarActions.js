import { ADD_SCHEDULE, DELETE_SCHEDULE } from '../types';

export const addSchedule = () => (dispatch) => {

    dispatch({ type: ADD_SCHEDULE });

}
export const deleteSchedule = (id) => (dispatch) => {

    dispatch({ type: DELETE_SCHEDULE, payload: id });

}