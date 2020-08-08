var Person = function(name) {
    this._name = name
}

Person.prototype.getName = function() {
    return this._name;
}

var suzi = new Person('Suzi');
var brown = new Person('Brown');
//console.log(suzi.getPrototypeOf()); node에서는 미지원
console.log(suzi.__proto__);
console.log(suzi.__proto__.getName()); // undefined가 발생

// Constructor의 prototype과 Instance의 __proto__는 동일한 객체이다
console.log(Person.prototype === suzi.__proto__);

// Person.prototype에 값을 직접 넣으면, 모든 인스턴스에 동일하게 적용된다
brown.__proto__._name = 'brown'
console.log(suzi.__proto__.getName()); // Suzi 대신 Brown 발생

// 그냥 getName도 되긴 한다.
// (이유 : __proto__ 는 생략 가능한 프로퍼티이다. getName은 가져오되, this)
console.log(suzi.getName());
