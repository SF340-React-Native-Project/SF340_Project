import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Home from "./Home";
import Food from "./Food";

const Game = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <Text>GameScreen</Text>

                

            </View>
        </ScrollView> 
    )
}

export default Game;