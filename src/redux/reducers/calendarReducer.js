import { ADD_SCHEDULE } from '../types'

const initialState = {
    scheduleList: [],

    // calendarList: [{ 'id': 0, 'day': '13 March 2022', 'time': '10.00', 'detail': 'ไปก้ำกึ่ง', 'member': { "wonyus": 1, "macdecade": 1, "man": 0, "poom": 1 } }, { 'id': 0, 'day': '13 March 2022', 'time': '10.00', 'detail': 'ไปก้ำกึ่ง', 'member': { "wonyus": 1, "macdecade": 1, "man": 0, "poom": 1 } }],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_SCHEDULE:
            // เพิ่มรายการนัดหมาย

            // var setScheduleTemp = {}
            // state.nameList.forEach(e => {
            //     setScheduleTemp[e] = 0
            // });
            // console.log(setScheduleTemp);

            var addScheduleTemp = [...state.scheduleList, { 'id': state.foodList.length, 'day': '', 'time': '', 'detail': '', 'member': '' }]


            console.log(addScheduleTemp);
            return {
                ...state,
                scheduleList: addScheduleTemp,
            }
        default:
            return state;
    }
}