import { createStackNavigator } from 'react-navigation-stack';

import Home from '../src/screens/Home';

const screen = {
    Home: {
        screen: Home,
        navigationOption: {
            title : 'Home page'
        }
    }
}

const HomeStack = createStackNavigator(screen, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 60
        }
    }
})

export default HomeStack;