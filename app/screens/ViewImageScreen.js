import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} />
            </View>
            {/* <Image source={require("../assets/cars.png")} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    }
});

export default ViewImageScreen