// setInterval을 통한 콜백 맛보기
let count =0;
const timer = setInterval(function() {
    console.log(count);
    if(++count > 4 ) clearInterval(timer);
},300);

console.log(timer);
setTimeout(function() {
    console.log(timer);
},2000);