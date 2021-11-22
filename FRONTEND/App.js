import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView, ScrollView,  StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>화면이다</Text>
      </ScrollView>
      <StatusBar></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});