import { createDrawerNavigator } from '@react-navigation/drawer';
import { createAppContainer } from 'react-navigation'

import HomeStack from './HomeStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Food: {
        screen: HomeStack,
    },
    Game: {
        screen: HomeStack,
    },
})

export default createAppContainer(RootDrawerNavigator);