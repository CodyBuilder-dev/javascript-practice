// 유사 배열 객체 Grade를 만들어 , prototype에 배열을 연결하기
var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i<args.length;i++){
        this[i] = args[i];
    }
    this.length = args.length;
};

console.dir([]);
console.dir(Grade);

var g = new Grade(100,200,300,400);

console.dir(g);

//g.push(100); //에러 발생. 배열이 아니므로
//Grade.prototype = []; // 책에서는 자동 체이닝 된다는데 여기선 안됨
g.__proto__ = [];
console.log(g.__proto__ == Grade.prototype)
console.log(g.__proto__)
console.log(Grade.prototype)
g.push(100);
console.log(g);
g.push(200);
console.log(g);
g.pop();
console.log(g);