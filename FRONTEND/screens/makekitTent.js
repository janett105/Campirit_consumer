//사용자가 선택한 상품 정보를 mainPage.js에 있는 kit에 넣으면 됨. 

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, } from 'react-native';

export default function Quiz({ route, navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>
            makekitTent{"\n"}
            Tent : {Tent[0].color}  {"\n"}
            Taff : {route.params?.Taff}
        </Text>
        <Text>하나의 키트에는 하나의 텐트만 구매할 수 있어요!</Text>
      {/* 고치는 페이지에서 사라짐(+자동차) */}
      <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate({
        name: 'mainPage',
        params: {Tent : Tent},
        })}>
        <Text>다음</Text>
      </TouchableOpacity>
       {/* 나중에 고칠 때만 나옴  */}
      <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate({
        name: 'mainPage',
        params: {Tent : Tent},
        })}>
        <Text>X</Text>    
      </TouchableOpacity>
      <Button title='눌러봐 자식아' onPress={()=>setTent([...Tent,Tent[0]={...Tent[0],size:'하양'}])}>요기 누르면 하얀색</Button>
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