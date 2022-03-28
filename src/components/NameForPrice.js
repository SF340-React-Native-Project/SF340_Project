import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const NameForPrice = (props) => {
  const { theme } = useSelector(state => state.theme);
  return (
    <Text style={styles.itemText}>{props.text}</Text>
  )
}

const styles = (theme) => StyleSheet.create({
  itemText: {
    maxWidth: '80%',
    fontWeight: 'bold',
    color: '#FF3CBE', // *** Color ***
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

export default NameForPrice;