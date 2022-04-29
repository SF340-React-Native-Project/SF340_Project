import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editFoodSuggestion, editFriendSuggestion } from '../redux/actions/suggestionActions'
const SuggestionDetail = ({ route, navigation }) => {
    const { data } = route.params;
    const { theme } = useSelector(state => state.theme);

    const [description, setDescription] = useState('');
    const [showBtn, setShowBtn] = useState(false);


    const handle = () => {
        // if (data.type === "drink" || data.type === "snack") {
        //     useDispatch(editFoodSuggestion(data, description))
        // } else if (data.type === "friend") {
        //     useDispatch(editFriendSuggestion(data, description))
        // }
        setShowBtn(false)
        console.log(121);
    }
    return (
        <View style={styles(theme).container}>
            <Text style={styles(theme).sectionTitle}>{data.name}</Text>

            <View style={styles(theme).menudescrip}>
                <View style={styles(theme).imglayout}>
                    <Image style={styles(theme).tinyLogo} source={require('./../../image/holiday.png')} />
                </View>

                <Text style={styles(theme).describhead}>{data.name}</Text>
                <Text style={styles(theme).describdetail}>{data.description}</Text>

                {showBtn ? (
                    <View style={styles(theme).formadd}>
                        <KeyboardAvoidingView
                            behavior={Platform.OS === "ios" ? "padding" : "height"}
                            style={styles(theme).writeTaskWrapper}
                        >
                            <TextInput
                                style={styles(theme).input}
                                placeholder={'Type description'}
                                placeholderTextColor={theme.text.pri100} // *** Color ***
                                value={description}
                                onPressIn={() => { setShowBtn(true) }}
                                onEndEditing={() => { setShowBtn(false) }}
                                onChangeText={text => setDescription(text)} />

                        </KeyboardAvoidingView>
                        <TouchableOpacity
                            style={styles(theme).btnadd}
                            onPress={() => { () => handle() }}>
                            <Text

                            >
                                +
                            </Text>
                        </TouchableOpacity>

                    </View>
                ) :
                    (
                        <Text style={styles(theme).adddiscription}
                            onPress={() => { setShowBtn(true) }}
                        >
                            {data.description === '' ? "Add Description" : "Edit Description"}
                        </Text>


                    )}

            </View>

            <Text
                style={styles(theme).backbutton}
                onPress={() => navigation.navigate('Suggestion', {
                    screen: 'SuggestionList',
                    params: {
                        suggestType: data.type,
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
    writeTaskWrapper: {
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        paddingLeft: 20,
        fontFamily: 'ZenKurenaido-Regular',
        fontSize: 20,
        borderRadius: 60,
        borderColor: theme.border.pri210, // *** Color ***
        borderWidth: 2,
        width: 200,
        color: theme.textinput.pri400, // *** Color ***
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
    adddiscription: {
        fontSize: 25,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'ZenKurenaido-Regular',
        borderRadius: 15,
        borderColor: theme.border.pri200, // *** Color ***
        borderWidth: 2,
        color: '#36F2F2', // *** Color ***
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 2,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 67,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
    },
    btnadd: {
        paddingVertical: 10,
        fontSize: 25,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'ZenKurenaido-Regular',
        borderRadius: 100,
        borderColor: theme.border.pri200, // *** Color ***
        borderWidth: 2,
        color: '#36F2F2', // *** Color ***
        textAlign: 'center',
        width: 50,
        height: 50,
        shadowColor: theme.shadow.pri300, // *** Color ***
        elevation: 67,
        textShadowColor: theme.shadow.pri100, // *** Color ***
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 20,
    },
    formadd: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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