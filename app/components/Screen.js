import React from 'react';
import constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View} from 'react-native';
import colors from '../config/colors';

const Screen = ({children, style}) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view,style]}>{children}</View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: constants.statusBarHeight,
        flex:1
    },
    view:{
        flex:1
    }
});

export default Screen;