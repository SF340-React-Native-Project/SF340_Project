import { CHANGE_THEME } from '../types';

export const themeOptions = {
    'light': {
        name: "light",
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
            pri110: '#36F2F2',

            // theme.text.pri100: '#FF3CBE',   
            // theme.text.pri200: '#d61cff',
            // theme.text.pri300: '#10FF92',
            // theme.text.pri400: '#F7FA13',
            // theme.text.pri500: '#90EE90',
            // theme.text.pri600: '#ffffff',
            // theme.text.pri700: '#FF2281',
            // theme.text.pri800: '#f2c504',
            // theme.text.pri900: '#FF0000',

        },
        textinput: {
            pri100: '#90EE90',
            pri200: '#ffffff',
            pri300: '#36F2F2',
            pri400: '#FF3CBE',

            // theme.textinput.pri100: '#90EE90',
            // theme.textinput.pri200: '#ffffff',

        },
        background: {
            pri100: '#0f232d',

            // theme.background.pri100: '#0f232d',

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
            pri210: '#36F2F2',

            // theme.border.pri100: '#ffffff',
            // theme.border.pri200: '#FF3CBE',
            // theme.border.pri300: '#A540FF',
            // theme.border.pri400: '#F7FA13',
            // theme.border.pri500: '#CCFF33',
            // theme.border.pri600: '#7B68EE',
            // theme.border.pri700: '#DC143C',
            // theme.border.pri800: '#32CD32',
            // theme.border.pri900: '#8A2BE2',
            // theme.border.pri110: '#FF0000',

        },
        shadow: {
            pri100: '#f50abe',
            pri200: '#d61cff',
            pri300: '#A540FF',
            pri400: '#F7FA13',
            pri500: '#D2691E',
            pri600: '#36F2F2',
            pri700: '#FF3CBE',

            // theme.shadow.pri100: '#f50abe',
            // theme.shadow.pri200: '#d61cff',
            // theme.shadow.pri300: '#A540FF',
            // theme.shadow.pri400: '#F7FA13',
            // theme.shadow.pri500: '#D2691E',

        },
        wheel: [
            '#f50abe',
            '#d61cff',
            '#A540FF',
            '#36F2F2',
            '#D2691E',
        ],
    },
    'dark': {
        name:"dark",
        text: {
            pri100: '#F7FA13',
            pri200: '#d61cff',
            pri300: '#10FF92',
            pri400: '#FF3CBE',
            pri500: '#36F2F2',

        },
        textinput: {
            pri100: '#90EE90',
            pri200: '#36F2F2',

        },
        background: {
            pri100: '#0f232d',
            pri200: '#36F2F2',

        },
        border: {
            pri100: '#ffffff',
            pri200: '#FF3CBE',
            pri300: '#A540FF',
            pri400: '#F7FA13',
            pri500: '#36F2F2',
            pri700: '#FF0000',
            pri800: '#32CD32',
            pri210: '#d61cff',


        },
        shadow: {
            pri100: '#F7FA13',
            pri200: '#d61cff',
            pri300: '#A540FF',
            pri400: '#f50abe',
            pri500: '#36F2F2',

        },
        wheel: [
            '#f50abe',
            '#d61cff',
            '#A540FF',
            '#F7FA13',
            '#D2691E',

        ]
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


        // pri100: '#ffffff',
        // pri110: '#000000',
        // pri200: '#0f232d',
        // pri210: '#8A2BE2',
        // pri220: '#7B68EE',
        // pri230: '#A540FF',
        // pri240: '#d61c51',
        // pri300: '#FF0000',
        // pri310: '#DC143C',
        // pri320: '#FF2281',
        // pri330: '#f50abe',
        // pri340: '#FF3CBE',
        // pri400: '#D2691E',
        // pri410: '#f2c504',
        // pri420: '#F7FA13',
        // pri430: '#CCFF33',
        // pri500: '#32CD32',
        // pri510: '#90EE90',
        // pri520: '#10FF92',
        // pri530: '#0CF4FF',