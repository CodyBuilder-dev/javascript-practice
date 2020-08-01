//ES2015 자바스크립트 문법 : import 문을 이용
import { odd, even } from './var';

const checkOddOrEven = (num) => {
    if (num % 2) 
        return odd;
    else
        return even;
};

//ES2015 자바스크립트 문법 : export 문 이용
export default checkOddOrEven;