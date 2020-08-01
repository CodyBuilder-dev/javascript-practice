const string = "abc";
const number = 1;
const boolean = true;
const obj = {
    outside : {
        inside : {
            key:'value'
        }
    }
};

console.time("전체 시간"); // time("label") <-> timeEnd("label")간 시간 측정 
console.log("평범한 로그입니다. 쉼표로 구분해 여러개 찍을 수 있습니다");
console.log(string,number,boolean); // log에 여러 내용 표시
console.error("에러 메시지는 console.error에 담아주세요"); //

console.dir(obj, {colors:false,depth:2}); //객체 표시 console.dir(객체,옵션)
console.dir(obj, {colors:true,depth:1}); // 

console.time("시간 측정");
for (let i = 0; i< 100000;++i){
    continue;
}
console.timeEnd("시간 측정");

const b = () => {
    console.trace("에러 위치 추적");
}

const a = () => {
    b();
}

a();
console.timeEnd("전체 시간");