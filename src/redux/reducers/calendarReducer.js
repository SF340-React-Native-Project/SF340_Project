import { Value } from 'react-native-reanimated';
import { ADD_DAY_CALENDAR } from '../types'

const initialState = {
    calendarList: [],

    // calendarList: [{ 'id': 0, 'day': '13 March 2022', 'time': '10.00', 'detail': 'ไปก้ำกึ่ง', 'member': { "wonyus": 1, "macdecade": 1, "man": 0, "poom": 1 } }, { 'id': 0, 'day': '13 March 2022', 'time': '10.00', 'detail': 'ไปก้ำกึ่ง', 'member': { "wonyus": 1, "macdecade": 1, "man": 0, "poom": 1 } }],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_DAY_CALENDAR:
            // เพิ่มรายนัด

            var addCalendarTeme = [...state.calendarList, { 'id': state.calendarList.length, 'day': '13 March 2022', 'time': '10.00', 'detail': 'ไปก้ำกึ่ง' }]

            return {
                ...state,
                calendarList: addCalendarTeme,
            }
    }
}