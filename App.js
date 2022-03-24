import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import ColorPalette from './src/components/ColorPalette';



import Welcome from './src/screens/Welcome'
import Home from './src/screens/Home'
import Food from './src/screens/Food';
import Price from './src/screens/Price';
import Game from './src/screens/Game';
import Calculated from "./src/screens/Calculated";



//redux stuff
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Store, persistor } from "./src/redux/store"
import CustomDrawer from './src/components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



function Components() {
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

const App = () => {
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
            <Drawer.Screen name="Food" component={Components} />
            <Drawer.Screen name="Game" component={Game} />
          </Drawer.Navigator>

        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
}

export default App;