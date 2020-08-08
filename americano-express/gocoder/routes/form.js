const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.render("form",{
        name:"KMS",
        blog:"codybuilder-dev.github.io",
        homepage:""});
});

router.post("/",function(req,res){
    res.json(req.body);
});

module.exports = router;