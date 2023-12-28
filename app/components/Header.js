import React from 'react'
import { Text, View, StyleSheet } from 'react-native';


import colors from '../config/colors';

const Header = ({ headerText }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: "#F8F8F8",
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default Header;