import React from "react";
import { View, Text, StyleSheet, } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

//redux stuff
import { getData } from "../src/redux/actions/dataActions"
import { useSelector, useDispatch } from 'react-redux'
import { setMemberValue, setFoodPrice, calculate } from '../src/redux/actions/dataActions'

import NameForCalculated from '../components/NameForCalculated';
import Welcome from "./Welcome";



const Calculated = ({ navigation }) => {

  const dispatch = useDispatch();
  const name = useSelector(state => state.data.namecalculate)
  const { theme } = useSelector(state => state.theme);


  const goBlack = () => {
    navigation.navigate('FoodList');
  }

  return (

    <View style={styles(theme).container} >
      <Text style={styles(theme).sectionTitle} > Calculated </Text>
      <ScrollView >
        <View style={styles(theme).content}>
          {name.map((val, idx) =>
            <TouchableOpacity disabled={true} key={idx} style={{ paddingHorizontal: 20 }}>
              <NameForCalculated text={val[0]} price={val[1]} />
            </TouchableOpacity>)}
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => goBlack()}>
        <Text style={styles(theme).toggleExit}> Back </Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.pri100, // *** Color ***
    flexDirection: "column",

  },
  content: {
    marginTop: 30,
  },
  sectionTitle: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15,
    borderColor: theme.border.pri210, // *** Color ***
    borderWidth: 3,
    paddingHorizontal:20,
    paddingVertical:5,
    color: theme.text.pri100, // *** Color ***
    textAlign: 'center',
    fontSize: 45,
    fontFamily: 'ZenKurenaido-Regular',
    shadowColor: theme.shadow.pri600, // *** Color ***
    elevation: 50,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 25,
  },
  toggleExit: {
    borderRadius: 10,
    borderColor: theme.border.pri210, // *** Color ***
    width: '70%',
    borderWidth: 2,
    color: theme.text.pri100, // *** Color ***
    textAlign: "center",
    fontSize: 30,
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: theme.shadow.pri600, // *** Color ***
    elevation: 50,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 25,
  },
});

export default Calculated;