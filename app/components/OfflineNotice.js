import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo'

import AppText from '../components/AppText/AppText';
import colors from '../config/colors';

const OfflineNotice = () => {
    const netInfo = useNetInfo();
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.warning,
        height: 50,
        justifyContent: 'center',
        width: '100%',
        top: Constants.statusBarHeight,
        position: 'absolute',
        zIndex: 1
    },
    text: {
        color: colors.white
    }
});

export default OfflineNotice;