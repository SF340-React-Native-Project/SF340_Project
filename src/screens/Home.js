import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
} from 'react-native';

//redux stuff
import { useSelector, useDispatch } from 'react-redux';
import { addName, editName, deleteName } from '../redux/actions/dataActions';
import Name from '../components/Name';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { nameList, foodList, namecalculate } = useSelector(state => state.data);
  const { theme } = useSelector(state => state.theme);

  const [name, setName] = useState();
  const [toggle, setToggle] = useState(true);

  console.log(nameList, 'HOME');
  console.log(foodList, 'HOME');
  console.log(namecalculate, 'HOME');
  const handleAddName = () => {
    Keyboard.dismiss();
    dispatch(addName(name));
    setName(null);
  };

  const handleDeleteName = name => {
    dispatch(deleteName(name));
  };

  console.log(theme);
  return (
    <View style={styles(theme).container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles(theme).tasksWrapper}>
          <Text style={styles(theme).sectionTitle}>Member</Text>
          <View style={styles(theme).items}>
            {/* This is where the tasks will go! */}
            <>
              {nameList &&
                nameList.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleDeleteName(item)}>
                    <Name text={item} />
                  </TouchableOpacity>
                ))}
            </>

            {toggle ? (
              <TouchableOpacity
                style={styles(theme).toggleButton}
                onPress={() => setToggle(toggle ? false : true)}>
                <Text style={styles(theme).toggleAdd}>ADD MEMBER</Text>
              </TouchableOpacity>
            ) : (
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles(theme).writeTaskWrapper}>
                {/* actions */}
                <TextInput
                  style={styles(theme).input}
                  placeholder={' Enter name'}
                  placeholderTextColor={'#90EE90'}
                  value={name}
                  onChangeText={text => setName(text)}
                />
                <TouchableOpacity onPress={() => handleAddName()}>
                  <View style={styles(theme).addWrapper}>
                    <Text style={styles(theme).addText}>+</Text>
                  </View>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            )}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}

      {/* actions */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Food');
        }}>
        <Text style={styles(theme).toggleNext}> Next </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.pri100, // *** Color ***
  },
  tasksWrapper: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 45,
    fontFamily: 'ZenKurenaido-Regular',
    color: theme.text.pri200, // *** Color ***
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingLeft:20,
    fontFamily: 'ZenKurenaido-Regular',
    fontSize:20,
    borderRadius: 60,
    borderColor: 'white', // *** Color ***
    borderWidth: 2,
    width: 250,
    color: theme.textinput.pri100, // *** Color ***
  },
  addWrapper: {
    width: 60,
    height: 60,
    
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.border.pri300, // *** Color ***
    borderWidth: 5,
  },
  addText: {
    fontSize: 35,
    color: theme.text.pri300, // *** Color ***
    paddingBottom: 10
  },
  toggleAdd: {
    borderRadius: 15,
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 2,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    paddingVertical:3,
    paddingHorizontal:10,
    fontSize: 40,
    fontFamily: 'ZenKurenaido-Regular',
    shadowColor: theme.shadow.pri300, // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 50,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  toggleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontFamily: 'ZenKurenaido-Regular',
    color: theme.text.pri400, // *** Color ***
    fontSize: 25,
    textShadowColor: theme.shadow.pri400, // *** Color ***
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
  },
  toggleNext: {
    fontFamily: 'ZenKurenaido-Regular',
    borderRadius: 10,
    borderColor: theme.border.pri400, // *** Color ***
    borderWidth: 1,
    color: theme.text.pri200, // *** Color ***
    textAlign: 'center',
    fontSize: 35,
    paddingHorizontal:5,
    paddingVertical:1,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: theme.shadow.pri200, // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.0,
    elevation: 16,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
});

export default Home;
