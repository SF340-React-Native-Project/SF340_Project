import { CHANGE_THEME } from "../types";

const initialState = {
    theme: {
        text: {
            pri100: '#FF3CBE',
            pri200: '#d61cff',
            pri300: '#10FF92',
            pri400: '#F7FA13',
            pri500: '#90EE90',
            pri600: '#ffffff',
            pri700: '#FF2281',
            pri800: '#f2c504',
            pri900: '#FF0000',

        },
        textinput: {
            pri100: '#90EE90',
            pri200: '#ffffff',

        },
        background: {
            pri100: '#0f232d',

        },
        border: {
            pri100: '#ffffff',
            pri200: '#FF3CBE',
            pri300: '#A540FF',
            pri400: '#F7FA13',
            pri500: '#CCFF33',
            pri600: '#7B68EE',
            pri700: '#DC143C',
            pri800: '#32CD32',
            pri900: '#8A2BE2',
            pri110: '#FF0000',

        },
        shadow: {
            pri100: '#f50abe',
            pri200: '#d61cff',
            pri300: '#A540FF',
            pri400: '#F7FA13',
            pri500: '#D2691E',

        },
        wheel: [
            '#f50abe',
            '#d61cff',
            '#A540FF',
            '#F7FA13',
            '#D2691E',
        ],
        
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