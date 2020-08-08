# 프로토타입

## 네줄요약
1. Constructor(생성자 함수)에 prototype 프로퍼티를 정의한다
2. new로 Constructor를 호출한다
3. instance에는 prototype으로 부터 참조된 __proto__ 프로퍼티가 부여된다
4. instance에는 constructor 프로퍼티에 자기자신의 생성자를 참조하는데, 이를 통해 __proto__를 생략하고 생성자의 메소들르 쓸 수 있다.


## 프로토타입 체인
1. 모든 객체는 __proto__ 프로퍼티를 가짐
2. 근데 그 __proto__ 프로퍼티도 객체임
3. 따라서 __proto__ 내부에 __proto__ 를 가짐 ㅋㅋ
4. 무한 반복...(프로토타입 체인)