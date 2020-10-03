const xml2js = require("xml2js");
const fs = require("fs");

const xmlParser = new xml2js.Parser();
const xml = fs.readFileSync(__dirname+"/xmlparser_test.xml","utf-8");

xmlParser.parseString(xml,function(err,result){
    console.log(result);
})