// call 메소드를 통한 this 바인딩
// 그러나, 가독성이 매우 떨어진다(call의 기능을 모르면 해석이 안된다)

var func = function(a,b,c,){
    console.log(this,a,b,c);
};

func(1,2,3);

func.call(this,4,5,6);



var obj = {
    a:1,
    method:function(x,y){
        console.log(this.a,x,y);
    }
};

obj.method(2,3);
obj.method.call({a:6},2,3); // this 를 {a:6}으로 바인딩
