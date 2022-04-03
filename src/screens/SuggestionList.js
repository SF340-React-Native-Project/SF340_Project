import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const SuggestionList = ({ route, navigation }) => {
  const { suggestname, data, suggesttype } = route.params;
  const { theme } = useSelector(state => state.theme);

  return (
    <View style={styles(theme).container}>
      <Text style={styles(theme).sectionTitle}>{suggestname}</Text> 

      {data && data.map((val, idx) => (
        <TouchableOpacity key={idx}  >
          <Text>{val.val}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SuggestionList

const styles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(15,35,45)',
  },
  sectionTitle: {
    fontSize: 30,
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
})