import { useEffect } from 'react';
import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';


import expoPushTokensApi from '../api/expoPushTokens';

export default useNotification = (notificationListener) => {
    useEffect(() => {
        registerForPushNotification();

        if (notificationListener) Notifications.addListener(notificationListener);
    }, []);

    const registerForPushNotification = async () => {
        // try {
        //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        //     if (!permission.granted) return;

        //     const token = await Notifications.getExpoPushTokenAsync();
        //     expoPushTokensApi.register(token);

        // } catch (error) {
        //     console.log("Error getting push notification token", error);
        // }
    }
}