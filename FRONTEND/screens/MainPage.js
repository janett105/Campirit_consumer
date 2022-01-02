import React, { useRef, useState, useEffect} from 'react';
import { 
  StyleSheet,
  Image,
  Text, 
  View, 
  Pressable,   
  Dimensions,
  Platform,
  StatusBar,
  Animated,
  Alert,
  ImageBackground,} from 'react-native';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
    Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

export default function MainPage({ navigation }) {
    const [kit, setKit] = React.useState({
        텐트 : [
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
        타프: [
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

    
    const NEXT =()=>{
      // navigation.navigate('')
    }

    const [loaded] = useFonts({
      YiSunShin_B: require('../assets/fonts/이순신돋움체B.ttf'),
      Roboto:require('../assets/fonts/Roboto.ttf'),
    });
    if (!loaded) {
      return null;
    }

    return (
      <View style={styles.container}>
{/* ///////////////////////////////<<<< Header : 되돌아가기 버튼 >>>>>////////////////////////////////////// */}
        <View style={styles.header}>
          <View style={styles.BackToTent}>
            <Text>텐트</Text>
          </View>
          <View style={styles.BackToTaff}>
            <Text>타프</Text>
          </View>
        </View>
{/* ///////////////////////////////<<<< Body : 현재 선택 물품들 by 그림, 상세 물품 >>>>>////////////////////////////////////// */}
        <ImageBackground 
            style={styles.kitImage}
            source={require("../assets/images/MainPage/kitBackground.png")}>
        </ImageBackground>
        <View style={styles.kitlstTitle}>
          <Text style={styles.titleText}>나만의 스타터 키트 구성품</Text>
        </View>
        <View style={styles.kitLst}>
          <Text>여기에 물품 목록들</Text>
        </View>
{/* ///////////////////////////////<<<< Footer : 자동차, 다음 버튼 >>>>>////////////////////////////////////// */}
        <View style={styles.footer}>
          <View style = {styles.process}>
            <Animated.Image
                source={require("../assets/images/Quiz/movingCar.png")}
                style={styles.movingCar}/>
            <View style = {styles.bundle}>
              <Pressable style={styles.btn_Next} onPress={NEXT}>
                <Text style={styles.btn_nextText}>다음</Text>
             </Pressable>
              <Text style = {styles.processText}>45%</Text>
            </View>
          </View>
            <Image
              source={require("../assets/images/Quiz/Line.png")}/>
        </View>
        <StatusBar backgroundColor='#EEECE0'></StatusBar>
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:"white",
  },
/* ///////////////////////////////<<<< Header : 되돌아가기 버튼 >>>>>////////////////////////////////////// */
  header:{
    flex:0.14,
    marginTop:StatusBarHeight,
    backgroundColor:"#EEECE0",

    flexDirection:"row",
    justifyContent:"space-around", 
  },
  BackToTent:{
    backgroundColor:"pink",
  },
  BackToTaff:{
    backgroundColor:"tomato",
  },
/* ///////////////////////////////<<<< Body : 현재 선택 물품들 by 그림, 상세 물품 >>>>>////////////////////////////////////// */
  kitImage:{
    width: windowWidth,
    height: 355,
  },
  kitlstTitle:{
    flex:0.11,
    justifyContent:"center",
  },
  titleText:{
    fontWeight:"400",
    fontSize:14,
    fontFamily:'YiSunShin_B',

    marginLeft:10,
  },
  kitLst:{
    flex:0.89,
    backgroundColor:"tomato",
    height: windowHeight/23,
  },
/* ///////////////////////////////<<<< Footer : 진도율 표시 >>>>>////////////////////////////////////// */
footer:{
  flex: 0.17,
  backgroundColor:"white",
},
process:{
  flexDirection:"row",
  justifyContent:"flex-end",
},
movingCar:{
  alignSelf:"flex-end",
  marginBottom:-2,
  marginRight: windowWidth-300,
},
btn_Next:{
  backgroundColor: "#F2C892",
  borderRadius:9,
  width:65,
  height:25,

  marginRight:7,

  justifyContent:"center",
  alignItems:"center",
},
btn_nextText:{
  fontWeight:"400",
  fontSize:14,
  fontFamily:'YiSunShin_B',
},
processText:{
  alignSelf:"flex-end",
  marginTop:2,
  marginBottom:3,
  marginRight:5,

  color:"#497860",
  fontWeight:"400",
  fontSize:12,
  fontFamily:'YiSunShin_B',
},
});