const sayNode = function() {
    console.log("Node");
};
const es = "ES";

// old object

// new object
const newObject = {
    sayJS() {
        console.log("JS");
    }, // 메소드 선언시 :,function필요 없음
    sayNode, // 멤버명과 변수명이 겹칠경우 두번 쓸 필요 없음
    [es+6]:"Fantastic", // 멤버명을 동적으로 생성 가능
};

newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

