import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';


import colors from '../config/colors';
const ImageInput = ({ imageUri, onChangeImage }) => {

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {

        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted) {
            alert('You need to enable permisson to access the library.');
        }
    }

    const handlePress = () => {
        if (!imageUri) SelectImage();
        else {
            Alert.alert('Delete', 'Are you sure you want to delete this image?',
                [
                    { text: 'Yes', onPress: () => onChangeImage(null) },
                    { text: 'No' }

                ])
        };
    }

    const SelectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });
            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        }
        catch (error) {
            console.log('Error reading an immage', error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (<MaterialCommunityIcons color={colors.medium} name="camera" size={40} />)}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGray,
        borderRadius: 15,
        justifyContent: "center",
        overflow: 'hidden',
        alignItems: "center",
        height: 100,
        width: 100
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImageInput;