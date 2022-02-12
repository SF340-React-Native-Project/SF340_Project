import React from "react";
import { StyleSheet, Button,Image,ImageBackground, View, SafeAreaView, Text, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";



const Welcome = ({navigation}) => {
    return(
        <ScrollView>
            <View style={styles.container}>

                <ImageBackground source={require('../../bg.jpg')} resizeMode="cover" style={styles.imagebg}>
                <Text style={styles.text}>Inside</Text>

                <Image
                    style={styles.tinyLogo}
                    source={require('../../logo.png')}
                />

                <Text style={styles.textbut} onPress={() => navigation.navigate('Home')}> HANG OUT!  </Text>
 
                </ImageBackground>
                


            </View>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    welcomebutton : {
        width:'75%',
        marginLeft:'12.5%',
        borderRadius:50,
        height:70,
        backgroundColor:'rgb(242,197,4)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:225,
        marginBottom:100,
    },
    textbut:{
        fontSize: 40,
        color:'rgb(255,255,255)',
        fontWeight: 'bold',
        letterSpacing: 2,
        width:'75%',
        marginLeft:'12.5%',
        borderRadius:50,
        height:60,
        backgroundColor:'rgb(242,197,4)',
        textAlign:'center',
        marginTop:250,
        marginBottom:100,
    }
    ,
    tinyLogo : {
        
        width:"100%",
        height:200,
        marginTop:100,
    },
    imagebg:{
        width: "100%",
        height: 'auto',
        justifyContent: 'center',
        flex: 1,
        marginRight:1000
    },



  });
  

export default Welcome;