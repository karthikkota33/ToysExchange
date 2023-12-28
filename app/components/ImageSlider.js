import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, Image } from 'react-native';
//import { Image } from 'react-native-expo-image-cache';

import Screen from '../components/Screen';

const { width } = Dimensions.get('window');
const height = width * 0.6; //60% 

// const images = [
//     'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//     'https://images.pexels.com/photos/981588/pexels-photo-981588.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'

// ];


const ImageSlider = ({ images }) => {
    const [active, setActive] = useState(0);

    console.log(images);
    const change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide != active) {
            setActive(slide);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={change}
                style={styles.container}
            >
                {
                    images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image.url }}
                            style={styles.image}
                        />
                    ))
                }
            </ScrollView>
            <View style={styles.pagination}>
                {
                    images.map((i, k) => (
                        <Text key={k} style={k == active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                    ))
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop:10,
        width,
        height
    },
    image: {
        width,
        height,
        resizeMode: 'cover'
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText:
    {
        fontSize: (width / 40),
        color: '#888',
        margin: 3
    },
    pagingActiveText: {
        fontSize: (width / 40),
        color: '#fff',
        margin: 3
    }

    // container: {
    //     width, height
    // },
    // scroll: {
    //     width, height
    // },
    // image: {
    //     width,
    //     height,
    //     resizeMode: 'cover'
    // },
    // pagination: { flexDirection: 'row', position: 'absolute', bottom: 0, alignSelf: 'center' },
    // paginationText: { fontSize: (width / 30), color: '#888', margin: 3 },
    // paginationActiveText: { fontSize: (width / 30), color: '#fff', margin: 3 },
});

export default ImageSlider;