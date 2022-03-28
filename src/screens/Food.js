import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

//redux stuff
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'
import { addFood, calculate } from '../redux/actions/dataActions'

import Foodname from '../components/Foodname';


const Food = ({ navigation }) => {
  const dispatch = useDispatch();
  const { foodList } = useSelector(state => state.data)
  const { theme } = useSelector(state => state.theme);

  const [food, setFood] = useState();

  const handleAddTask = () => {
    if (food !== null && food.length > 0) {
      Keyboard.dismiss();
      dispatch(addFood(food))
    }
    setFood(null);
  }

  const toCalculate = () => {
    navigation.navigate('Calculated')
  }


  const loopFoods = () => {
    const foods = [];

    foodList.map((item, index) =>
      foods.push(
        <TouchableOpacity key={index} onPress={() => { navigation.navigate('Price', { foodname: item.foodname, member: item.member, price: item.price, id: item.id }); }}>
          <Foodname foodname={item.foodname} price={item.price} />
        </TouchableOpacity>
      )
    )
    return foods;
  }

  return (
    <View style={styles(theme).container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Today's Tasks */}
        <View style={styles(theme).tasksWrapper}>
          <Text style={styles(theme).sectionTitle}>Food Items</Text>
          <View style={styles(theme).items}>
            {/* This is where the tasks will go! */}
            {loopFoods()}
          </View>
        </View>

        {/* {foodList.foodList} */}

      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles(theme).writeTaskWrapper}
      >
        <TextInput
          style={styles(theme).input}
          placeholder={'Enter food name'}
          placeholderTextColor={'#90EE90'} // *** Color ***
          value={food}
          onChangeText={text => setFood(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles(theme).addWrapper}>
            <Text style={styles(theme).addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


      <View style={styles(theme).bottombar}>
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
          <Text style={styles(theme).Game}> Game </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toCalculate()}>
          <Text style={styles(theme).Calculated}> Calculate </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = (theme) => StyleSheet.create({
  Game: {
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 18,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  Calculated: {
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 18,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
  },
  tasksWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
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
    textAlign: 'center',
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#A540FF', // *** Color ***
    elevation: 67,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  items: {
    color: 'black', // *** Color ***
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 20,
    borderRadius: 60,
    borderColor: 'white', // *** Color ***
    borderWidth: 3,
    width: 250,
    color: '#90EE90', // *** Color ***
  },
  addWrapper: {
    width: 60,
    height: 60,
    color: '#0CF4FF', // *** Color ***
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#A540FF', // *** Color ***
    borderWidth: 5,
  },
  toggleAdd: {
    bottom: 15,
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 2,
    color: '#FF3CBE', // *** Color ***
    textAlign: 'center',
    width: 300,
    height: 60,
    fontSize: 40,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: '#A540FF', // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 55,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 15,
  },
  toggleButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addText: {
    fontSize: 35,
    color: '#10FF92', // *** Color ***
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  bottombar: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Food;