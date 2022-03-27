import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Foodname = (props) => {
  console.log(props, 'foodname')
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circular}></View>
        <Text style={styles.itemText}>{props.foodname}</Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.itemText}>{props.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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