var Person = function (name) {
    this.name = name;
};

Person.prototype.getName = function() {
    return this.name;
};

var iu = new Person('지금');

// 오버라이딩 이전
console.log(iu.getName());

// getName 메소드 오버라이딩
// 자바스크립트 엔진이 자기자신의 getName부터 찾고, 없으면 그때 __proto__의 getNAme 호출
iu.getName = function(){
    return "바로 이 하루 이 "+this.name +" 우리, 눈부셔. 아름다워.";
};

// 오버라이딩 이후
console.log(iu.__proto__.getName());
console.log(iu.getName());