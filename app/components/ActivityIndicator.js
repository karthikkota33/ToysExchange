import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';


const ActivityIndicator = ({ visible = false }) => {
    if (!visible) return null;
    return (
        <View style={styles.overLay}>
            <LottieView
                autoPlay
                loop
                source={require('../assets/animations/primaryLoader.json')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    overLay: {
        position: 'absolute',
        backgroundColor: colors.white,
        height: '100%',
        opacity: 0.8,
        width: '103%',
        zIndex: 1
    }
})


export default ActivityIndicator;