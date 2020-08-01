// 논블로킹 방식 : 콜백이 등장하고, 이벤트 루프/백그라운드/테스크 큐 등장
function run() {
    console.log("3초후 실행");
}

console.log("시작");
setTimeout(run,3000);
console.log("끝");