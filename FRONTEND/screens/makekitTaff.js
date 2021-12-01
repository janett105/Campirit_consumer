import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default function Quiz({ route , navigation }) {
  const [Taff, setTaff] = useState([{
    name: '짜증나는 타프 자식',
    size: '',
    color: '',
    //사용자 선택 사항들
  }])

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        makekiTaff{"\n"}
        Tent : {route.params?.Tent}  {"\n"}
        Taff : {Taff}
      </Text>
      <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate({
        name: 'mainPage',
        params: {Taff : Taff},
        })}>
        <Text>다음</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.goBack()}>
        <Text>X</Text>    
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