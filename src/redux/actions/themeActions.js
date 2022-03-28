import { CHANGE_THEME } from '../types';

export const themeOptions = {
    '#2fbe74': {
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
    },
    '#d61cff': {
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
    },
    '#000000': {
        pri0: '#000000',
        pri50: '#f5f5f5',
        pri500: '#555555',
        pri700: '#262626',
        pri800: '#000000',
        sec700: '#434343',
        sec900: '#000000',
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