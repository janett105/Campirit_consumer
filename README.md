# 지킬 것
회의 전 github에 각자 한 것 자기 branch에 push

페이지 이름 대소문자 주의할 것(구글 문서에 있음, 거기서 첫 번째 문자도 대문자로 수정(소문자로 하면 오류 날 때가 있음..) )

협업 방법

	https://victorydntmd.tistory.com/91

# 개발 중 추가 확장자 설치(사용법은 밑에서 보아라)

picker 셀렉터 박스 사용 설치(https://github.com/react-native-picker/picker)

	npm install @react-native-picker/picker --save	

statusbar높이 구하기( ios 위해서 )

	npm install --save react-native-status-bar-height
	
font 설정

	npm install expo-font
	
navigation
	
	npm install @react-navigation/native
	expo install react-native-screens react-native-safe-area-context
	npm install @react-navigation/native-stack
	
# 데이터 저장 

Quiz 답변(app.js)

	const[ansList, setansList] = useState(
    	{
      	A1:"",    //string
     	A2:"",    //string
      	A3:"",    //string
      	A4:0,     //int (1 이상, 0 이면 선택 안 된 것)
      	A5:0,	  //int (1 이상, 0 이면 선택 안 된 것)
      	A6:0,     //int (1 이상, 0 이면 선택 안 된 것)
      	A7:0,     //int (1 이상, 0 이면 선택 안 된 것)
      	A8:0,     //int (1 이상, 0 이면 선택 안 된 것)
      	A9:0,     //int (1 이상, 0 이면 선택 안 된 것)
      	Af:0,     //int (1 이상, 0 이면 선택 안 된 것)
    	});
	
스타터 키트 선택 목록(MainPage.js)
	
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
	
물품 선택 여부, 선택한 물품 선택사항

## git사용
올리기

	$ git checkout [branch이름] 
	$ git add .
	$ git commit -m "[commit 참조문구]"
	$ git push -u origin [branch이름]

merge하기

	 자신의 branch에서 작업
	 자신의 branch 원격 저장소에 push
	 $ git checkout master
	 $ git merge [branch 이름]
	 $ git push -u origin master
	 둘 다 master에 push 
	 # git checkout master
	 # git pull origin master
	 충돌 수정
	 # git checkout [branch 이름]
	 # git merge master

	
로컬 저장소 생성

    $ git init
 
유저 설정

    $ git user어쩌고인데 아 귀찮아
  
원격 저장소와 연결  

    $ git remote add origin [github주소]

브랜치 생성

	$ git branch [branch 이름]

push, pull 할 때 브런치 기본 설정

  	$ git push --set-upstream origin [branch이름] 


원격 저장소와의 연결 해제

	$ git remote remove origin 

특정 branch clone

	$ git clone -b [branch 이름] --single-branch [원격저장소 주소]
	
파일 삭제

	$ git rm [파일명]                //local, remote 저장소 삭제  
	$ git rm --cached [파일명]       //remote 저장소 삭제 
	$ git commit -m "~"
	$ git push -u origin [branch이름]
	
폴더 삭제

	$ git rm -rf [폴더명]/           //local, remote 저장소 삭제
	$ git rm --cached -r [폴더명]/   //remote 저장소 삭제 
	$ git commit -m "~"
	$ git push -u origin [branch이름]


### 오류
폴더 업로드 시 흰 화살표 (내부 채워지지 않은 하위 모듈 상태) : 원인- 안에 '.git'폴더 있어서, 삭제해야함

	$ cd  ./[오류 발생 디렉토리]
	$ git checkout [branch 이름] 
	$ ls -al
	$ rm -rf .git
	$ git rm --cached . -rf
	$ git add .
	$ git status
	$ git commit -a -m "~"
	$ git push origin [branch이름]



## react native(ios, android 모두 가능한 기능만 사용할 것)
### 스타일(windowwidth, windowheight 사용해서 스타일 크기 작성할 것!!!핸드폰마다 화면 크기 다 다르다!!)

	justifyContent: "center"
	alignItems: "center",
	
text 줄바꿈

	1. 글{"\n"}글
	2. {`글글`}

background image

	import { StyleSheet, ImageBackground } from 'react-native';
	
	<ImageBackground style={styles.header} source={require('../assets/test.png')} >
            <Text style={styles.headerText}>
                글
            </Text>
        </ImageBackground>
	
statusbar 높이 구하기
	
	import { getStatusBarHeight } from 'react-native-status-bar-height';
	import { StatusBar, Platform } from 'react-native';

	const StatusBarHeight =
    		Platform.OS === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight;

custom font 적용(주의 사항 : ttf파일 들어갔을 때 맨 위에 '글꼴 이름:'에 써 있는 이름대로 파일 이름을 변경할 것)
	
	import { useFonts } from 'expo-font';
	export default function App() {
  		const [loaded] = useFonts({
    		폰트 이름: require('폰트 local 저장 경로'),
  		});
  
  		if (!loaded) {return null;}

  	return (
    		<View>
      			<Text style={{ fontFamily: '폰트 이름', }}>~</Text>
    		</View>
  		);
	}
	
핸드폰 화면 높이, 너비 구하기 

	import { Dimensions } from 'react-native';
	
	const windowWidth = Dimensions.get('window').width;
	const windowHeight = Dimensions.get('window').height;

### 기능

버튼

	import { useState } from "react";
	import { TouchableOpacity } from "react-native";
	const App = () => {
  		const [count, setCount] = useState(0);
  		const onPress = () => setCount(prevCount => prevCount + 1);
		return (
			<Text>Count: {count}</Text>
			<TouchableOpacity
        			style={styles.button}
        			onPress={onPress}
      			>
        		<Text>Press Here</Text>
     			</TouchableOpacity>
  		);
	};
	borderRadius: 5
	
	
Animation

	import {Animated} from 'react-native';
	
	export default function 화면이름(){
		const 변수 = useRef(new Animated.Value(초기값)).current 
   		 React.useEffect(() => {
      			Animated.timing(
        			변수,{
          			toValue: 애니메이션 마지막 값,
          			duration: 애니메이션 지속 시간,
         		 	useNativeDriver: true,}
      			).start();
    		}, [변수])
		return (
			<Animated.Image
                		style={[styles.movingCar, {
                 			transform: [{ translateX: 변수 }]
					}
				]}
			/>
		);
	}
	
Alert

	import { Alert,} from 'react-native';
	
	Alert.alert(
        '알림창 제목',
        '알림창 내용',
        [{text: '버튼1내용', onPress: () => 버튼 눌렀을 때 실행}],
      )

### navigation

button 만드는 페이지에 navigation 불러오고, 

app.js navigator에 연결하려는 screen 정의되어 있어야 함

navigation.navigate('이동하려는 페이지')    // screen 대체

navigation.push('이동하려는 페이지')      //screen 하나 추가

navigation.goBack()        // screen 하나 pop

navigation.popToTop()      // initial screen으로 navigate

	function({navigation}) {
		return (
			<TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('변경페이지 이름')}>
				<Text>여길 눌러</Text>    
        		</TouchableOpacity> 
		)
	}
	
pass params

	function({navigation}) {
		return (
			<TouchableOpacity style={styles.button} onPress = {() => {
				navigation.navigate('변경페이지 이름', {a: 6,
					b: 'hi',
				})
				}}
			>
				<Text>여길 눌러</Text>    
        		</TouchableOpacity> 
		)
	}            //정보 보냄

	function({route}) {
		const { itemId, otherParam } = route.params;
		return ()
	}            //정보 
	
pass params app.js

	*app.js
	
	<Stack.Screen name= "화면 이름" options={{ headerShown: false }} children={
          ({navigation}) => <화면 이름 navigation={navigation} children에서 사용할 params이름 = {app.js에서 전달할 params} />
          }/>
	  
	*children 화면
	
	export default function 화면 이름({navigation, children에서 사용할 params이름}) {return ();}
	
param 초기화 : app.js에서 default 설정 
	
	<Stack.Screen name="startPage" component={startPage} initialParams={{ Tent:'선택 안 함', Taff : '선택 안 함' }} />
	
셀렉터 박스(드롭다운?)

	import React, {useState} from 'react';

 	const [selectedLanguage, setSelectedLanguage] = useState();    상태 설정
 
 	<Picker
  	selectedValue={selectedLanguage}
  	onValueChange={(itemValue, itemIndex) =>
    	setSelectedLanguage(itemValue)
  	}>
  	<Picker.Item label="옵션1" value="option1" />
  	<Picker.Item label="옵션2" value="option2" />
  	<Picker.Item label="옵션3" value="option3" />
	</Picker>
	
### Hook

useState

	const [저장 데이터 변수, 저장 데이터 변경 함수] = useState(저장 데이터);
	var new = [...저장 데이터 변수]      //(저장 데이터deep copy해서 사용)
	저장 데이터 변경 함수(new처리);      // 저장 데이터를 대체
	
useEffect(https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)

### 함수

 첫 문자는 무조건 대문자 (이걸로 4시간을 쓰다니 하하하....)유감
	
