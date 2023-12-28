import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppText from '../AppText/AppText';

const ErrorMessage = ({ error, touched }) => {
    if ( !touched || !error) return null;
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
});

export default ErrorMessage;