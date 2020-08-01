//Node.js 문법 : require문을 통해 모듈을 임포트
//js,json 등 생략 가능
const {odd,even} = require('./var');

const checkOddOrEven = (num) => {
    if (num % 2) 
        return odd;
    else
        return even;
};

module.exports = checkOddOrEven;