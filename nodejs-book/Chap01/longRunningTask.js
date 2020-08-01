//장기 작업
function longRunningTask() {
    //오래 걸리는 작업
    console.log("작업 끝");
}

// 블로킹 방식
console.log("작업 시작");
longRunningTask();
console.log("다음 작업");

// 논블로킹 방식
console.log("작업 시작");
setTimeout(longRunningTask,0);
console.log("다음 작업");
