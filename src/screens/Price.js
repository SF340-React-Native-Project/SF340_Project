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
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginBottom: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: 'bold',
              borderRadius: 15,
              borderColor: value === 0 ? theme.border.pri100 : theme.border.pri600,
              borderWidth: 2,
              borderStyle: 'dashed',
              color: theme.text.pri500, // *** Color ***
              marginBottom: 20,
            }}>
            <View style={styles(theme).itemLeft}>
              <View style={styles(theme).square}></View>
              <NameForPrice text={key} />
            </View>
            <View style={{
              width: 12,
              height: 12,
              borderColor: value === 0 ? theme.border.pri700 : theme.border.pri800, // *** Color ***
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
        <ScrollView><View>{LoopName()}</View></ScrollView>
        <TouchableOpacity onPress={() => goBlack()}>
          <Text style={styles(theme).saveButton}> Save </Text>
        </TouchableOpacity>
      </View>

  );
};

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
  },
  sectionTitle: {
    fontSize: 30,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 4,
    paddingLeft:20,
    paddingRight:100,
    paddingVertical:15,
    color: theme.text.pri100, // *** Color ***
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 80,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
  },
  textShow: {

    textAlign: 'left',
    fontSize: 25,
    color: theme.text.pri600, // *** Color ***
  },
  edit: {
    color: theme.text.pri700, // *** Color ***
    fontSize: 20,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 20,
    borderStyle: 'dashed',
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  input: {
    placeholder: theme.textinput.pri200, // *** Color ***
    marginLeft: 'auto',
    marginRight:'auto',
    marginTop:20,
    width: '80%',
    fontWeight: 'bold',
    borderRadius: 20,
    borderColor: theme.border.pri900, // *** Color ***
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
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 2,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    fontSize: 35,
    fontFamily: 'Neonderthaw-Regular',
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
    width: 300,
    height: 60,
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 22,
  },
});

export default Price;
