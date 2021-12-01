import { StatusBar } from 'expo-status-bar';
import React, { useState,  } from 'react';
import { StyleSheet, ImageBackground, Text, View, Pressable, ScrollView, Dimensions, FlatList} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default function Quiz({ route , navigation }) {
    
    const [answer, setAnswer] = useState({
        first: 0,
        second: 0,
        third: 0,
        fourth: 0,
        fifth: 0,
    })
    const [chosen1, setChosen1] = useState(false);
    const [chosen2, setChosen2] = useState(false);
    const [chosen3, setChosen3] = useState(false);
   
    const NEXT = () => {
        console.log("hi")

    }

    const DATA =[
        {
            question: "1.   몇 분이 캠핑을 떠나시나요?",
            choice1: "1~2명",
            choice1: "3~4명",
            choice1: "5명 이상",
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground  
                    style={styles.headerWave}
                    source={require("../assets/images/Quiz/headerWave.png")} 
                    resizeMode="cover"> 
                    <Text style={styles.headerText}>
                        당신의 캠핑 스타일을 분석한 결과로 {"\n"}
                        <Text style={{fontWeight: "bold", fontSize:24}}>캠핑 스타터 키트</Text>를 추천해 드릴게요.
                    </Text>
                </ImageBackground>
            </View>
            {/* <FlatList
                data={DATA}
            /> */}
            <ScrollView 
                contentContainerStyle={styles.quiz} 
                horizontal={true} 
                pagingEnabled
                // ref={scrollRef} 
                >
                <View style={styles.quiz1}>
                    <Text style={styles.quiz1Text}>1.   몇 분이 캠핑을 떠나시나요?</Text>
                    <View style={styles.choices}>
                        <View style={styles.list}>
                            <Pressable
                                style={{...styles.button, backgroundColor: chosen1 ? "#FF9899" : "white"}} 
                                onPress={()=>{setChosen1(prev => !prev)}}
                                hitSlop={{top: 5, bottom:50,}}>
                                <Text> </Text>
                            </Pressable>
                            <Text style={styles.buttonText}>1~2명</Text>
                        </View>
                        <View style={styles.list}>
                            <Pressable 
                                style={{...styles.button, backgroundColor: chosen2 ? "#FF9899" : "white"}} 
                                onPress={()=>{setChosen2(prev => !prev)}}
                                hitSlop={{top: 5, bottom:50,}}>
                                <Text> </Text>   
                            </Pressable>
                            <Text style={styles.buttonText}>3~5명</Text>
                        </View>
                        <View style={styles.list}>
                            <Pressable 
                                style={{...styles.button, backgroundColor: chosen3 ? "#FF9899" : "white"}} 
                                onPress={()=>{setChosen3(prev => !prev)}}
                                hitSlop={{top: 5, bottom:50,}}>
                                <Text> </Text>  
                            </Pressable>
                            <Text style={styles.buttonText}>5명 이상</Text>
                        </View>
                    </View>
                    <Pressable style={styles.buttonNext} onPress={NEXT} >
                        <Text style={styles.buttonnextText}>Next</Text>
                    </Pressable>
                    <View style={styles.footer}>
                        <ImageBackground
                            source={require("../assets/images/Quiz/movingCar.png")}
                            style={styles.movingCar}
                            resizeMode="cover">
                        </ImageBackground>
                        <ImageBackground
                            source={require("../assets/images/Quiz/Line.png")}
                            style={styles.Line}
                            resizeMode="cover">
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.quiz2}>
                    <Text>2.   어디서 주무실건가요?</Text>
                    <View style={styles.choices}>
                        <Pressable style={styles.button} >
                            <Text>1명</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={()=>console.log("pressed")}>
                            <Text>2명</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={()=>console.log("pressed")}>
                            <Text>3명</Text>
                        </Pressable>
                        <Pressable style={styles.button} onPress={()=>console.log("pressed")}>
                            <Text>4명</Text>
                        </Pressable>
                    </View>
                    <Pressable style={styles.buttonNext} >
                        <Text>Next</Text>
                    </Pressable>
                    
                </View>
            </ScrollView>
            <StatusBar></StatusBar>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex:1,
    marginBottom:-200,
    // backgroundColor: "black",
  },
  quiz:{
//    backgroundColor:"yellow",
   marginTop:-150,
   marginBottom:-275,
  },
  footer:{
    flex:0.3,
    marginTop:200,
  },
  headerText: {
    fontSize:18,
    fontWeight:"400",
    marginTop:60,
    marginLeft:26,
    color:"white",
  },
  quiz1:{
    width: windowWidth,
    justifyContent: 'center',
  },
  quiz2:{
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quiz1Text:{
      marginLeft:20,
      fontSize:24,
      fontWeight:"700"
  },
  choices:{
    flexDirection:"row",
    marginTop:50,
    justifyContent: "space-around",
  },
  buttonNext:{
    marginTop:70,
    marginLeft:80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFD300",
    borderRadius:13,
    width: 239,
    height: 40,
  },
  buttonnextText:{
    fontSize:14,
    fontWeight:"400",
    color:"white",
  },
  buttonText:{
    fontSize:18,
    fontWeight:"400"
  },
  button:{
    borderRadius:35,
    width:20,
    height:20,
    borderColor: "#FF9899",
    borderWidth: 5,
  },
  list:{
    alignItems: 'center',
  },
  headerWave:{
    width: windowWidth,
    height: 250,
  },
  Line:{
    width: windowWidth,
    height: 10,
  },
  movingCar:{
    width: 77,
    height: 42,
    // marginTop:190,
  },
});