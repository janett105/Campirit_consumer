import React, { useState, } from 'react';
import { 
  StyleSheet,
  ImageBackground,
  Image,
  Text, 
  View, 
  Pressable, 
  Dimensions,
  Platform,
  StatusBar,
  Animated,
  Alert,} from 'react-native';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const StatusBarHeight =
    Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

  export default function Quiz1({navigation, ansList, setansList}){
    const [chosen1, setChosen1] = useState(false);
    const [chosen2, setChosen2] = useState(false);
    const [chosen3, setChosen3] = useState(false);
    const [chosen4, setChosen4] = useState(false);
    const [chosen5, setChosen5] = useState(false);

  const CanNEXT = () =>{
    let num = 0;

    chosen1==true ? (num += 1) : null;
    chosen2==true ? (num += 1) : null;
    chosen3==true ? (num += 1) : null;
    chosen4==true ? (num += 1) : null;
    chosen5==true ? (num += 1) : null;

    num == 1 ? NEXT() : OnemoreTime();
  }   

  const OnemoreTime = () => {
    Alert.alert(
      '',
      '한 가지만 선택해주세요',
      [{text: '다시 고르기', onPress: () => null}],
    )
  }
  
  const NEXT =()=>{
      navigation.navigate('Quiz2')

      chosen1 ? setansList({ ...ansList, A1: "10~20대" }) : null
      chosen2 ? setansList({ ...ansList, A1: "30대" }) : null
      chosen3 ? setansList({ ...ansList, A1: "40대" }) : null
      chosen4 ? setansList({ ...ansList, A1: "50대" }) : null
      chosen5 ? setansList({ ...ansList, A1: "60대 이상" }) : null
    }

    const [loaded] = useFonts({
      YiSunShin_B: require('../../assets/fonts/이순신돋움체B.ttf'),
      Roboto:require('../../assets/fonts/Roboto.ttf'),
    });
    if (!loaded) {
      return null;
    }

    return (
        <View style={styles.container}>
{/* /////////////////////////////////<<<< Header : 파란물결 >>>>>////////////////////////////////////// */}
          <View style={styles.header}>
            <ImageBackground  
              style={styles.headerWave}
              source={require("../../assets/images/Quiz/headerWave.png")} 
              resizeMode="cover">
            <Text style={styles.headerText}>
              당신에 관한 간단한 질문에 응답해주세요.
            </Text>
            </ImageBackground>
          </View>
{/* ////////////////////////////<<<< Body : 질문, 선택지, NEXT버튼 >>>>>///////////////////////////////////////// */}
          <View style={styles.body}>
            <Text style={styles.quizText}>1. 연령대가 어떻게 되시나요?</Text>
            <View>
              <Pressable
                onPress={()=>{setChosen1(prev => !prev)}}
                style={{...styles.btn_Ans, backgroundColor: chosen1 ? "#F3AE58" : "#D9D9D9"}}
                hitSlop={{top: 5, bottom:50,}}>
                <Text style={styles.btn_ansText}>10~20대</Text>
              </Pressable>       
              <Pressable
                onPress={()=>{setChosen2(prev => !prev)}}
                style={{...styles.btn_Ans, backgroundColor: chosen2 ? "#F3AE58" : "#D9D9D9"}}
                hitSlop={{top: 5, bottom:50,}}>
                <Text style={styles.btn_ansText}>30대</Text> 
              </Pressable> 
              <Pressable
                onPress={()=>{setChosen3(prev => !prev)}}
                style={{...styles.btn_Ans, backgroundColor: chosen3 ? "#F3AE58" : "#D9D9D9"}}
                hitSlop={{top: 5, bottom:50,}}>
                <Text style={styles.btn_ansText}>40대</Text>    
              </Pressable> 
              <Pressable
                onPress={()=>{setChosen4(prev => !prev)}}
                style={{...styles.btn_Ans, backgroundColor: chosen4 ? "#F3AE58" : "#D9D9D9"}}
                hitSlop={{top: 5, bottom:50,}}>
                <Text style={styles.btn_ansText}>50대</Text>    
              </Pressable>
              <Pressable
                onPress={()=>{setChosen5(prev => !prev)}}
                style={{...styles.btn_Ans, backgroundColor: chosen5 ? "#F3AE58" : "#D9D9D9"}}
                hitSlop={{top: 5, bottom:50,}}>
                <Text style={styles.btn_ansText}>60대 이상</Text>   
              </Pressable>  
            </View>
            <Pressable style={styles.btn_Next} onPress={CanNEXT} >
              <Text style={styles.btn_nextText}>NEXT</Text>
            </Pressable>
          </View>
 {/* //////////////////////////<<<< Footer : 자동차 >>>>>/////////////////////////////////////////// */}
          <View style = {styles.footer}>
            <View style = {styles.process}>
            <Animated.Image
                source={require("../../assets/images/Quiz/movingCar.png")}
                style={styles.movingCar}/>
              <Text style = {styles.processText}>0%</Text>
            </View>
            <Image
              source={require("../../assets/images/Quiz/Line.png")}/>
          </View>
          <StatusBar backgroundColor='#213063'></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
  ///////////////////////////////<<<< Container : 최상위 박스 >>>>>//////////////////////////////////////  
  container: {
      flex: 1,
    },
    ///////////////////////////////<<<< Header : 파란물결 >>>>>//////////////////////////////////////
    header:{
      flex: 0.75,
      backgroundColor:"white",
      marginTop:StatusBarHeight,

      alignItems: "center",
    },
    headerWave:{
      width: windowWidth,
      height: 197,

      justifyContent: "center",
    },
    headerText:{
      color:"white",
      fontWeight:"400",
      fontSize:15,
      fontFamily:'YiSunShin_B',

      marginBottom:windowHeight*9/32/3,
      marginLeft :windowWidth/40,
    },
    ////////////////////////////<<<< Body : 질문, 선택지, NEXT버튼 >>>>>/////////////////////////////////////////
    body:{
      flex: 2,
      backgroundColor:"white",

      alignItems:'center',
      justifyContent: "center",
    },
    quizText:{
      // backgroundColor:"gray",
      fontWeight:"700",
      fontSize:20,
      fontFamily:"Roboto",

      marginBottom: windowHeight*5/8/17,
      marginLeft :-windowWidth/4,
    },
    btn_Ans:{
      borderRadius:8,
      width:windowWidth/2.5,
      height:windowHeight/32,

      marginBottom:windowHeight/60,

      justifyContent:'center',
      alignItems:'center',
    },
    btn_ansText:{
      fontWeight:"400",
      fontSize:14,
      fontFamily:"Roboto",
    },
    btn_Next:{
      width:windowWidth/1.8,
      height:windowHeight*5/8/12,
      borderRadius:13,
      backgroundColor: "#FFD300",

      marginTop:windowHeight/20,
      marginBottom:-windowHeight/20,

      justifyContent:"center",
      alignItems:"center",
    },
    btn_nextText:{
      color:"white",
      fontWeight:"400",
      fontSize:12,
      fontFamily:'YiSunShin_B',
    },
    //////////////////////////<<<< Footer : 자동차 >>>>>///////////////////////////////////////////
    footer:{
      flex: 0.18,
      backgroundColor:"white",
    },
    process:{
      // backgroundColor:"blue",

      flexDirection:"row",
      justifyContent:"flex-end", 
    },
    movingCar:{
      marginBottom:-windowHeight/80,
      marginRight:windowWidth-100,
    },
    processText:{
      alignSelf:"flex-end",
      marginBottom:3,
      marginRight:5,

      color:"#497860",
      fontWeight:"400",
      fontSize:12,
      fontFamily:'YiSunShin_B',
    },
  });