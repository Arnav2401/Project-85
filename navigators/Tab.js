import React from 'react'
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CreaterSpace from '../screens/Create';
const Tab = createMaterialBottomTabNavigator()

const MaterialTab = () => {
    return (
        <Tab.Navigator
            barStyle={styles.barstyle}
            activeColor="black"
            inactiveColor="white"
            initialRouteName='Feed'
            shifting={true}
        >

            <Tab.Screen name='Feed' component={Feed} options={{
                tabBarLabel: 'Feed',
                tabBarColor: '#2F7DA1',
                tabBarIcon: ({ focused, size, color }) => {
                    return (
                        <AntDesign name="picture" size={26} color={focused ? "white" : 'black'} />

                    )
                },

            }}
            />
            <Tab.Screen name='CreaterSpace' component={CreaterSpace} options={{
                tabBarLabel: 'Creater Space',
                tabBarColor: '#3B8887',
                tabBarIcon: ({ focused, size, color }) => {
                    return (
                        <Ionicons name={focused ? "ios-add-circle" : 'ios-add-circle-outline'} size={26} color={focused ? "white" : 'black'} />
                    )
                },
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    barstyle: {
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: 'hidden',
        position: 'absolute',
        fontWeight: 'bold'
    }
})

export default MaterialTab


//hidden name and color