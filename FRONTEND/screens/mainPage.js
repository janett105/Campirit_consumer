import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, 
    TouchableOpacity, ImageBackground,} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function mainPage({ route , navigation }) {
    const [kit, setKit] = React.useState({
        Tent : [
            {
                name: '짱 이쁜 텐트래',
                size: 's',
                color: '검정',
                //사용자 선택 사항들
            },
            {
                name: '',
                size: 'm',
                color: '노란색',
                //사용자 선택 사항들
            }
        ],
        Taff: [
            {
                name: '타프1',
                size: 's',
                color: '검정',
                //사용자 선택 사항들
            },
            {
                name: '타프2',
                size: 'm',
                color: '노란색',
            //사용자 선택 사항들
            }
        ],
        //키트 상품들
    });

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate('makeitTent')}>
                    <Text>텐트 돌아가기</Text>    
                </TouchableOpacity>
            {/* 타프 순서 거치기 전에는 누르면 아직 안된다고 떠야 함 */}
                <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate('makeitTaff')}>
                    <Text>타프 돌아가기</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.kitlistImage}>

            </View>


            <View style={styles.kitList}>

            </View>


            <View style={styles.footer}>
            {/* 계속 이동하는 페이지가 변해야함 */}
                <TouchableOpacity style={styles.buttonNext} onPress = {() => navigation.navigate('makekitTaff')}>
                    <Text>다음</Text>
                </TouchableOpacity>
            </View>
            <StatusBar></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'tomato',
  },
  header:{
    flex: 1,
    backgroundColor:"#EEECE0",
  },
  kitlistImage:{
    flex: 6,
  },
  kitList:{
    flex:6,
    backgroundColor:"black",
  },
  footer:{
    flex: 1,
    backgroundColor:"yellow"
  },
  buttonNext: {
    backgroundColor: 'green',
  }
});