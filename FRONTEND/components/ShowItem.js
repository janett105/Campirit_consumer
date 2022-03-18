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
  ScrollView,
  ImageBackground,} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const windowWidth = Dimensions.get('window').width;

export default function ShowItem(props) {
  // const [loaded] = useFonts({
  //   'Baloo_2': require('../assets/fonts/Baloo Bhai 2.ttf'),
  //   'Baloo_jaan':require('../assets/fonts/Baloo Bhaijaan.ttf'),
  // });
  // if (!loaded) {
  //   return console.log("거지같다 거지다 이건 거지다");
  // }


  const A = props.ItemList;
  return (
      <View style={styles.Items}>
        {A.map(Item =>(
          <View style={styles.box}>
            <Image 
            source={require("../assets/images/MakeKit/retangle.png")}
            style={styles.ItemImage}/>
            <View>
              <Text style={styles.ItemName}>{Item.name}</Text>
              <Text style={styles.ItemPrice}>{Item.price}{' '}원</Text>
            </View>
          </View>
        ))}
      </View>
    );
}

const styles = StyleSheet.create({
  Items:{
    backgroundColor:'red',
    marginHorizontal:windowWidth/20,

    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  box:{
    backgroundColor:'blue',
    marginTop:windowWidth/30,
    
    flexDirection:'row',
  },
  ItemImage:{
    width:windowWidth/3.7,
    height:windowWidth/3.7,
    marginRight:windowWidth/70,
  },
  ItemName:{
    fontWeight:"400",
    fontSize:12,
    // fontFamily:'Baloo_jaan',
    color:'#213063',
  },
  ItemPrice:{
    fontWeight:"400",
    fontSize:10,
    // fontFamily:'Baloo_2',
  }
});