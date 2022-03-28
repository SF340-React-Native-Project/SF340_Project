import { CHANGE_THEME } from "../types";

const initialState = {
    theme: {
        pri100: '#ffffff',
        pri110: '#000000',
        pri200: '#0f232d',
        pri210: '#8A2BE2',
        pri220: '#7B68EE',
        pri230: '#A540FF',
        pri240: '#d61cff',
        pri300: '#FF0000',
        pri310: '#DC143C',
        pri320: '#FF2281',
        pri330: '#f50abe',
        pri340: '#FF3CBE',
        pri400: '#D2691E',
        pri410: '#f2c504',
        pri420: '#F7FA13',
        pri430: '#CCFF33',
        pri500: '#32CD32',
        pri510: '#90EE90',
        pri520: '#10FF92',
        pri530: '#0CF4FF',
    }
};

export default function(state = initialState, action){
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, theme: action.theme };
        default:
            return state;
    }
};