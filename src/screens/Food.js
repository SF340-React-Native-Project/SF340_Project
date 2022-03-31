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

  const [food, setFood] = useState('');
  const [showBtn, setShowBtn] = useState(true);

  const handleAddTask = () => {
    if (food !== '' && food.length > 0) {
      Keyboard.dismiss();
      dispatch(addFood(food))
    }
    setFood('');
  }

  const toCalculate = () => {
    navigation.navigate('Calculated')
  }


  const loopFoods = () => {
    const foods = [];

    foodList && foodList.map((item, index) =>
      foods.push(
        <TouchableOpacity key={index} onPress={() => { navigation.navigate('Price', { foodname: item.foodname, member: item.member, price: item.price, id: item.id }); }}>
          <Foodname foodname={item.foodname} price={item.price} idx={item.id} member={item.member} navigation={navigation} />
        </TouchableOpacity>
      )
    )
    return foods;
  }

  return (
    <View style={styles(theme).container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <Text style={styles(theme).sectionTitle}>Food Items</Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

        {/* Today's Tasks */}

        {/* {foodList.foodList} */}
        <View style={styles(theme).tasksWrapper}>
          <View style={styles(theme).items}>
            {/* This is where the tasks will go! */}
            {loopFoods()}
          </View>
        </View>

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
          onPressIn={() => { setShowBtn(false) }}
          onEndEditing={() => { setShowBtn(true) }}
          onChangeText={text => setFood(text)} />
        {food.length > 0 ?
          (<TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles(theme).addWrapper}>
              <Text style={styles(theme).addText}>+</Text>
            </View>
          </TouchableOpacity>) : <></>}
      </KeyboardAvoidingView>

      {showBtn ? (<View style={styles(theme).bottombar}>
        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
          <Text style={styles(theme).Game}> Game </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toCalculate()}>
          <Text style={styles(theme).Calculated}> Calculate </Text>
        </TouchableOpacity>
      </View>) : (<></>)}

    </View>
  );
}

const styles = (theme) => StyleSheet.create({
  Game: {
    fontSize: 15,
    borderRadius: 15,
    borderColor: theme.border.pri500, // *** Color ***
    borderWidth: 2,
    color: theme.text.pri500, // *** Color ***
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 18,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  Calculated: {
    fontSize: 15,
    borderRadius: 15,
    borderColor: theme.border.pri500, // *** Color ***
    borderWidth: 2,
    color: theme.text.pri500, // *** Color ***
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 18,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: theme.background.pri100, // *** Color ***
  },
  tasksWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'ZenKurenaido-Regular',
    borderRadius: 15,
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 4,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 67,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  items: {
    color: 'black', // *** Color ***
    marginTop: 30,
  },
  writeTaskWrapper: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
    paddingLeft: 20,
    fontFamily: 'ZenKurenaido-Regular',
    fontSize: 20,
    borderRadius: 60,
    borderColor: 'white', // *** Color ***
    borderWidth: 2,
    width: 250,
    color: theme.textinput.pri100, // *** Color ***
  },
  addWrapper: {
    marginBottom: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.border.pri300, // *** Color ***
    borderWidth: 5,
  },
  toggleAdd: {
    bottom: 15,
    borderRadius: 15,
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 2,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    width: 300,
    height: 60,
    fontSize: 40,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: theme.border.pri300, // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 55,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 15,
  },
  toggleButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addText: {
    marginBottom: 10,
    fontSize: 35,
    color: theme.text.pri300, // *** Color ***
    textShadowColor: theme.shadow.pri100, // *** Color ***
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