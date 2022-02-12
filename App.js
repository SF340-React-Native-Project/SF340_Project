import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';




import Welcome from './src/screens/Welcome'
import Home from './src/screens/Home'
import Food from './src/screens/Food';
import Price from './src/screens/Price';
import Game from './src/screens/Game';
import Calculated from "./src/screens/Calculated";



//redux stuff
import { Provider } from 'react-redux';
import Store from "./src/redux/store"

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
      <Stack.Screen name="Calculated" component={Calculated} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={Store}>

      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Welcome"
          screenOptions={{
            headerShown: false
          }}>
          <Drawer.Screen name="Welcome" component={Welcome} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Food" component={Components} />
          <Drawer.Screen name="Game" component={Game} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;