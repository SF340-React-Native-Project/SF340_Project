import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

//redux stuff
import { getData } from "../redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'
import { addFood, calculate } from '../redux/actions/dataActions'

import Foodname from '../components/Foodname';


const Food = ({ navigation }) => {
  const dispatch = useDispatch();
  const foodList = useSelector(state => state.data)

  const [food, setFood] = useState();


  const handleAddTask = () => {
    if (food !== null && food.length > 0) {
      Keyboard.dismiss();
      dispatch(addFood(food))
    }
    setFood(null);
  }

  const toCalculate = () => {
    dispatch(calculate())
    navigation.navigate('Calculated')
  }

  const loopFoods = () => {
    const foods = [];

    foodList.foodList.map((item, index) =>
      foods.push(
        <TouchableOpacity key={index} onPress={() => { navigation.navigate('Price', { foodname: item.foodname, member: item.member, price: item.price, id: item.id }); }}>
          <Foodname foodname={item.foodname} price={item.price} />
        </TouchableOpacity>
      )
    )
    return foods;
  }

  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Food</Text>
          <View style={styles.items}>
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
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={' Enter name'} value={food} onChangeText={text => setFood(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text> Game </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => toCalculate()}>
        <Text style={{ paddingLeft: 320 }}> Calculate </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

export default Food;