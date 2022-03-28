import { CHANGE_THEME } from '../types';

export const themeOptions = {
    '#2fbe74': {
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
    '#F7FA13': {
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
            pri100: '#A540FF',

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
    '#d61cff': {
        pri100: '#ffffff',
        pri110: '#000000',
        pri200: '#0f232d',
        pri210: '#8A2BE2',
        pri220: '#7B68EE',
        pri230: '#A540FF',
        pri240: '#d61c51',
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
    },
};



export const changeTheme = (color) => (dispatch) => {
    console.log(color)
    dispatch(change_theme(color));
};

export const change_theme = (primaryColor) => (dispatch) => {
    console.log(primaryColor)
    dispatch({ type: CHANGE_THEME, theme: themeOptions[primaryColor] });
};