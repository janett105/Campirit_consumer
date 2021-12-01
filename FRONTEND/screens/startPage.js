import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function Quiz( { navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            startPage
        </Text>
        <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate('makekitTent')}>
        <Text>나만의 텐트 물품 사기 시작 퀴즈 버려~~~~</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate('Quiz')}>
        <Text>퀴즈페이지 가기</Text>
        </TouchableOpacity>
      <StatusBar></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});