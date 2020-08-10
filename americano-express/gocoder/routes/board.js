// 게시판(board)용 라우터
// '/board' URI 아래로 오는 게시판에 대한 CRUD를 모두 이 라우터에서 처리함

const express = require("express");
const router = express.Router();
const mysql_odbc = require("../db/db_conn")(); //mysql_odbc내의 익명함수를 바로 실행시킴
const conn = mysql_odbc.init();

router.get('/list',function(req,res){
    res.redirect('/board/list/1');
});

router.get('/list/:page',function(req,res){
    const page = req.params.page;
    const sql = "SELECT idx,name,title,date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate," +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";
    conn.query(sql,function(err,rows){
        if(err) console.error("Err :"+err);
        res.render('list',{title:"게시판 리스트",rows:rows});
    })
});

router.get('/write',function(req,res){
    res.render('write',{title:'게시판 글 쓰기'});
});

router.post('/write',function(req,res){
    const name= req.body.name;
    const title = req.body.title;
    const content = req.body.content;
    const passwd = req.body.passwd;
    const datas = [name,title,content,passwd];

    const sql = "INSERT INTO board (name,title,content,regdate,modidate,passwd,hit) " +
        "VALUES (?,?,?,now(),now(),?,0)";
    
    conn.query(sql,datas,function(err,rows){
        if(err) console.error("Err:"+err);
        res.redirect("/board/list");
    });
});

router.get('/read/:idx',function(req,res){
    const idx = req.params.idx;
    const sql = "SELECT idx,name,title,content,date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate," +
        "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate, hit from board where idx=?";
    conn.query(sql,[idx],function(err,rows){
        if(err) console.error("Err :" + err);
        res.render('read',{title:'글 상세',row:rows[0]});
    }) // 치환변수는 Array로 넣어줘야 하는 듯
});

router.post('/update',function(req,res){
    const idx = req.body.idx;
    const name = req.body.name;
    const title = req.body.title;
    const content = req.body.content;
    const passwd = req.body.passwd;

    const datas = [name,title,content,idx,passwd];

    // DB Where문으로 passwd 일치 여부 검사
    const sql = "UPDATE board SET name=?, title=?, content=?, modidate=now() "+
        "WHERE idx=? AND passwd=?";
    conn.query(sql,datas,function(err,result){
        if(err) console.error("Err:"+err);
        if(result.affectedRows == 0) {
            //응답으로 alert 창을 반환해줌
            res.send("<script>alert('패스워드가 일치하지 않습니다.');history.back();</script>"); 
        }
        else {
            res.redirect('/board/read/'+idx);
        }
    });
});

// 삭제 라우터
// 실무에서는 글을 삭제하지 않는다(이력 문제,DB 트랜젝션 문제)

module.exports = router;