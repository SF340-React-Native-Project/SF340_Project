import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Welcome from './src/screens/Welcome'
import Home from './src/screens/Home'
import Food from './src/screens/Food';
import Price from './src/screens/Price';
import Game from './src/screens/Game';
import Calculated from "./src/screens/Calculated";
import RefreshForPrice from "./src/screens/RefreshForPrice";



//redux stuff
import { Provider } from 'react-redux';
import Store from "./src/redux/store"

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} options={{ header: () => null }} />
          <Stack.Screen name="Home" component={Home} options={{ header: () => null }} />
          <Stack.Screen name="Food" component={Food} options={{ header: () => null }} />
          <Stack.Screen name="RefreshForPrice" component={RefreshForPrice} options={{ header: () => null }} />
          <Stack.Screen name="Price" component={Price} options={{ header: () => null }} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Calculated" component={Calculated} options={{ header: () => null }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

export default App;