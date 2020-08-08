
const outer = function() {
    let a = 1;
    
    const inner = function() {
        return ++a;
    };
    return inner;
}

//const outer2 = outer() 으로 쓰지 않는 이유 : const면 추후에 클로저 해제가 불가능함
let outer2 = outer();
console.log(outer2);
console.log(outer2());
console.log(outer2()); // 어째서 outer가 끝나고도 inner의 호출이 되는가?
// 이유 : 가비지 컬렉터가 outer의 lexical env 정보를 제거하지 않음
// 지우지 않은 이유 :outer의 lexcial env 정보가 외부로 전달되기 때문

// 클로저 끊어주기(해제)
// 방법 : 제거하고자 하는 지역변수를 호출/참조하는 식별자에 null 대입
outer2 = null;

console.log(outer2);