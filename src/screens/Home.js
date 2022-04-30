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

  const handleAddName = () => {
    Keyboard.dismiss();
    dispatch(addName(name));
    setName(null);
  };

  return (
    <View style={styles(theme).container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <View style={styles(theme).btnadd}>
        <Text style={styles(theme).sectionTitle}>Member</Text>
        {toggle ? (
          <TouchableOpacity
            style={styles(theme).toggleButton}
            onPress={() => setToggle(toggle ? false : true)}>
            <Text style={styles(theme).toggleopen}>+</Text>
          </TouchableOpacity>
        ) : <TouchableOpacity
          style={styles(theme).toggleButton}
          onPress={() => setToggle(toggle ? false : true)}>
          <Text style={styles(theme).toggleclose}>close</Text>
        </TouchableOpacity>}
      </View>


      {!toggle ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles(theme).writeTaskWrapper}>
          {/* actions */}
          <TextInput
            style={styles(theme).input}
            placeholder={'Enter name'}
            placeholderTextColor={theme.text.pri100}
            value={name}
            onChangeText={text => setName(text)}
          />
          <TouchableOpacity onPress={() => handleAddName()}>
            <View style={styles(theme).addWrapper}>
              <Text style={styles(theme).addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      ) : <></>}


      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        {/* Today's Tasks */}
        <View style={styles(theme).tasksWrapper}>

          <View style={styles(theme).items}>
            {/* This is where the tasks will go! */}
            <>
              {nameList &&
                nameList.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    disabled={true}
                  >
                    <Name text={item} />
                  </TouchableOpacity>
                ))}
            </>

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
  btnadd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tasksWrapper: {
    paddingTop: 0,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    marginLeft: 20,
    marginVertical: 15,
    fontSize: 45,
    fontFamily: 'ZenKurenaido-Regular',
    color: theme.text.pri100, // *** Color ***
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    marginTop: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingLeft: 20,
    fontFamily: 'ZenKurenaido-Regular',
    fontSize: 20,
    borderRadius: 60,
    borderColor: theme.border.pri210, // *** Color ***
    borderWidth: 2,
    width: 250,
    color: theme.textinput.pri400, // *** Color ***
  },
  addWrapper: {
    width: 55,
    height: 55,

    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.border.pri210, // *** Color ***
    borderWidth: 2,
  },
  addText: {
    fontSize: 35,
    color: theme.text.pri100, // *** Color ***
    paddingBottom: 10
  },
  toggleopen: {
    marginTop: 15,
    // borderRadius: 15,
    // borderColor: theme.border.pri200, // *** Color ***
    // borderWidth: 2,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    paddingVertical: 3,
    paddingHorizontal: 10,
    fontSize: 40,
    fontFamily: 'ZenKurenaido-Regular',
    shadowColor: theme.shadow.pri700, // *** Color ***
    elevation: 67,
    textShadowColor: theme.shadow.pri700, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  toggleclose: {
    marginTop: 15,
    // borderRadius: 100,
    // borderColor: theme.border.pri110, // *** Color ***
    // borderWidth: 2,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10,
    fontSize: 30,
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
    marginRight: 20,
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
    marginHorizontal: 60,
    marginVertical: 15,
    borderColor: theme.border.pri210, // *** Color ***
    borderWidth: 2,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    fontSize: 35,
    shadowColor: theme.shadow.pri600, // *** Color ***
    elevation: 50,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 25,
  },
});

export default Home;
