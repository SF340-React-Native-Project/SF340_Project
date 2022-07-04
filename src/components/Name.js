import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { useSelector, useDispatch } from 'react-redux';
import { editName, deleteName } from '../redux/actions/dataActions';


const Name = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const handleDeleteName = name => {
    dispatch(deleteName(name));
  };

  let swipeBtns = [{
    text: 'Delete',
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => { handleDeleteName(props.text) }
  }];


  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).item}>
        <Swipeout right={swipeBtns}
          autoClose={true}
          backgroundColor='transparent'
          style={styles(theme).btndelete}
        >
          <TouchableOpacity
            disabled={true}
          >
            <View style={styles(theme).itemLeft}>
              <View style={styles(theme).circular} />
              <Text style={styles(theme).itemText}>{props.text}</Text>
            </View>
          </TouchableOpacity>
        </Swipeout>
      </View>
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  btndelete: {
    borderRadius: 10,
    borderWidth: 0,
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
    backgroundColor: theme.border.pri210, // *** Color ***
    opacity: 1,
    borderRadius: 100,
    marginRight: 10,
  },
  itemText: {
    marginLeft: 5,
    padding: 9,
    fontFamily: 'ZenKurenaido-Regular',
    fontSize: 25,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Name;