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
import Calendar from '../screens/Calendar';
import Suggestion from '../screens/Suggestion';


//redux stuff
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Store, persistor } from "../redux/store"
import SuggestionList from '../screens/SuggestionList';



const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: '#aa18ea',
              drawerActiveTintColor: '#fff',
              drawerInactiveTintColor: '#333',
              drawerLabelStyle: {
                marginLeft: 5,
                fontFamily: 'Roboto-Medium',
                fontSize: 15,
              },
            }} >

            <Drawer.Screen name="Welcome" component={Welcome} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Food" component={FoodStack} />
            <Drawer.Screen name="Suggest" component={Suggestion} />
            <Drawer.Screen name="Calendar" component={Calendar} />
            <Drawer.Screen name="Game" component={Game} />
            <Drawer.Screen name="SuggestionList" component={SuggestionList}
              options={{
                drawerLabel: () => null,
                drawerItemStyle: { height: 0 }
              }} />
          </Drawer.Navigator>

        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}


export default AppStack;