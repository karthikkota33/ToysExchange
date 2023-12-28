// React Native Floating Action Button
// https://aboutreact.com/react-native-floating-action-button/

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../../config/colors';

const App = () => {
    const clickHandler = () => {
        //function to handle click on floating Action Button
        alert('Floating Button Clicked');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    Example of React Native Floating Action Button
        </Text>
                <Text style={styles.textStyle}>
                    Click on Action Button to see Alert
        </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={clickHandler}
                    style={styles.touchableOpacityStyle}>
                    <MaterialCommunityIcons
                        size={30}
                        name="swap-horizontal"
                    />
                    {/* <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          /> */}
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    titleStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    touchableOpacityStyle: {
        alignItems: "center",
        backgroundColor: '#fffe7a',
        borderColor: colors.white,
        borderRadius: 32,
        borderWidth: 10,
        bottom: 30,
        height: 65,
        justifyContent: "center",
        width: 65,
        right: 5,
        position: 'absolute',
        // position: 'absolute',
        // width: 50,
        // height: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
        // right: 5,
        // bottom: 20,
    },
    floatingButtonStyle: {
        //resizeMode: 'contain',
        width: 50,
        height: 50,
        //backgroundColor:'black'
    },
});
