import React from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const SuggestionDetail = ({ route, navigation }) => {
    const { suggestname, data, suggestType } = route.params;
    const { theme } = useSelector(state => state.theme);
    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).sectionTitle}>{suggestname}</Text>

            <View style={styles(theme).menudescrip}>
                <View style={styles(theme).imglayout}>
                    <Image style={styles(theme).tinyLogo} source={require('./../../image/holiday.png')} />
                </View>

                <Text style={styles(theme).describhead}>{data.header}</Text>
                <Text style={styles(theme).describdetail}>{data.description}</Text>


            </View>
            <Text
                style={styles(theme).backbutton}
                onPress={() => navigation.navigate('Suggestion', {
                    screen: 'SuggestionList',
                    params: {
                        suggestType: suggestType,
                    }
                })}
            >
                Back
            </Text>
        </View>
    )
}

export default SuggestionDetail

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
    menudescrip: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        height: '70%',
        paddingVertical: 5,
        borderRadius: 15,
        borderColor: '#36F2F2', // *** Color ***
        borderWidth: 4,

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
    imglayout: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        height: '45%',
        borderRadius: 15,
        borderColor: theme.border.pri200, // *** Color ***
        borderWidth: 2,
        borderStyle: 'dashed',
    },
    describhead: {
        marginTop: 10,
        marginLeft: '5%',
        marginRight: '5%',
        fontSize: 25,
        color: theme.text.pri200,
        textAlign: 'left',
    },
    describdetail: {
        marginTop: 10,
        marginLeft: '5%',
        fontSize: 17,
        color: theme.text.pri200,
        textAlign: 'left',
    },
    tinyLogo: {
        width: '80%',
        height: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        marginTop: 'auto',



    }
})