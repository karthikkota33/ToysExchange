import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingScreen from '../screens/ListingScreens';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import routes from '../navigation/routes';
import navigation from './rootnavigation';
import useNotification from '../hooks/useNotification';
import SettingsNavigator from './SettingsNavigator';
import SettingsScreen from '../screens/SettingsScreen';


const AppNavigator = () => {

    const Tab = createBottomTabNavigator();
    useNotification()
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Feed"
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                }}
            />
            {/* <Tab.Screen
                name="Chat"
                component={SettingsNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="settings" color={color} size={size} />
                }}
            /> */}
             <Tab.Screen
                name="Wishlist"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="ListingEdit"
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => <NewListingButton
                        onPress={() => navigation.navigate(routes.LISTING_EDIT)}
                    />,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
                })}
            />
            <Tab.Screen
                name="Account"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons name="settings" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}

export default AppNavigator;