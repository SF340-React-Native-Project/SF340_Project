import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

//redux stuff

import { useDispatch, useSelector } from 'react-redux';
import {
  setMemberValue,
  setFoodPrice,
  calculate,
} from '../redux/actions/dataActions';

import NameForPrice from '../components/NameForPrice';

const Price = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const foodList = useSelector(state => state.data.foodList);
  const { theme } = useSelector(state => state.theme);
  const { foodname, member, price, id } = route.params;

  const [newprice, setNewprice] = useState(0);

  const handleTouchPrice = name => {
    dispatch(setMemberValue(id, name));
    dispatch(calculate());
  };

  const goBlack = () => {
    if (newprice > 0) {
      dispatch(setFoodPrice(id, newprice));
    }

    navigation.navigate('FoodList');
  };

  const setPrice = val => {
    dispatch(setFoodPrice(id, val));
    // setNewprice(val)
    dispatch(calculate());
  };

  const LoopName = () => {
    var forLoopName = [];

    for (const [key, value] of Object.entries(member)) {
      forLoopName.push(
        <TouchableOpacity
          key={key}
          style={{ paddingHorizontal: 20 }}
          onPress={() => handleTouchPrice(key)}>
          <View
            style={{
              padding: 15,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 10,
              fontSize: 15,
              fontWeight: 'bold',
              borderRadius: 15,
              borderColor: value === 0 ? '#ffffff' : '#7B68EE',
              borderWidth: 2,
              borderStyle: 'dashed',
              color: '#90EE90', // *** Color ***
              marginBottom: 20,
            }}>
            <View style={styles(theme).itemLeft}>
              <View style={styles(theme).square}></View>
              <NameForPrice text={key} />
            </View>
            <View style={{
              width: 12,
              height: 12,
              borderColor: value === 0 ? '#DC143C' : '#32CD32', // *** Color ***
              borderWidth: 3.5,
              borderRadius: 15,
            }}></View>
          </View>
        </TouchableOpacity>,
      );
    }

    return forLoopName;
  };

  return (
    <ScrollView>
      <View style={styles(theme).container}>
        <Text style={styles(theme).sectionTitle}>
          {''} Name: <Text style={styles(theme).textShow}>{foodname}</Text>
          {'\n'} Price: <Text style={styles(theme).textShow}>{price}</Text>
        </Text>

        <TextInput
          style={styles(theme).input}
          placeholder="Enter amount"
          placeholderTextColor={'white'}
          keyboardType="numeric"
          onChangeText={val => setPrice(val)}
        />

        <View style={{ paddingTop: 20 }}></View>
        <View>{LoopName()}</View>
        <TouchableOpacity onPress={() => goBlack()}>
          <Text style={styles(theme).saveButton}> Save </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = (theme) => StyleSheet.create({
  container: {
    height: 720,
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
  },
  sectionTitle: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 4,
    borderStyle: 'dashed',
    color: '#FF3CBE', // *** Color ***
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 80,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
  },
  textShow: {
    fontSize: 25,
    color: '#FFFFFF', // *** Color ***
  },
  edit: {
    color: '#FF2281', // *** Color ***
    fontSize: 20,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 20,
    borderStyle: 'dashed',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  input: {
    placeholder: '#FFFFFF', // *** Color ***
    padding: 5,
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 25,
    marginLeft: 20,
    marginRight: 'auto',
    width: 200,
    fontWeight: 'bold',
    borderRadius: 10,
    borderColor: '#8A2BE2', // *** Color ***
    borderWidth: 2,
    color: 'white', // *** Color ***
    textAlign: 'center',
    alignContent: 'center',
  },
  itemLeft: {
    width: 70,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 15,
  },
  saveButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 2,
    color: '#FF3CBE', // *** Color ***
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Neonderthaw-Regular',
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
    width: 300,
    height: 60,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 22,
  },
});

export default Price;
