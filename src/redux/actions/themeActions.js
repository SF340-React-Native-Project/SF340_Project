import { CHANGE_THEME } from '../types';

export const themeOptions = {
    '#2fbe74': {
        pri50: '#6bd8ff',
        pri500: '#fff',
        pri700: '#0A214A',
        pri800: '#e66900',
        sec700: '#e3eeff',
        sec900: 'black',
    },
    '#8b50da': {
        pri50: '#f0e7fa',
        pri500: '#752dd3',
        pri700: '#5d1ec4',
        pri800: '#4f17bd',
        sec700: '#679f00',
        sec900: '#256b00',
    },
    '#f69400': {
        pri50: '#fef2e0',
        pri500: '#f28800',
        pri700: '#e66900',
        pri800: '#dd4f00',
        sec700: '#0062f6',
        sec900: '#203ed7',
    },
    '#000000': {
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