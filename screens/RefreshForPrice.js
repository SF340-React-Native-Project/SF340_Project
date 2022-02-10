import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Price from "./Price";

const RefreshForPrice = ({ route, navigation }) => {
    const { data, poom, dataPrice } = route.params;

    var num = 0;
    var check = 0;

    if (poom == 1) {
        for (let i = 0; i < dataPrice.length; i++) {
            if (dataPrice[i][0] != data[0]) {
                num += 1;
            } else {
                check = i;
            }
        };
        if (num == dataPrice.length) {
            dataPrice.push(data);
        } else {
            dataPrice[check] = data;
        }
        num = 0;
        check = 0;
    }

    return (
        <TouchableOpacity onPress={navigation.navigate('Price', {dataPrice: dataPrice})}>
          <Text> Save </Text>
        </TouchableOpacity>
    )
}

export default RefreshForPrice;