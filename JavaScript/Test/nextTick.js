var http = require('http');

var wait = function (mils) {
    var now = new Date;
    while (new Date - now <= mils);
};

function compute() {
    // performs complicated calculations continuously
    console.log('start computing');
    wait(3000);
    console.log('working for 1s, nexttick');
    process.nextTick(compute);
}

http.createServer(function (req, res) {
    console.log('new request');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
}).listen(5000, '127.0.0.1');

compute();