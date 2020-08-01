// 기존 함수선언 방식
function add1 (x,y) {
    return x+y;
}
consolg.log(add1(1,3));


const add2 = function(x,y) {
    return x+y;
}
consolg.log(add2(1,3));

//화살표 함수
const add3 = (x,y) => {
    return x+y;
}
consolg.log(add3(1,3));

const add4 = (x,y) => x+y;
consolg.log(add4(1,3));

const add5 = (x,y) => (x+y);
consolg.log(add5(1,3));
