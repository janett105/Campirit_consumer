import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';

import headerWave from "./assets/images/Quiz/headerWave.png";

export default function Quiz() {
  return (
    <View style={styles.container}>
        <ImageBackground source={require(headerWave)} style={styles.header}>
            <Text style={styles.headerText}>
                당신의 캠핑 스타일을 분석한 결과로 {"\n"}
                <Text style={{fontWeight: "bold"}}>캠핑 스타터 키트</Text>를 추천해 드릴게요.
            </Text>
        </ImageBackground>
      {/* 질문지 컴포넌트 */}
      {/* 자동차 질문에 따라 움직이는 컴포넌트 */}
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
  header: {
    flex:1,
    resizeMode:'contain', 
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});