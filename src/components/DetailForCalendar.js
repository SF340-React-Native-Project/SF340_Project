import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList } from 'react-native-calendars';

//redux stuff
import { getData } from "../redux/actions/calendarActions"
import { useSelector, useDispatch } from 'react-redux'

const DetailForCalendar = ({ navigation }) => {
    state = {
        markedDates: {'2022-04-04': {startingDay: true, color: '#00B0BF', textColor: '#FFFFFF'}},
    }

    onDayPress = (day) => {
        console.log(day);

        
    }

    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.theme);

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).sectionTitle}> Calendar </Text>

            {/* date */}
            <Calendar 
                onDayPress={this.onDayPress}
                markedDates={{"2022-04-04": { startingDay: true, endingDay: true, color: '#00adf5', textColor: '#2e2e2e' }}}
                // markedDates={{: { startingDay: true, endingDay: true, color: '#00adf5', textColor: '#2e2e2e' }}}
                markingType={"period"}
            />
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
      paddingTop: 15,
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
      marginTop: 30,
    },
    writeTaskWrapper: {
      marginTop: 15,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      marginBottom: 10,
      paddingLeft: 20,
      fontFamily: 'ZenKurenaido-Regular',
      fontSize: 20,
      borderRadius: 60,
      borderColor: 'white', // *** Color ***
      borderWidth: 2,
      width: 250,
      color: theme.textinput.pri100, // *** Color ***
    },
    addWrapper: {
      marginBottom: 10,
      width: 60,
      height: 60,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.border.pri300, // *** Color ***
      borderWidth: 5,
    },
    toggleAdd: {
      bottom: 15,
      borderRadius: 15,
      borderColor: theme.border.pri200, // *** Color ***
      borderWidth: 2,
      color: theme.text.pri100, // *** Color ***
      textAlign: 'center',
      width: 300,
      height: 60,
      fontSize: 40,
      fontFamily: 'Neonderthaw-Regular',
      shadowColor: theme.border.pri300, // *** Color ***
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 5,
      shadowRadius: 16.0,
      elevation: 55,
      textShadowColor: theme.shadow.pri100, // *** Color ***
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 15,
    },
    toggleButton: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    addText: {
      marginBottom: 10,
      fontSize: 35,
      color: theme.text.pri300, // *** Color ***
      textShadowColor: theme.shadow.pri100, // *** Color ***
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 10,
    },
    bottombar: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
});

export default DetailForCalendar;