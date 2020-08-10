// 게시판(board)용 라우터
const express = require("express");
const router = express.Router();
const mysql_odbc = require("../db/db_conn")(); //mysql_odbc내의 익명함수를 바로 실행시킴
const conn = mysql_odbc.init();

router.get('/list',function(req,res){
    res.redirect('/board/list/1');
});

router.get('/list/:page',function(req,res){
    let page = req.params.page;
    let sql = "SELECT idx,name,title,date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate," +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql,function(err,rows){
        if(err) console.error("Err :"+err);
        res.render('list',{title:"게시판 리스트",rows:rows});
    })
});

router.get('/write',function(req,res){
    res.render('write',{title:'게시판 글 쓰기'});
});

module.exports = router;