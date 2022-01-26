import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import { Foodname } from '../components/Foodname';
import { Price } from "./Price";
import { Calculated } from "./Calculated";
import { Game } from "./Game";

const Food = ({ route, navigation }) => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const { name, dataPrice, data, poom } = route.params;

  var num = 0;
  var check = 0;

  var forLoopData = [];

  if (poom == 1) {
    for (let i = 0; i < dataPrice.length; i++) {
      if (dataPrice[i][0] != data[0]) {
        num += 1;
      } else {
        check = i;
      }
    };
    if (num == dataPrice.length) {
      dataPrice.push(data);
    } else {
      dataPrice[check] = data;
    }
    num = 0;
    check = 0;
  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  if (dataPrice.length > 0) {
    for (let i = 0; i < dataPrice.length; i++) {
      const dataName = [];
      const dataShowName = [];

      for (let j = 0; j < 9; j++) {
        if (dataPrice[i][j + 2] == 1) {
          dataName.push(name[j])
        }
      };
      for (let j = 0; j < dataName.length; j++) {
        dataShowName.push(
          <Text style={{ position: 'absolute', left: j * 50, paddingTop: 20 }}>{'\n' + dataName[j]}</Text>
        )
      };
      forLoopData.push(
        <View style={{ paddingLeft: 20 }}>
          <View style={{ paddingTop: 15, paddingBottom: 20 }}>
            <Text>{dataPrice[i][0]} - price {dataPrice[i][1]}</Text>
            {dataShowName}
          </View>
        </View>
      )
    }
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
          <Text style={styles.sectionTitle}>Food items</Text>

          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => { navigation.navigate('Price', { text: item, name: name, dataPrice: dataPrice }); }} >
                    <Foodname text={item} />
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

        {forLoopData}

      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={' Enter name'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <TouchableOpacity onPress={() => navigation.navigate('Game')}>
        <Text> Game </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Calculated', { name: name, dataPrice: dataPrice })}>
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