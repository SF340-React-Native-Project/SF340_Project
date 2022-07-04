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
    <View style={styles(theme).container}>
      <View style={styles(theme).item}>
        <Swipeout
          right={swipeBtnsRight}
          left={swipeBtnsLeft}
          autoClose={true}
          backgroundColor='transparent'
          style={styles(theme).btndelete}
        >
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Price',
                {
                  foodname: props.foodname,
                  member: props.member,
                  price: props.price,
                  id: props.idx
                })
            }} >
            <View style={styles(theme).containerText}>
              <View style={styles(theme).itemLeft}>
                <View style={styles(theme).circular}></View>
                <Text style={styles(theme).seggestmenu}>{props.foodname}</Text>
              </View>
              <Text style={styles(theme).price}>{props.price}</Text>
            </View>
          </TouchableOpacity>
        </Swipeout>
      </View >
    </View>

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
  containerText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item: {
    marginHorizontal: 20,
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
  },
  price: {
    alignSelf: 'flex-end',
    marginLeft: 5,
    padding: 10,
    fontFamily: 'ZenKurenaido-Regular',
    fontSize: 20,
    color: theme.text.pri100, // *** Color ***
  }
});

export default Foodname;