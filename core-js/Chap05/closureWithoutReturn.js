// 테크닉 : (function{...})(); 로 익명함수를 바로 실행시킬 수 있음
(function() {
    let a = 0;
    let intervalId =null;
    //const inner = function() 이 아닌 이유 : 추후에 클로저를 제거하지 위해서
    let inner = function(){
        if(++a >= 5) {
            clearInterval(intervalId);
            // 클로저 제거
            inner = null;
        }
        console.log(a);
    };
    intervalId = setInterval(inner,1000);
})
();