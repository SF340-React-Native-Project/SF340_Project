import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { useSelector, useDispatch } from 'react-redux';

const CalendarList = (props) => {
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.theme);

    const date = '2022-04-04';
    const time = '10.00';
    const ampm = 'pm';
    const detail = 'ไปก้ำกึ่ง';
    const member = 'Poom, Won, Pancake, Tawan';
    // const member = 'Poom, Won, Pancake, Tawan, Poom, Won, Pancake, Tawan, Poom, Won, Pancake, Tawan, Poom, Won, Pancake, Tawan';
  
    return (
  
      <View style={styles(theme).item}>
            <View style={styles(theme).container}>
                <View style={styles(theme).row}>
                    <Text style={styles(theme).itemText}>Date: {date}</Text>
                </View>
            </View>

            <View style={styles(theme).container}>
                <View style={styles(theme).row}>
                    <Text style={styles(theme).itemText}>Time: {time} {ampm}</Text>
                </View>
            </View>

            <View style={styles(theme).container}>
                <View style={styles(theme).row}>
                    <Text style={styles(theme).itemText}>Detail: {detail}</Text>
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
                    <Text style={styles(theme).itemText}>Member: {member}</Text>
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
        elevation: 110,
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