const mysql = require("mysql");
const config = require("./db_info");

module.exports = function(){
    return {
        init:function() {
            return mysql.createConnection({
                host:config().local.host,
                port:config().local.port,
                user:config().local.user,
                password:config().local.password,
                database:config().local.database,
            })
        }
    }
};