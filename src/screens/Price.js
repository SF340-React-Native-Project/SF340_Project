import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

//redux stuff

import { useDispatch, useSelector } from 'react-redux'
import { setMemberValue, setFoodPrice } from '../redux/actions/dataActions'

import NameForPrice from '../components/NameForPrice';


const Price = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const foodList = useSelector(state => state.data.foodList);
  const { foodname, member, price, id } = route.params;

  const [newprice, setNewprice] = useState(0)

  

  const handleTouchPrice = (name) => {
    dispatch(setMemberValue(id, name))
  }

  const goBlack = () => {
    if (newprice > 0) {
      dispatch(setFoodPrice(id, newprice))
    }

    navigation.navigate('Food')
  }

  const LoopName = () => {
    var forLoopName = [];

    for (const [key, value] of Object.entries(member)) {
      forLoopName.push(
        <TouchableOpacity key={key} style={{ paddingHorizontal: 20 }} onPress={() => handleTouchPrice(key)}>
          <View style={{
            backgroundColor: value === 0 ? 'rgba(52, 52, 52, 0.2)' : 'green',
            padding: 15,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
            <View style={styles.itemLeft}>
              <View style={styles.square}></View>
              <NameForPrice text={key} />
            </View>
            <View style={styles.circular}></View>
          </View>
        </TouchableOpacity>)
    }

    return (forLoopName);
  }

  return (
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.sectionTitle} > Food name: {foodname}</Text>
        <Text style={styles.sectionTitle1} > Food price: {price}</Text>


        <TextInput
          style={styles.input}
          placeholder='1500'
          keyboardType='numeric'
          onChangeText={(val) => setNewprice(val)}
        />

        <View style={{ paddingTop: 20 }}></View>
        <View>
          {LoopName()}
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