import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home/Home';
import Login from './Login/Login';
import GetStarted from './Register/RegisterEmail/GetStarted';
import RegisterPagesNavigator from './Register/RegisterEmail/RegisterPagesNavigator';
import CustomerScreens from "./CustomerScreens/CustomerScreens"
import WorkerScreens from "./WorkerScreens/WorkerScreens"
import * as SecureStore from 'expo-secure-store';
import * as Font from 'expo-font';
import AuthContext from './AuthContext';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const loadFonts = async () => {
  await Font.loadAsync({
    'Cinzel-Bold': require('./assets/fonts/Cinzel-Bold.ttf'),
    'Cinzel-ExtraBold': require('./assets/fonts/Cinzel-ExtraBold.ttf'),
    'RethinkSans-Regular': require('./assets/fonts/RethinkSans-Regular.ttf'),
  });
};

const Stack = createNativeStackNavigator(); // Define the Stack


function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_User':
          return {
            ...prevState,
            user: action.user,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            user: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      user: null,
    }
  );
  useEffect(() => {
    const bootstrapAsync = async () => {
      let user;
      try {
        user = await SecureStore.getItemAsync('user');
        user = JSON.parse(storedUser);
      } catch (e) {

      }
      dispatch({ type: 'RESTORE_User', user: user });
    };

    bootstrapAsync();
  }, [state.isSignout]);

  useEffect(() => {
    async function loadApp() {
      await loadFonts();
      setFontsLoaded(true);
    }

    loadApp();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: 'SIGN_IN', user: data });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
    }),
    []
  );


  if (!fontsLoaded || state.isLoading) {

    return <Text>LOADING</Text>;

  }

  console.log('App executed!');
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthContext.Provider value={authContext} headerBackTitleVisible="false" >
          <Stack.Navigator initialRouteName="Home">
            {state.user !== null && state.user.role === "ROLE_CUSTOMER" ? (
              <Stack.Screen name="Customer Screens" component={CustomerScreens} options={{ headerShown: false }} />

            ) : state.user !== null && state.user.role === "ROLE_EMPLOYEE" ? (
              <Stack.Screen name="Worker Screens" component={WorkerScreens} options={{ headerShown: false }} />

            ) : (
              <>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Log in" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Get started" component={GetStarted} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterPagesNavigator" component={RegisterPagesNavigator} options={{ headerShown: false }} />
              </>
            )}
          </Stack.Navigator>
        </AuthContext.Provider>
      </SafeAreaProvider>
    </NavigationContainer>

  );
}

export default App;
