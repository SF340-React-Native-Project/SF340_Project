import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList } from 'react-native-calendars';

//redux stuff
import { getData } from "../redux/actions/calendarActions"
import { useSelector, useDispatch } from 'react-redux'
import { setScheduleDate, setScheduleTime, setScheduleDetail, setScheduleMember } from '../redux/actions/calendarActions';

const DetailForCalendar = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.theme);

    const { id, day, time, detail, member } = route.params; 

    const [marked, setMarked] = useState(null);
    const [timeTemp, setTimeTemp] = useState(time);
    const [detailTemp, setDetailTemp] = useState(detail);
    const [memberTemp, setMemberTemp] = useState(member);

    const onDayPress = (day) => {
        getMarkedDates(day.dateString);
    }

    const getMarkedDates = (baseDate) => {

        dispatch(setScheduleDate(id, baseDate));

        const markedDate = {};
        markedDate[baseDate] = { startingDay: true, endingDay: true, color: theme.border.pri600, textColor: theme.text.pri400 };
        setMarked(markedDate);
    }

    const setTime = val => {
        setTimeTemp(val);
        dispatch(setScheduleTime(id, val));
    };

    const setDetail = val => {
        setDetailTemp(val);
        dispatch(setScheduleDetail(id, val));
    };

    const setMember = val => {
        setMemberTemp(val);
        dispatch(setScheduleMember(id, val));
    };

    const handleMarkedDates = () => {
        if (marked == null) {
            const markedDate = {};
            markedDate[day] = { startingDay: true, endingDay: true, color: theme.border.pri600, textColor: theme.text.pri400 };
            setMarked(markedDate);
        }
        return marked;
    }

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).sectionTitle}> Calendar </Text>

            <ScrollView>
                {/* date */}
                <View style={styles(theme).calendar}>
                    <Calendar 
                        onDayPress={onDayPress}
                        markedDates={handleMarkedDates()}
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
                <TextInput
                    style={styles(theme).inputTime}
                    value={timeTemp}
                    placeholder="Time"
                    placeholderTextColor={theme.text.pri100}
                    keyboardType="numeric"
                    onChangeText={val => setTime(val)}
                />
                <TextInput
                    style={styles(theme).inputDetail}
                    value={detailTemp}
                    placeholder="Detail"
                    placeholderTextColor={theme.text.pri100}
                    onChangeText={val => setDetail(val)}
                />

                {/* member */}
                <TextInput
                    style={styles(theme).inputDetail}
                    value={memberTemp}
                    placeholder="Member"
                    placeholderTextColor={theme.text.pri100}
                    onChangeText={val => setMember(val)}
                />

                {/* button */}
                <View style={{ paddingTop: 20 }}></View>
                <TouchableOpacity onPress={() => navigation.navigate('CalendarList')}>
                    <Text style={styles(theme).Add}> Add </Text>
                </TouchableOpacity>
            </ScrollView>
            

        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    Add: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 25,
        borderRadius: 15,
        borderColor: theme.border.pri210, // *** Color ***
        borderWidth: 2,
        color: theme.text.pri100, // *** Color ***
        textAlign: 'center',
        paddingHorizontal:100,
        paddingVertical:7,
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
        borderColor: theme.border.pri210, // *** Color ***
        borderWidth: 3,
        color: theme.text.pri100, // *** Color ***
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
    },
    inputTime: {
        fontFamily: 'ZenKurenaido-Regular',
        fontSize:25,
        marginLeft: 20,
        marginTop:20,
        width: '30%',
        borderRadius: 20,
        borderColor: theme.border.pri210, // *** Color ***
        borderWidth: 2,
        color: theme.text.pri100, // *** Color ***
        textAlign: 'center',
        alignContent: 'center',
    },
    inputDetail: {
        fontFamily: 'ZenKurenaido-Regular',
        fontSize:25,
        marginLeft: 20,
        marginTop:20,
        paddingLeft: 20,
        width: '90%',
        borderRadius: 20,
        color: theme.text.pri100,
        borderColor: theme.border.pri210, // *** Color ***
        borderWidth: 2,
        alignContent: 'center',
    },
});

export default DetailForCalendar;