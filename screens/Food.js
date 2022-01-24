import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import Foodname from '../components/Foodname';
import Price from "./Price";
import Calculated from "./Calculated";
import Game from "./Game";

const Food = ({ route, navigation }) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const { name } = route.params;

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
                    <TouchableOpacity key={index} onPress={() => { navigation.navigate('Price', { text: item, name: name }); }} >
                        <Foodname text={item} /> 
                    </TouchableOpacity>
                )
                })
            }
            </View>
        </View>
            
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

        <Text>{name[0]}</Text>
        <Text>{name[1]}</Text>
        <Text>{name[2]}</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Game')}>
            <Text> Game </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Calculated')}>
            <Text> Calculate </Text>
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