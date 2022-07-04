import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { useSelector, useDispatch } from 'react-redux';
import { deleteFriendSuggestion, deleteFoodSuggestion } from '../redux/actions/suggestionActions';

const NameForSuggestion = (props) => {
    const { data, navigation } = props
    const dispatch = useDispatch();
    const { theme } = useSelector(state => state.theme);

    const handleDelete = (value) => {
        if (value.type === 'friend') {
            dispatch(deleteFriendSuggestion(value));
        } else if (value.type === 'drink' || value.type === 'snack') {
            dispatch(deleteFoodSuggestion(value));
        }
    };

    let swipeBtns = [{
        text: 'Delete',
        backgroundColor: 'red',
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => { handleDelete({ type: data.type, idx: data.idx }) }
    }];

    return (
        <View style={styles(theme).container}>
            <View style={styles(theme).item}>
                <Swipeout
                    right={swipeBtns}
                    autoClose={true}
                    backgroundColor='transparent'
                    style={styles(theme).btndelete}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(
                                'Suggestion',
                                {
                                    screen: 'SuggestionDetail',
                                    params: {
                                        data: data
                                    }

                                })
                        }} >
                        <View style={styles(theme).itemLeft}>
                            <View style={styles(theme).circular}/>
                            <Text style={styles(theme).seggestmenu}>{data.name}</Text>
                        </View>
                    </TouchableOpacity>
                </Swipeout>
            </View>
        </View >
    )

}

const styles = (theme) => StyleSheet.create({
    btndelete: {
        borderRadius: 10,
        borderWidth: 0,
    },
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    item: {
        marginHorizontal: 25,
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
        backgroundColor: '#FF3CBE', // *** Color ***
        opacity: 0.4,
        borderRadius: 100,

    },
    seggestmenu: {
        marginLeft: 5,
        padding: 10,
        fontFamily: 'ZenKurenaido-Regular',
        fontSize: 20,
        color: theme.text.pri100, // *** Color ***
    }
});

export default NameForSuggestion;
