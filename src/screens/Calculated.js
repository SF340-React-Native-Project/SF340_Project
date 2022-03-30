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
        <View style={{ paddingTop: 20 }}></View>
        <View>
          {name.map((val, idx) =>
            <TouchableOpacity key={idx} style={{ paddingHorizontal: 20 }}>
              <NameForCalculated text={val[0]} price={val[1]} />
            </TouchableOpacity>)}
        </View>
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
  sectionTitle: {
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 3,
    color: theme.text.pri800, // *** Color ***
    textAlign: 'center',
    width: 300,
    height: 70,
    fontSize: 45,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 50,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 25,
  },
  toggleExit: {
    borderRadius: 10,
    borderColor: theme.border.pri110, // *** Color ***
    width:'70%',
    borderWidth: 2,
    color: theme.text.pri900, // *** Color ***
    textAlign: "center",
    fontSize: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: theme.shadow.pri500, // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.00,
    elevation: 16,
    textShadowColor: theme.shadow.pri500, // *** Color ***
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
  },
});

export default Calculated;