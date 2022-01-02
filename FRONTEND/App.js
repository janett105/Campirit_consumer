import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainPage from './screens/MainPage.js';
import Quiz from './screens/Quiz.js';
import Makekit from './screens/Makekit.js';
import StartPage from './screens/StartPage.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartPage">
        <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }}/>
        <Stack.Screen name="Makekit" component={Makekit} options={{ headerShown: false }}/>
        <Stack.Screen name="StartPage" component={StartPage} options={{ headerShown: false }} />
        <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <StatusBar></StatusBar>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
});