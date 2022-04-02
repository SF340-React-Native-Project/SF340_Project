import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

//redux stuff
import { getData } from "../redux/actions/calendarActions"
import { useSelector, useDispatch } from 'react-redux'
// import { addDay } from '../redux/actions/calendarActions'

import DetailForCalendar from '../components/DetailForCalendar';

import CalendarList from '../components/CalendarList';

const Calendar = ({ navigation }) => {
    const dispatch = useDispatch();
    // const { calendarList } = useSelector(state => state.calendar)
    const { theme } = useSelector(state => state.theme);

    const [showBtn, setShowBtn] = useState(true);

    // const loopCaleadar = () => {
    //     const calendar = [];
    
    //     calendarList && calendarList.map((item, index) =>
    //     calendar.push(
    //         <TouchableOpacity>
    //           <CalendarList />
    //         </TouchableOpacity>
    //       )
    //     )
    //     return calendar;
    // }

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).sectionTitle}> Calendar </Text>

            <View style={styles(theme).tasksWrapper}>
                <View style={styles(theme).items}>

                    {/* calendar list here */}
                    <TouchableOpacity>
                        <CalendarList />
                    </TouchableOpacity>

                </View>
            </View>

            {showBtn ? (<View style={styles(theme).bottombar}>
                <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles(theme).Back}> Back </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('CalendarDetail')}>
                    <Text style={styles(theme).Add}> Add </Text>
                </TouchableOpacity>
            </View>) : (<></>)}
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    Back: {
        fontSize: 15,
        borderRadius: 15,
        borderColor: theme.border.pri500, // *** Color ***
        borderWidth: 2,
        color: theme.text.pri500, // *** Color ***
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 18,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
    Add: {
        fontSize: 15,
        borderRadius: 15,
        borderColor: theme.border.pri500, // *** Color ***
        borderWidth: 2,
        color: theme.text.pri500, // *** Color ***
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 18,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
    },
    container: {
        flex: 1,
        backgroundColor: theme.background.pri100, // *** Color ***
    },
    tasksWrapper: {
        paddingTop: 5,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'ZenKurenaido-Regular',
        borderRadius: 15,
        borderColor: theme.border.pri200, // *** Color ***
        borderWidth: 3,
        color: theme.text.pri400, // *** Color ***
        textAlign: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 67,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
        letterSpacing: 3,
        borderStyle: 'dashed',
    },
    items: {
        color: 'black', // *** Color ***
        marginTop: 15,
    },
    bottombar: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default Calendar;