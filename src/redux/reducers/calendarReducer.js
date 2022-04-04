import { ADD_SCHEDULE, DELETE_SCHEDULE, SET_SCHEDULE_DATE, SET_SCHEDULE_TIME, SET_SCHEDULE_DETAIL, SET_SCHEDULE_MEMBER } from '../types'

const initialState = {
    scheduleList: [],

    // calendarList: [{ 'id': 0, 'day': '13 March 2022', 'time': '10.00', 'detail': 'ไปก้ำกึ่ง', 'member': { "wonyus": 1, "macdecade": 1, "man": 0, "poom": 1 } }, { 'id': 0, 'day': '13 March 2022', 'time': '10.00', 'detail': 'ไปก้ำกึ่ง', 'member': { "wonyus": 1, "macdecade": 1, "man": 0, "poom": 1 } }],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SCHEDULE:
            // เพิ่มรายการนัดหมาย

            var addScheduleTemp = [...state.scheduleList, { 'id': state.scheduleList.length, 'day': '', 'time': '', 'detail': '', 'member': '' }];

            console.log(addScheduleTemp);
            return {
                ...state,
                scheduleList: addScheduleTemp,
            }

        case DELETE_SCHEDULE:

            var deleteScheduleTemp = [...state.scheduleList.filter(word => word.id !== action.payload)];

            console.log(deleteScheduleTemp);
            return {
                ...state,
                scheduleList: deleteScheduleTemp,
            }

        case SET_SCHEDULE_DATE:

            // ใส่วันที่นัด

            console.log(action.payload, "reducer");
            var scheduleDateTemp = state.scheduleList;
            // console.log(scheduleDateTemp);
            scheduleDateTemp[action.payload.id].day = action.payload.baseDate;

            return {
                ...state,
                scheduleList: [...scheduleDateTemp],
            }

        case SET_SCHEDULE_TIME:

            // ใส่เวลาที่นัด

            console.log(action.payload, "reducer");
            var scheduleTimeTemp = state.scheduleList;
            scheduleTimeTemp[action.payload.id].time = action.payload.time;

            return {
                ...state,
                scheduleList: [...scheduleTimeTemp],
            }

        case SET_SCHEDULE_DETAIL:

            // ใส่รายละเอียดที่นัด

            console.log(action.payload, "reducer");
            var scheduleDetailTemp = state.scheduleList;
            scheduleDetailTemp[action.payload.id].detail = action.payload.detail;

            return {
                ...state,
                scheduleList: [...scheduleDetailTemp],
            }

        case SET_SCHEDULE_MEMBER:

            // ใส่รายชื่อเพื่อนที่นัด

            console.log(action.payload, "reducer");
            var scheduleMemberTemp = state.scheduleList;
            scheduleMemberTemp[action.payload.id].member = action.payload.member;

            return {
                ...state,
                scheduleList: [...scheduleMemberTemp],
            }

        default:
            return state;
    }
}