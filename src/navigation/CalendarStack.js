import * as React from 'react';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';

//Screen
import CalendarList from '../screens/Calendar';
import CalendarDetail from '../components/DetailForCalendar';

const Stack = createStackNavigator();

function CalendarStack() {
    return (
        <Stack.Navigator initialRouteName="CalendarList"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="CalendarList" component={CalendarList} />
            <Stack.Screen name="CalendarDetail" component={CalendarDetail} />
        </Stack.Navigator>
    );
}
export default CalendarStack;