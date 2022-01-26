import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { NameForPrice } from '../components/NameForPrice';
import { RefreshForPrice } from './RefreshForPrice';
import { Food } from "./Food";

const Price = ({ route, navigation }) => {
  const { text, name, dataPrice } = route.params;

  var forLoopName = [];

  // Test Poom 500 Ing 500 A 40 B 540 C 40

  var showPrice = 0;

  const [price, setPrice] = useState(0);

  const data = [text, price, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const switchPrice = (i) => {
    if (data[i] == 0) {
      data[i] = 1;
    } else {
      data[i] = 0;
    };
    if (price == 0) {
      data[1] = showPrice;
    };
    navigation.navigate('RefreshForPrice', { data: data, poom: 1, dataPrice: dataPrice });
  }

  const goBlack = () => {
    if (price == 0) {
      data[1] = showPrice;
    };
    navigation.navigate('Food', { data: data, poom: 1 })
  }

  for (let i = 0; i < dataPrice.length; i++) {
    if (dataPrice[i][0] == data[0]) {
      showPrice = dataPrice[i][1];
      for (let j = 0; j < 9; j++) {
        data[j + 2] = dataPrice[i][j + 2];
      };
    }
  };

  // /Test

  for (let i = 0; i < name.length; i++) {
    var num = i + 2;

    var colorBg = 'rgba(52, 52, 52, 0.2)';

    if (data[i + 2] == 1) {
      colorBg = 'green';
    };
    {/* actions */ }
    forLoopName.push(
      <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={() => switchPrice(i + 2)}>
        <View style={{
          backgroundColor: colorBg,
          padding: 15,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <NameForPrice text={name[i]} />
          </View>
          <View style={styles.circular}></View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.sectionTitle} > Food name: {text}</Text>
        <Text style={styles.sectionTitle1} > Food price: {showPrice}</Text>


        <TextInput
          style={styles.input}
          placeholder='1500'
          keyboardType='numeric'
          onChangeText={(val) => setPrice(val)} />

        <View style={{ paddingTop: 20 }}></View>
        <View>
          {forLoopName}
        </View>
        <TouchableOpacity onPress={() => goBlack()}>
          <Text> Save </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  sectionTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    width: 200,
  },
});

export default Price;