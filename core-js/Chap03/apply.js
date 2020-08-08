// apply 메소드
// 인자를 하나씩 받느냐, 배열로 받느냐의 차이
var func = function(a,b,c){
    console.log(this,a,b,c);
}

func.apply({x:1},[4,5,6]);

var obj = {
    a:1,
    method:function (x,y) {
        console.log(this.a,x,y);
    }
};

obj.method.apply({a:4},[5,6]);

