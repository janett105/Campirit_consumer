import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Quiz from './screens/Quiz.js';
import startPage from './screens/startPage.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="startPage">
          
        <Stack.Screen name="startPage" component={startPage} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }}/>
        
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