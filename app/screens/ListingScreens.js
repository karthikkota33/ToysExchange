import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import routes from '../navigation/routes';
import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import AppText from '../components/AppText/AppText';
import Button from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';
import TestingFilter from '../screens/TestinfScreens/Testingfilter';

import useLocation from '../hooks/useLocation';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ListingScreen = ({ navigation }) => {

    const { areaName, location } = useLocation();
    console.log(areaName);
    const areaName1 = areaName;
    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    const [filterOptions, setFilterOption] = useState(0);

    const [filterData, setFilterData] = useState();

    const filterDataByCategories = (val) => {
        setFilterOption(val);
        console.log(filterOptions);
        //alert(val);
        const tempData = getListingsApi.data.filter(row => {return row.categoryId === val});
        setFilterData(tempData);
        //console.log(tempData);
    }

    return (
        <>
            <ActivityIndicator visible={getListingsApi.isLoading} />
            <Screen style={styles.screen}>
                {
                    getListingsApi.hasError && <>
                        <AppText>We couldn't retrieve listings.</AppText>
                        <Button onPress={loadListings} title="Retry" />
                    </>
                }
                <View style={styles.location}>
                    <MaterialIcons name="location-on" size={24} color={colors.primary} />
                    <AppText>{areaName1}</AppText>
                </View>
                <View style={styles.location}>
                    <TestingFilter handleFilter={filterDataByCategories} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filterOptions == 0 ? getListingsApi.data : filterData}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subTitle={"$" + item.price}
                            image={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    location: {
        paddingBottom: 10,
        flexDirection: 'row',
        backgroundColor: colors.lightGray
    },
    screen: {
        padding: 20,
        backgroundColor: colors.lightGray
    },
    filter: {
        paddingBottom: 10,
        backgroundColor: colors.lightGray,
        flexDirection: 'row',
    }
});

export default ListingScreen;