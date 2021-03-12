import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as firebase from 'firebase';
import apiKeys from './src/config/keys';
import WelcomeScreen from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import SignIn from './src/screens/SignIn';
import LoadingScreen from './src/screens/Loading';
import Dashboard from './src/screens/Dashboard';

const Stack = createStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Loading'} component={LoadingScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Sign Up' component={SignUp} options={{ headerShown: false }}/>
          <Stack.Screen name='Sign In' component={SignIn} options={{ headerShown: false }}/>
          <Stack.Screen name={'Dashboard'} component={Dashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
