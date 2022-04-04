import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { useSelector, useDispatch } from 'react-redux';
import { deleteSchedule } from '../redux/actions/calendarActions';

const CalendarList = (props) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.theme);

    const handleDeleteSchedule = (id) => {
        dispatch(deleteSchedule(id));
    };
  
    return (
  
      <View style={styles(theme).item}>

            <View style={styles(theme).container}>
                <View style={styles(theme).itemLeft}>
                    <View style={styles(theme).row}>
                        <Text style={styles(theme).itemText}>Date: {props.day}</Text>
                    </View>
                </View>
                <View style={styles(theme).itemRight}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('CalendarDetail', {id: props.id, day: props.day, time: props.time, detail: props.detail, member: props.member })}>
                        <Text style={styles(theme).itemText}>Edit  </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles(theme).container}>
                <View style={styles(theme).itemLeft}>
                    <View style={styles(theme).row}>
                        <Text style={styles(theme).itemText}>Time: {props.time}</Text>
                    </View>
                </View>
                <View style={styles(theme).itemRight}>
                    <TouchableOpacity onPress={() => handleDeleteSchedule(props.id)}>
                        <Text style={styles(theme).itemText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles(theme).container}>
                <View style={styles(theme).row}>
                    <Text style={styles(theme).itemText}>Detail: {props.detail}</Text>
                </View>
            </View>

            {/* space */}
            <View style={styles(theme).container}>
                <View style={styles(theme).row}>
                    <Text style={styles(theme).itemText}></Text>
                </View>
            </View>

            <View style={styles(theme).container}>
                <View style={styles(theme).row}>
                    <Text style={styles(theme).itemText}>Member: {props.member}</Text>
                </View>
            </View>
      </View >
  
    )
  }
  
  const styles = (theme) => StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    item: {
        padding: 10,
        borderRadius: 15,
        borderColor: '#CCFF33', // *** Color ***
        borderWidth: 2,
        borderStyle: 'dashed',
        color: '#90EE90', // *** Color ***
        shadowColor: "#A540FF", // *** Color ***
        // elevation: 110,
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    row: {
        marginLeft: 10,
    },
    itemText: {
        padding: 5,
        fontFamily: 'ZenKurenaido-Regular',
        fontSize: 18,
        color: '#90EE90', // *** Color ***
        textAlign: 'center',
        textShadowColor: '#f50abe', // *** Color ***
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 10,
    },
  });
  
  export default CalendarList;