import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Keyboard, Platform, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ContactSellerForm from '../components/ContactSellerForm';
import ImageSlider from '../components/ImageSlider';

const ListingDetailScreen = ({ route }) => {
    const listing = route.params;
    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <ImageSlider images={listing.images} />
            {/* <Image
                style={styles.image}
                preview={{ uri: listing.images[0].thumbnalUrl }}
                tint="light"
                uri={listing.images[0].url} /> */}
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/Karthik.jpeg")}
                        title="Karthik"
                        subTitle="5 Listings"
                    />
                </View>
                <ContactSellerForm listing={listing} />
                <View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.touchableOpacityStyle}>
                    <MaterialCommunityIcons
                        size={30}
                        name="swap-horizontal"
                    />
                </TouchableOpacity>
            </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 15
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5
    },
    title: {
        fontSize: 24,
        fontWeight: "400"
    },
    userContainer: {
        marginVertical: 15
    },
    touchableOpacityStyle: {
        alignItems: "center",
        backgroundColor: '#fffe7a',
        borderColor: colors.white,
        borderRadius: 30,
        borderWidth: 10,
        bottom: 30,
        height: 65,
        justifyContent: "center",
        width: 60,
        right: 5,
        position: 'absolute',
        // position: 'absolute',
        // width: 50,
        // height: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
        // right: 5,
        // bottom: 20,
    }
});

export default ListingDetailScreen;