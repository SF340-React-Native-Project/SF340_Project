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
    borderColor: theme.border.pri210, // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
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
    backgroundColor: theme.text.pri100, // *** Color ***
    borderRadius: 100,
    marginRight: 10,
  },
  itemText: {

    fontFamily: 'ZenKurenaido-Regular',
    fontSize:25,
    color: theme.text.pri100, // *** Color ***
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    
  },
});

export default NameForCalculated;