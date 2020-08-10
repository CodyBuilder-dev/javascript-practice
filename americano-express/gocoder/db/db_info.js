// (function{})(); 구문 알지? 익명함수를 바로 실행시키는 구문
module.exports = (function() {
    return {
        local:{
            host:'localhost',
            port:3306,
            user:'test',
            password:'test',
            database:'test'
        },
        prod:{
            host:"",
            port:"",
            user:"",
            password:"",
            database:""
        },
        staging:{
            host:"",
            port:"",
            user:"",
            password:"",
            database:""
        },
        dev:{
            host:"",
            port:"",
            user:"",
            password:"",
            database:""
        },
    }
})();