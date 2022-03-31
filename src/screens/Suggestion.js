import { style } from "@mui/system";
import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const Suggestion = ({ navigation }) => {
    const { theme } = useSelector(state => state.theme);

    return (
        <View style={styles(theme).layout}>
            <Text style={styles(theme).sectionTitle}>Suggest</Text>
            <ScrollView>
                <View style={styles(theme).circular}></View>
                <Text style={styles(theme).seggestmenu}>Beer</Text>
            </ScrollView>
        </View>
    )
}

const styles = (theme) => StyleSheet.create({
    layout : {
        flex:1,
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
      seggestmenu:{
        marginHorizontal:20,
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
      }
})


export default Suggestion;