import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { useSelector, useDispatch } from 'react-redux';
import { deleteFood, editFood } from '../redux/actions/dataActions';




const Foodname = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.theme);

  const handleDeleteFood = (id) => {
    dispatch(deleteFood(id));
  };

  let swipeBtnsRight = [{
    text: 'Delete',
    backgroundColor: 'red',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => { handleDeleteFood(props.idx) }
  }];

  let swipeBtnsLeft = [{
    text: 'Edit',
    backgroundColor: 'green',
    underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
    onPress: () => { props.navigation.navigate('Price', { foodname: props.foodname, member: props.member, price: props.price, id: props.idx }) }
  }];

  return (

    <View style={styles(theme).item}>
      <Swipeout
        right={swipeBtnsRight}
        left={swipeBtnsLeft}
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
    borderColor: theme.border.pri210, // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    shadowColor: "#A540FF", // *** Color ***
    elevation: 50,
    marginBottom: 15,
    justifyContent: 'space-between',


  },
  itemLeft: {
    marginLeft: 10,
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
    borderRadius: 100,
    marginRight: 10,
  },
  itemText: {
    fontFamily: 'ZenKurenaido-Regular',
    fontSize: 25,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Foodname;