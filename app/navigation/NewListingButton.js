import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const NewListingButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="plus-circle"
                    color={colors.white}
                    size={30} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 32,
        borderWidth: 10,
        bottom: 10,
        height: 65,
        justifyContent: "center",
        width: 65
    }
});

export default NewListingButton;