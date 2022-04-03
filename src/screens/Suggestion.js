import { style } from "@mui/system";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import NameForSuggestion from "../components/NameForSuggestion";

const Suggestion = ({ navigation }) => {
    const { theme } = useSelector(state => state.theme);

    const suggest = ['FOOD', 'FRIEND','FOOD', 'FRIEND','FOOD', 'FRIEND','FOOD', 'FRIEND','FOOD', 'FRIEND']

    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).sectionTitle}>Suggest</Text>
                <ScrollView style={styles(theme).scrollviewlayout}>
                    {suggest && suggest.map((val, idx) => (
                        <TouchableOpacity key={idx} onPress={() => { navigation.navigate('SuggestionList', { suggestname: val , data: [{val:'1', idx:'1'}, {val:'3', idx:'3'}, {val:'3', idx:'3'}], suggesttype: val }) }} >
                            <NameForSuggestion name={val} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            <Text style={styles(theme).backbutton}>Back</Text>
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
        paddingHorizontal: 25,
        paddingVertical: 10,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 67,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
    },
    scrollviewlayout:{
        marginLeft:'auto',
        marginRight:'auto',
        width:330,
        paddingVertical:5,
        borderRadius: 15,
        borderColor: '#36F2F2', // *** Color ***
        borderWidth: 4,
        borderStyle: 'dashed',
    }
})


export default Suggestion;