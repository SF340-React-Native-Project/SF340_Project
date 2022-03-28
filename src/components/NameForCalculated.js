import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const NameForCalculated = (props) => {
  const { theme } = useSelector(state => state.theme);
  
  return (
    <View style={styles(theme).item}>
      <View style={styles(theme).itemLeft}>
        <View style={styles(theme).circular}></View>
        <Text style={styles(theme).itemText}>{props.text}</Text>
      </View>
      <Text style={styles(theme).itemText}>{props.price}</Text>
    </View>
  )
}


const styles = (theme) => StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  circular: {
    width: 15,
    height: 15,
    backgroundColor: '#7B68EE', // *** Color ***
    opacity: 0.4,
    borderRadius: 100,
    marginRight: 10,
  },
  itemText: {
    maxWidth: '80%',
    fontWeight: 'bold',
    color: '#FF3CBE', // *** Color ***
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default NameForCalculated;