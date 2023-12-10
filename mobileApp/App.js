import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { jwtDecode } from 'jwt-decode';
import Home from './Home/Home';
import Login from './Login/Login';
import GetStarted from './Register/RegisterEmail/GetStarted';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const loadFonts = async () => {
  await Font.loadAsync({
    'Cinzel-Bold': require('./assets/fonts/Cinzel-Bold.ttf'),
    'Cinzel-ExtraBold': require('./assets/fonts/Cinzel-ExtraBold.ttf'),
    'RethinkSans-Regular': require('./assets/fonts/RethinkSans-Regular.ttf'),
  });
};

const Stack = createNativeStackNavigator(); // Define the Stack

function App() {
  const [userData, setUserData] = useState('');
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadApp() {
      await loadFonts();
      setFontsLoaded(true);
    }

    loadApp();
  }, []);

  function decodeUserData() {
    AsyncStorage.getItem('userToken').then((token) => {
      console.log(token);
      let decodedToken = jwtDecode(token.toString());
      setUserData(decodedToken);
    });
  }

  if (!fontsLoaded) {

    return <Text>Loading</Text>;
  }

  console.log('App executed!');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Log in" component={Login} initialParams={{ decodeUserData: decodeUserData }} />
        <Stack.Screen name="Get started" component={GetStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
