import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import { AppLoading } from 'expo';


import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import MessageScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';

import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreens';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import { navigationRef } from './app/navigation/rootnavigation';
import BadgeTesting from './app/screens/BadgeTesting';
import SliderTesting from './app/screens/TestinfScreens/SliderTesting';
import TestingSlider from './app/screens/TestinfScreens/TestingSlider';
import TestingFloating from './app/screens/TestinfScreens/TestingFloatingIcon';
import ImageSlider from './app/components/ImageSlider';
import TestingFilter from './app/screens/TestinfScreens/Testingfilter'

export default function App() {

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  if (!isReady) {
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );
    //console.log(isReady);
    // return (
    //   <>
    //     setUser(null);
    //     authStorage.removeToken();
    //   </>
    // )
    // setUser(null);
    // authStorage.removeToken();
    // return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn} />
  }


  //NetInfo.addEventListener(netInfo => console.log(netInfo));
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>

    // <TestingFilter />
    // <ImageSlider />
    // <TestingSlider />
    // <SliderTesting />
    //<ListingScreen />
    // <TestingFloating />

    // <Screen>
    //   {/* <Button title="Select Image" onPress={SelectImage} />
    //   <Image source={{ uri: imageURI}} style={{width:200, height:200}} /> */}
    //   <ImageInputList
    //     imageUris={imageUris}
    //     onAddImage={handleAdd}
    //     onRemoveImage={handleRemove}
    //   />
    // </Screen>

    // <ListingEditScreen />
    // <ListItem/>
    // <Screen>
    //   <AppPicker
    //   selectedItem={category}
    //   onSelectedItem = {(item) => setCategory(item)}
    //    icon="apps" items={categories} placeholder="Category" />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>

    // <Screen>
    //   <ListItem
    //     title="My Title"
    //     subTitle="My SubTitle"
    //     image={require('./app/assets/Karthik.jpeg')}
    //     ImageComponent={<Icon
    //       name="email"
    //       size={50}
    //       backgroundColor="red"
    //       iconColor="white"
    //     />}
    //   />
    // </Screen>


    // <MessageScreen/>
    // <WelcomeScreen />
    // <View style={{
    //   backgroundColor: "#f8f4f4",
    //   padding: 20,
    //   paddingTop: 100
    // }}>
    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jacket.jpg")}
    //   />
    // </View>
    // <View style={{
    //   flex:1,
    //   justifyContent:"center",
    //   alignItems:"center"
    // }}>
    //   <AppButton title="Login" onPress={() =>{console.log("Tapped")}}/>
    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
