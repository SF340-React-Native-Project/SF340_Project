import * as React from 'react';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';

//Screen
import Suggestion from '../screens/Suggestion';
import SuggestionList from '../screens/SuggestionList';
import SuggestionDetail from '../components/SuggestionDetail';


const Stack = createStackNavigator();

function SuggestionStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="SuggestionType" component={Suggestion} />
            <Stack.Screen name="SuggestionList" component={SuggestionList} />
            <Stack.Screen name="SuggestionDetail" component={SuggestionDetail} />
        </Stack.Navigator>
    );
}
export default SuggestionStack;