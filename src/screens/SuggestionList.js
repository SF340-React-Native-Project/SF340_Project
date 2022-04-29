import { style } from "@mui/system";
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import NameForSuggestionList from "../components/NameForSuggestionList";

const SuggestionList = ({ route, navigation }) => {
  const { suggestType } = route.params;
  const suggestTypeLowerCase = suggestType.toLowerCase()
  const { theme } = useSelector(state => state.theme);
  const data = useSelector(state => state.suggest[suggestTypeLowerCase]);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).sectionTitle}>{suggestType}</Text>
      <ScrollView style={styles(theme).scrollviewlayout}>
        {data && data.map((data, idx) => (

          <NameForSuggestionList key={idx} data={data} navigation={navigation} />
        ))}
      </ScrollView>
      <Text
        style={styles(theme).backbutton}
        onPress={() => navigation.navigate('Suggestion', { screen: 'SuggestionType' })}>
        Back
      </Text>
    </View>
  )
}

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)',
  },
  sectionTitle: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'ZenKurenaido-Regular',
    borderRadius: 15,
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 4,
    color: '#36F2F2', // *** Color ***
    textAlign: 'center',
    paddingHorizontal: 25,
    paddingVertical: 10,
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 67,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  seggestmenu: {
    marginHorizontal: 20,
    padding: 10,
    fontFamily: 'ZenKurenaido-Regular',
    fontSize: 25,
    borderRadius: 15,
    borderColor: '#CCFF33', // *** Color ***
    borderWidth: 2,
    borderStyle: 'dashed',
    color: '#90EE90', // *** Color ***
    shadowColor: "#A540FF", // *** Color ***
    elevation: 50,
    marginBottom: 15,
  },
  backbutton: {
    fontSize: 30,
    marginTop: 40,
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'ZenKurenaido-Regular',
    borderRadius: 15,
    borderColor: theme.border.pri200, // *** Color ***
    borderWidth: 2,
    color: '#36F2F2', // *** Color ***
    textAlign: 'center',
    paddingHorizontal: 90,
    paddingVertical: 2,
    shadowColor: theme.shadow.pri300, // *** Color ***
    elevation: 67,
    textShadowColor: theme.shadow.pri100, // *** Color ***
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 20,
  },
  scrollviewlayout: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 330,
    paddingVertical: 20,
    borderRadius: 15,
    borderColor: '#36F2F2', // *** Color ***
    borderWidth: 2,
  }
})


export default SuggestionList;