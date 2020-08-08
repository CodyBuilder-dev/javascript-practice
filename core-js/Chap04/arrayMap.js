/*Javascript Array에 map을 적용했을때 동작 이해

Array.prototype.map(callback[,thisArg])
callback input : function(현재값,인덱스,어레이)
callback output : 최종 수행 결과로 나오는 배열
*/
var newArr =[10,20,30].map(function(currentValue,index){
    console.log(currentValue,index);
    return currentValue + 5;
});

console.log(newArr);