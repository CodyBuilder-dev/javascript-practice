# 아메리카노 한잔으로 배우는 Express

## 목적
얇은 책이라 간단하게 익스프레스 연습하기 좋음

## 따라가기
### npm 기본 설치 폴더
-g 옵션 없이 :  
    해당 디렉토리 아래의 node_modules
    
-g 옵션을 줄 경우 :
    (Window) C:\Users\계정\AppData\Roaming\npm\node_moduels

### 프로젝트 생성 및 패키지 설치
프로젝트 생성
    express 프로젝트명

패키지 설치
    npm i 

### express app.js 실행명령어
npm start  

### node app.js 로 실행이 안되는 이유
1. bin/www가 실행되며, 프로세스 내에서 서버 객체를 만들어 주고
2. 해당 프로세스 내에서 app.js가 돌아가는 방식이기 때문
3. 정말 node로 하고싶으면 **node bin/www** 으로 하면 됨
