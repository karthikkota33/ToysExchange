import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

import Screen from '../../components/Screen';
import PickerItem from '../../components/PickerItem';
import AppText from '../../components/AppText/AppText';
import Colors from '../../config/colors';
import { Label } from 'native-base';

const data = [
  { label: 'All', value: 0 },
  { label: 'Cars', value: 1 },
  { label: 'Electronics', value: 2 },
  { label: 'Games', value: 3 },
  { label: 'Teddy', value: 4 },
  { label: 'Education', value: 5 },
  { label: 'Puzzles/Games', value: 6 },
  { label: 'Vehicles', value: 7 },
  { label: 'Others', value: 8 },
];


const TestingFilter = ({ handleFilter }) => {
  const [category, selectedCategory] = useState(0);

  const UpdateCategory = (val) => {
    //console.log(val)
    selectedCategory(val)
    handleFilter(val);
    //console.log(handleFilter);
  }

  return (
    //<Screen>
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data.sort((a, b) => a.label.localeCompare(b.label))}
        keyExtractor={item => item.value.toString()}
        showsHorizontalScrollIndicator={false}

        renderItem={({ item }) =>
          <View>
            <TouchableOpacity style={{
              padding: 5
            }} onPress={() => UpdateCategory(item.value)}>
              <AppText style={category === item.value
                ? styles.selectedColor : styles.list
              }>{item.label}</AppText>
            </TouchableOpacity>
          </View>
          // <PickerItem
          //   item={item}
          //   label={item.label}
          // />
        }
      />
    </View>
    //</Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  list: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: Colors.lightGray,
  },
  selectedColor: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: Colors.primary,
    color: Colors.white,
    overflow: "hidden"
  }
});

export default TestingFilter;



// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   SectionList
// } from "react-native";
// import Constants from "expo-constants";

// const DATA = [
//   {
//     title: "Main dishes",
//     data: ["Pizza", "Burger", "Risotto"]
//   },
//   {
//     title: "Sides",
//     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
//   },
//   {
//     title: "Drinks",
//     data: ["Water", "Coke", "Beer"]
//   },
//   {
//     title: "Desserts",
//     data: ["Cheese Cake", "Ice Cream"]
//   }
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// const TestingFilter = () => (
//   <SafeAreaView style={styles.container}>
//     <SectionList
//       sections={DATA}
//       horizontal
//       keyExtractor={(item, index) => item + index}
//       renderItem={({ item }) => <Item title={item} />}
//       renderSectionHeader={({ section: { title } }) => (
//         <Text style={styles.header}>{title}</Text>
//       )}
//     />
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//     marginHorizontal: 16
//   },
//   item: {
//     backgroundColor: "#f9c2ff",
//     padding: 20,
//     marginVertical: 8
//   },
//   header: {
//     fontSize: 32,
//     backgroundColor: "#fff"
//   },
//   title: {
//     fontSize: 24
//   }
// });

// export default TestingFilter;