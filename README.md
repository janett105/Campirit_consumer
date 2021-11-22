d# 지킬 것
1. 회의 전 github에 각자 한 것 자기 branch에 push

2. merge 브랜치는 master

3.  각자 해온 것 master branch에 merge하는 건 매주 정기 회의 시간에  

4. branch이름 : frontend(backend)_[이름]

협업 방법(김기원 읽자)

https://victorydntmd.tistory.com/91

## git사용
올리기

	$ git checkout [branch이름] 
	$ git add .
	$ git commit -m "[commit 참조문구]"
	$ git push -u origin [branch이름]
	
로컬 저장소 생성

    $ git init
 
유저 설정

    $ git user어쩌고인데 아 귀찮아
  
원격 저장소와 연결  

    $ git remote add origin [github주소]

브랜치 생성

	$ git branch [branch 이름]

브랜치 이동

  	$ git checkout [branch이름] 

전체 add

	$ git add .

commit 

  	$ git commit -m "[commit 참조문구]" 

push, pull 할 때 브런치 기본 설정

  	$ git push --set-upstream origin [branch이름] 

push

  	$ git push -u origin [branch이름]


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

### 기초

https://doorbw.tistory.com/121?category=687756
https://wordbe.tistory.com/entry/Git-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%ACcommit-push-pull-request-merge-%EB%93%B1

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
#### styles

수직방향 정렬

	justifyContent: "center",

수평방향 정렬

	alignItems: "center",

여백

	padding(Horizontal): 10,

배경색
	
	backgroundColor: "#DDDDDD",
	
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


#### 기능

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
	
	
defaultProps


navigation
https://reactnavigation.org/docs/getting-started

	npm install @react-navigation/native
	expo install react-native-screens react-native-safe-area-context
	npm install @react-navigation/native-stack
	
button 만드는 페이지에 navigation 불러오고, 
app.js navigator에 연결하려는 screen 정의되어 있어야 함
navigation.navigate('이동하려는 페이지')    // screen 대체
navigation.push('이동하려는 페이지')      //screen 하나 추가
navigation.goBack()        // screen 하나 pop
navigation.popToTop()      // initial screen으로 navigate

	<TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('변경페이지 이름')}>
		<Text>여길 눌러</Text>    
        </TouchableOpacity> 


usestate

	const [저장 데이터 변수, 저장 데이터 변경 함수] = useState(저장 데이터);
	var new = [...저장 데이터 변수]      //(저장 데이터deep copy해서 사용)
	저장 데이터 변경 함수(new처리);      // 저장 데이터를 대체

