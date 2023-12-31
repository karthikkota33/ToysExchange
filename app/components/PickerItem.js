import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import AppText from './AppText/AppText';

const PickerItem = ({item, onPress}) =>{
    return(
        <TouchableOpacity onPress={onPress}>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        padding:20
    }
});

export default PickerItem;