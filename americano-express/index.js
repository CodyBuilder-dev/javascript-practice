// HTTP 모듈 로드
const http = require("http");

// HTTP 서버를 구성합니다.
const server = http.createServer(function (request, response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello World\n");
});

const port = 8000;
server.listen(port);

console.log("Server running at http://127.0.0.1:",port);