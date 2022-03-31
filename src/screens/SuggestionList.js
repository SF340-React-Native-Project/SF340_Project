import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const SuggestionList = ({ route, navigation }) => {
  const { suggestname, data, suggesttype } = route.params;

  return (
    <View>
      <Text>{suggestname}</Text>
      {data && data.map((val, idx) => (
        <TouchableOpacity key={idx}  >
          <Text>{val.val}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default SuggestionList

const styles = StyleSheet.create({

})