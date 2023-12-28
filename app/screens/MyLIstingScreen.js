import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import myListingsAPI from '../api/MyListings';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';
import AppText from '../components/AppText/AppText';
import Button from '../components/AppButton';
import authStorage from '../auth/storage';


const MyListingScreen = () => {

    const [users, setUser] = useState();

    // useEffect(() =>{
    //     restoreUser();
    //   },[]);

    const restoreUser = async () => {
        const user = await authStorage.getUser();
        console.log(user);
        if (user) setUser(user);
      }

    // const schema ={
    //     email: user.email,
    //     password: user.password
    // }

    const getListingsApi = useApi(myListingsAPI.getListings, {users});

    useEffect(() => {
        getListingsApi.request();
        restoreUser();
    }, []);

    console.log({getListingsApi})

    return (
    <>
        <ActivityIndicator visible={getListingsApi.isLoading} />
        <Screen style={styles.screen}>
            {
                getListingsApi.hasError &&  <>
                    <AppText>We couldn't retrieve listings.</AppText>
                    {/* <Button onPress={loadListings} title="Retry" /> */}
                </>
            }
            {/* <FlatList
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.images[0].url}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                }
            /> */}
        </Screen>
    </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.lightGray
    }
});

export default MyListingScreen;