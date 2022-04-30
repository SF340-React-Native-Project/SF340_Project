import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { useSelector, useDispatch } from 'react-redux';
import { deleteFood, editFood } from '../redux/actions/dataActions';

const NameForSuggestion = (props) => {

    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.theme);
 

    return (
        <View style={styles(theme).container}>
            
                <View style={styles(theme).item}>
                    <View style={styles(theme).itemLeft}>
                        <View style={styles(theme).circular}></View>
                        <View>
                            <Text style={styles(theme).seggestmenu}>{props.name}</Text>
                        </View>
                    </View>
                </View>
            
        </View >
    )

}

const styles = (theme) => StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    item: {
        marginHorizontal:25,
        borderRadius: 15,
        borderColor: theme.border.pri210, // *** Color ***
        borderWidth: 2,
        borderStyle: 'dashed',
        marginBottom: 15,
        justifyContent: 'space-between',
    },
    itemLeft: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    circular: {
        width: 15,
        height: 15,
        backgroundColor: theme.border.pri210, // *** Color ***
        borderRadius: 100,

    },
    seggestmenu:{
        marginLeft:5,
        padding: 10,
        fontFamily: 'ZenKurenaido-Regular',
        fontSize: 20,
        color: theme.text.pri100, // *** Color ***
      }
});

export default NameForSuggestion;
