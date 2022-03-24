import * as React from 'react';
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'
import Game from '../screens/Game';


//redux stuff
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Store, persistor } from "../redux/store"
import FoodStack from './FoodStack';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Provider store={Store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Drawer.Navigator initialRouteName="Welcome"
                        screenOptions={{

                            headerShown: false
                        }}>
                        <Drawer.Screen name="Welcome" component={Welcome} />
                        <Drawer.Screen name="Home" component={Home} />
                        <Drawer.Screen name="Food" component={FoodStack} />
                        <Drawer.Screen name="Game" component={Game} />
                    </Drawer.Navigator>
                    <ColorPalette />
                </NavigationContainer>
            </PersistGate>
        </Provider>

    );
}


export default AppStack;