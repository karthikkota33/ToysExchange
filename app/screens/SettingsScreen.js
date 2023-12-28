import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Header from '../components/Header';
import TestingSlider from './TestinfScreens/TestingSlider';

const SettingsScreen = () => {
    return (
        <Screen style={styles.screen}>
            <Header headerText="Settings" />
            {/* <View style={styles.header}>
                <Text style={styles.text}>Settings</Text>
            </View> */}
            <View style={styles.container}>
                <Text style={styles.text}>Age</Text>
                <TestingSlider />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Distance</Text>
                <TestingSlider />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Condition</Text>
                <TestingSlider />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Posted</Text>
                <TestingSlider />
            </View>
            <View style={styles.container}>
                <Text style={styles.companyInfo}>from</Text>
            </View>
            <View >
                <Text style={styles.companyInfo}>KI</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: "#F8F8F8",
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative'
    },
    container: {
        marginVertical: 10,
        height: 90
    },
    screen: {
        backgroundColor: colors.lightGray
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color:colors.darkGray,
        marginBottom:10,
        marginLeft:5
    },
    companyInfo:{
        justifyContent:'center',
        alignItems:'center'
    }
});

export default SettingsScreen;