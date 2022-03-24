import * as React from 'react';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';

//Screen
import Food from '../screens/Food';
import Price from '../screens/Price';
import Calculated from "../screens/Calculated";

const Stack = createStackNavigator();

function FoodStack() {
    return (
        <Stack.Navigator initialRouteName="FoodList"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="FoodList" component={Food} />
            <Stack.Screen name="Price" component={Price} />
            <Stack.Screen name="Calculated" component={Calculated}
                options={{
                    headerShown: true,
                    headerMode: 'screen',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: 'tomato' },
                    title: 'Awesome app',
                }}
            />
        </Stack.Navigator>
    );
}
export default FoodStack;