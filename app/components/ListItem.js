import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import 'react-native-gesture-handler';

import AppText from './AppText/AppText';
import colors from '../config/colors';

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
    console.log({ title ,subTitle, image, IconComponent, onPress, renderRightActions });
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGray}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && (<AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>)}
                    </View>
                    <MaterialCommunityIcons
                        color={colors.medium}
                        name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white
    },
    detailContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    }
});

export default ListItem;

