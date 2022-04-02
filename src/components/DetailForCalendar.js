import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList } from 'react-native-calendars';

//redux stuff
import { getData } from "../redux/actions/calendarActions"
import { useSelector, useDispatch } from 'react-redux'

const DetailForCalendar = ({ navigation }) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.theme);

    const [markedDates, setMarkedDates] = useState('');

    onDayPress = (day) => {
        const baseDate = '';
        this.baseDate = day.dateString;
        getMarkedDates(this.baseDate);
    }

    const getMarkedDates = (baseDate) => {
        console.log(baseDate);

        const markedDate = {};
        markedDate[baseDate] = { startingDay: true, endingDay: true, color: theme.border.pri600, textColor: theme.text.pri400 };
        setMarkedDates(markedDate);
    }

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).sectionTitle}> Calendar </Text>

            {/* date */}
            <View style={styles(theme).calendar}>
                <Calendar 
                    onDayPress={this.onDayPress}
                    markedDates={markedDates}
                    markingType={"period"}
                    theme={{
                        calendarBackground: theme.background.pri100,

                        monthTextColor: theme.text.pri200,
                        textMonthFontWeight: 'bold',

                        arrowColor: theme.border.pri700,

                        textSectionTitleColor: theme.text.pri100,

                        dayTextColor: theme.text.pri500,
                        textDisabledColor: theme.text.pri700,
                    }}
                />
            </View>

            {/* detail */}

            {/* button */}
            <View style={{ paddingTop: 20 }}></View>
            <TouchableOpacity onPress={() => navigation.navigate('CalendarList')}>
                <Text style={styles(theme).Add}> Add </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    Add: {
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 15,
        borderRadius: 15,
        borderColor: theme.border.pri400, // *** Color ***
        borderWidth: 2,
        color: theme.text.pri400, // *** Color ***
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
    calendar: {
        justifyContent: 'center',
    }
});

export default DetailForCalendar;