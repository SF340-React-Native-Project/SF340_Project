import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { useSelector, useDispatch } from 'react-redux';
import { deleteFood, editFood } from '../redux/actions/dataActions';




const Foodname = (props) => {
  console.log(props, 'foodname')
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const handleDeleteFood = (id) => {
    dispatch(deleteFood(id));
  };

  let swipeBtns = [{
    text: 'Delete',
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => { handleDeleteFood(props.idx) }
  }];

  return (

    <View style={styles(theme).item}>
      <Swipeout right={swipeBtns}
        autoClose={true}
        backgroundColor='transparent'
        style={styles(theme).btndelete}
      >
        <View style={styles(theme).container}>
          <View style={styles(theme).itemLeft}>
            <View style={styles(theme).circular}></View>
            <View>
              <Text style={styles(theme).itemText}>{props.foodname}</Text>
            </View>
          </View>
          <View style={styles(theme).itemRight}>
            <Text style={styles(theme).itemText}>{props.price}</Text>
          </View>
        </View>


      </Swipeout>
    </View >

  )
}

const styles = (theme) => StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  btndelete: {
    borderRadius: 10,
    borderWidth: 0,
  },
  item: {
    padding: 10,
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    shadowColor: "#A540FF", // *** Color ***
    elevation: 50,
    marginBottom: 15,
    justifyContent: 'space-between',


  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemRight: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
  circular: {
    width: 15,
    height: 15,
    backgroundColor: '#FF3CBE', // *** Color ***
    opacity: 0.4,
    borderRadius: 100,
    marginRight: 10,
  },
  itemText: {
    fontFamily: 'ZenKurenaido-Regular',
    fontSize: 25,
    color: '#90EE90', // *** Color ***
    textAlign: 'center',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Foodname;