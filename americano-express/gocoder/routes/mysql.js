const express = require("express");
const router = express.Router();
const mysql_odbc = require("../db/db_conn")(); //mysql_odbc내의 익명함수를 바로 실행시킴
const conn = mysql_odbc.init();

router.get("/",function(req,res){
    conn.connect((err)=>{
        if(err){
            res.render("mysql",{connect:"연결 실패",err:err});
            console.error(err);
            throw err;
        }
        else {
            res.render("mysql",{connect:"연결 성공",err:"없음"});
        }
    });

});

module.exports = router;
