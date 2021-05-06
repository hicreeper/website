let http = require('http');
let fs = require('fs');
let url = require('url');
const PORT = process.env.PORT || 5000

let myApp = http.createServer(function (req, res) {
    //取得輸入的網址
    let q = url.parse(req.url, true);
    //取得輸入的網址名稱
    console.log(q.pathname);
    let filename = "." + q.pathname;
    // 首頁預設
    if (filename == './') {
        filename = './index'
    }
    filename = filename + ".html";
    fs.readFile(filename, function (err, data) {
        //判斷錯誤
        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/html; charset=utf-8"
            });
            return res.end("404 Not Found");
        }
        //如果沒有錯誤時。
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });
        res.write(data);
        return res.end();
    })
});

myApp.listen(PORT);

console.log("Server listening 3000....")
/*var http = require('http');
var fs = require('fs');
function onRequest(request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile('./index.html', null, function(error, data){
		if(error){
			response.writeHead(404);
			response.write('File not found!');
		}
		else{
			response.write(data);
		}
		response.end();
	})
}

http.createServer(onRequest).listen(8000);*/