import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';


const Foodname = (props) => {
  console.log(props, 'foodname')
  const { theme } = useSelector(state => state.theme);

  return (
    <View style={styles(theme).item}>
      <View style={styles(theme).itemLeft}>
        <View style={styles(theme).circular}></View>
        <Text style={styles(theme).itemText}>{props.foodname}</Text>
      </View>
      <View style={styles(theme).itemRight}>
        <Text style={styles(theme).itemText}>{props.price}</Text>
      </View>
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    shadowColor: "#A540FF", // *** Color ***
    elevation: 50,
    marginBottom: 15,
    flexDirection: 'row',



  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemRight: {
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
    marginRight: 10,
  },
  itemText: {
    color: '#90EE90', // *** Color ***
    textAlign: 'center',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Foodname;