import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';
import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
    return (
        //<View>
        <ImageBackground style={styles.background}
            blurRadius={10}
            source={require("../assets/Light-pink-bedroom-color.jpg")} >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/Zero1.png")} />
                <Text style={styles.tagLine}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
            </View>

        </ImageBackground>
        //</View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    logo: {
        width: 200,
        height: 200
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20
    }
});

export default WelcomeScreen;