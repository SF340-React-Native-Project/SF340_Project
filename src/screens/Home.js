import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

//redux stuff
import { useSelector, useDispatch } from 'react-redux'
import { addName, editName, deleteName } from '../redux/actions/dataActions'

import Name from '../components/Name';


const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const nameList = useSelector(state => state.data.nameList)
  const [name, setName] = useState();
  const [toggle, setToggle] = useState(true);


  console.log(toggle);
  const handleAddName = () => {
    Keyboard.dismiss();
    dispatch(addName(name));
    setName(null);
  }

  const handleDeleteName = (name) => {
    dispatch(deleteName(name));
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
          <Text style={styles.sectionTitle}>Member</Text>
          <View style={styles.items}>
            {/* This is where the tasks will go! */}
            <>{
              nameList.map((item, index) =>
                <TouchableOpacity key={index} onPress={() => handleDeleteName(item)}>
                  <Name text={item} />
                </TouchableOpacity>
              )}</>

            {toggle ?
              <TouchableOpacity onPress={() => setToggle(toggle ? false : true)}>
                <Text style={styles.addText}>ADD MEMBER</Text>
              </TouchableOpacity>
              :
              <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
              >
                {/* actions */}
                <TextInput style={styles.input} placeholder={' Enter name'} value={name} onChangeText={text => setName(text)} />
                <TouchableOpacity onPress={() => handleAddName()} >
                  <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </KeyboardAvoidingView>}

          </View>
        </View>

      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}


      {/* actions */}
      <TouchableOpacity onPress={() => { navigation.navigate('Food'); }} >
        <Text style={{ paddingLeft: 340 }}> Next </Text>
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

export default Home;