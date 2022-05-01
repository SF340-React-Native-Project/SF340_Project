import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import ColorPalette from './ColorPalette';
import { useSelector, useDispatch } from 'react-redux';

const CustomDrawer = props => {
    const { theme } = useSelector(state => state.theme);

    return (
        <View style={{ flex: 1 ,backgroundColor: '#0f232d',}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: theme.text.pri100 }}>

                <View style={{
                    alignItems: 'center',
                    padding: 10
                }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 20,
                            fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                            
                        }}>
                        ฮากบ่นับหลับก้าน
                    </Text>
                </View>

                <View style={{ flex: 1, backgroundColor: '#0f232d', paddingTop: 10, }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -55, paddingBottom: 20 }}>
                    <ColorPalette />
                </View>
            </View>
        </View>
    );
};

export default CustomDrawer;