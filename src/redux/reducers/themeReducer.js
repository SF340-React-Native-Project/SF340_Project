import { CHANGE_THEME } from "../types";

const initialState = {
    theme: {
        text: {
            pri100: '#FF3CBE',
            pri200: '#d61cff',
            pri300: '#10FF92',
            pri400: '#F7FA13',

        },
        textinput: {
            pri100: '#90EE90',

        },
        background: {
            pri100: '#0f232d',

        },
        border: {
            pri100: '#ffffff',
            pri200: '#FF3CBE',
            pri300: '#A540FF',
            pri400: '#F7FA13',


        },
        shadow: {
            pri100: '#f50abe',
            pri200: '#d61cff',
            pri300: '#A540FF',
            pri400: '#F7FA13',

        },
        
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, theme: action.theme };
        default:
            return state;
    }
};