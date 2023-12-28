import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessagesScreen';
import MyListingScreen from '../screens/MyLIstingScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator mode="modal">
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen
            name="Messages"
            component={MessageScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen
            name="MyListings"
            component={MyListingScreen}
            options={{
                headerShown: false
            }}
        />
    </Stack.Navigator>
)

export default AccountNavigator;