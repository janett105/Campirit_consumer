# 지킬 것
1. 회의 전 github에 각자 한 것 자기 branch에 push

2. merge 브랜치는 master

3.  각자 해온 것 master branch에 merge하는 건 매주 정기 회의 시간에  

4. branch이름 : frontend(backend)_[이름]

협업 방법(김기원 읽자)

https://victorydntmd.tistory.com/91

## git사용
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

기초

https://doorbw.tistory.com/121?category=687756
https://wordbe.tistory.com/entry/Git-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%ACcommit-push-pull-request-merge-%EB%93%B1

오류

https://coding-sojin2.tistory.com/102
