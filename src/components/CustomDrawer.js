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


const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}>

                <View style={{
                    alignItems:'center',
                    padding:10
                }}>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 20,
                            fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                        }}>
                        WONG LOU
                    </Text>
                </View>

                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10, }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: -55, paddingBottom: 20 }}>
                    <ColorPalette />
                </View>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Tell a Friend
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontFamily: 'Roboto-Medium',
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;