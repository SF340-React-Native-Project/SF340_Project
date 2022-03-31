import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const NameForPrice = (props) => {
  const { theme } = useSelector(state => state.theme);
  return (
    <Text style={styles(theme).itemText}>{props.text}</Text>
  )
}

const styles = (theme) => StyleSheet.create({
  itemText: {
    fontFamily: 'ZenKurenaido-Regular',
    fontSize:25,
    color: '#90EE90', // *** Color ***
    textAlign: 'center',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
});

export default NameForPrice;