var num1 = 1;
var num2 = 1;
var num3 = "귀요미";

// 기존 스트링으로 생성
var string1 = num1 + "더하기 " + num2 + "은 "+ num3;
console.log(string1);

// 템플릿 스트링으로 생성
// 백틱(backtick) 사용
var string2 = `${num1} 더하기 ${num2} 은 ${num3}`;
console.log(string2);