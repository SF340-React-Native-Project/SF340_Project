import * as React from 'react';

//Screen
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Game from '../screens/Game';

//Navigation
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FoodStack from './FoodStack';
import CustomDrawer from '../components/CustomDrawer';
import CalendarStack from './CalendarStack';
import Suggestion from '../screens/Suggestion';


//redux stuff
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Store, persistor } from "../redux/store"
import SuggestionStack from './SuggestionStack';



const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (

    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,

          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: 'white',
          drawerLabelStyle: {
            marginLeft: 5,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }} >

        <Drawer.Screen name="Welcome" component={Welcome} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Food" component={FoodStack} />
        <Drawer.Screen name="Suggestion" component={SuggestionStack} />
        <Drawer.Screen name="Calendar" component={CalendarStack} />
        <Drawer.Screen name="Game" component={Game} />
        {/* <Drawer.Screen name="Suggestion" component={SuggestionStack}
              options={{
                drawerLabel: () => null,
                drawerItemStyle: { height: 0 }
              }} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default AppStack;