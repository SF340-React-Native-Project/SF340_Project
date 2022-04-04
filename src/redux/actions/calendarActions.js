import { ADD_SCHEDULE, DELETE_SCHEDULE, SET_SCHEDULE_DATE, SET_SCHEDULE_TIME, SET_SCHEDULE_DETAIL, SET_SCHEDULE_MEMBER } from '../types';

export const addSchedule = () => (dispatch) => {

    dispatch({ type: ADD_SCHEDULE });

}
export const deleteSchedule = (id) => (dispatch) => {

    dispatch({ type: DELETE_SCHEDULE, payload: id });

}
export const setScheduleDate = (id, baseDate) => (dispatch) => {

    dispatch({ type: SET_SCHEDULE_DATE, payload: { id, baseDate } });

}
export const setScheduleTime = (id, time) => (dispatch) => {

    dispatch({ type: SET_SCHEDULE_TIME, payload: { id, time } });

}
export const setScheduleDetail = (id, detail) => (dispatch) => {

    dispatch({ type: SET_SCHEDULE_DETAIL, payload: { id, detail } });

}
export const setScheduleMember = (id, member) => (dispatch) => {

    dispatch({ type: SET_SCHEDULE_MEMBER, payload: { id, member } });

}