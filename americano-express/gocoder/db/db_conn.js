const mysql = require("mysql");
// 익명함수가 실행되며 return된 객체에서 local만 빼오기
const config = require("./db_info").local;

module.exports = function(){
    return {
        init:function() {
            return mysql.createConnection({
                host:config.host,
                port:config.port,
                user:config.user,
                password:config.password,
                database:config.database
            })
        }
    }
};