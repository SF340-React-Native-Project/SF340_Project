import React from "react";
import { View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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

  const goBlack = () => {
    navigation.navigate('Welcome');
  }

  return (
    <ScrollView>
      <View style={styles.container} >
        <Text style={styles.sectionTitle} > Calculated </Text>
        <View style={{ paddingTop: 20 }}></View>
        <View>
          {name.map((val, idx) =>
            <TouchableOpacity key={idx} style={{ paddingHorizontal: 20 }}>
              <NameForCalculated text={val[0]} price={val[1]} />
            </TouchableOpacity>)}
        </View>
        <TouchableOpacity onPress={() => goBlack()}>
          <Text> Exit </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  sectionTitle1: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 5,
    paddingLeft: 10,
    margin: 10,
    width: 200,
  },
});

export default Calculated;