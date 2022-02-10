import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NameForPrice = (props) => {

  return (
    <Text style={styles.itemText}>{props.text}</Text>
  )
}

const styles = StyleSheet.create({
  itemText: {
    maxWidth: '80%',
  },
});

export default NameForPrice;