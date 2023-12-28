import React, { useState } from 'react';
import { View, StyleSheet, Text, ToastAndroid } from 'react-native';
import SnapSlider from 'react-native-snap-slider';

const TestingSlider = () => {
    const [week, setWeek] = useState('1');

    const sliderOptions = [
        { value: 'New', label: 'New' },
        { value: 'Excellent', label: 'Excellent' },
        { value: 'Good', label: 'Good' },
        { value: 'Fair', label: 'Fair' },
    ]

    const onSlidingComplete = (itemSelected) => {
        console.log(itemSelected);
        setWeek(itemSelected);
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Condition:</Text> */}
            <SnapSlider containerStyle={styles.snapsliderContainer} style={styles.snapslider}
                itemWrapperStyle={styles.snapsliderItemWrapper}
                itemStyle={styles.snapsliderItem}
                items={sliderOptions}
                labelPosition="bottom"
                defaultItem={week}
                onSlidingComplete={(label) => onSlidingComplete(label)}
                value={week}
            />
            {/* <Text style={styles.welcome}>{week}</Text> */}
        </View>
    );

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        fontSize: 20,
        textAlign:'center',
        margin: 10,
    },

    snapsliderContainer: {
        margin:20,
        alignItems:'center',
        justifyContent:'center'
    },
    snapslider: {
    },
    snapsliderItemWrapper: {
    },
    snapsliderItem: {
    }

});

export default TestingSlider;