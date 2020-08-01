// 블로킹 방식 : 콜스택의 적재 순서를 정확히 지킴
function first() {
    second();
    console.log("첫번째");
}
function second(){
    third();
    console.log("두번째");
}

function third() {
    console.log("세번째");
}