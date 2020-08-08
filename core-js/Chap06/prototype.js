// 생성자 함수.
var Constructor = function(name){
    this._name = name;
};

// 생성자 함수의 프로토타입 정의
Constructor.prototype.method1 = function() {};
Constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);

