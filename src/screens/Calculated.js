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
    navigation.navigate('Welcome');
  }

  return (
    <ScrollView>
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
          <Text style={styles(theme).toggleExit}> Exit </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)', // *** Color ***
    flexDirection: "column",
    width: 400,
    height: 720,
  },
  sectionTitle: {
    marginTop:30,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    borderRadius: 15,
    borderColor: '#FF3CBE', // *** Color ***
    borderWidth: 3,
    color :'rgb(242,197,4)', // *** Color ***
    textAlign: 'center',
    width: 300,
    height: 70,
    fontSize : 45,
    fontFamily: 'Neonderthaw-Regular',
    shadowColor: "#A540FF", // *** Color ***
    elevation: 50,
    textShadowColor: '#f50abe', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 25,
  },
  toggleExit:{
    borderRadius: 8,
    borderColor: '#FF0000', // *** Color ***
    borderWidth: 2,
    color : '#FF0000', // *** Color ***
    textAlign: "center",
    fontSize : 30,
    width : 80,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: "#D2691E", // *** Color ***
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 5,
    shadowRadius: 16.00,
    elevation: 16,
    textShadowColor: '#D2691E', // *** Color ***
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 15,
  },
});

export default Calculated;