const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res) => {
    //console.log(req.url, req.method, req.headers);
    //process.exit();
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        fs.readFile('message.txt', 'utf-8' , (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(`data from file ${data}`)
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body>${data}<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        });
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    /* if (url === '/home') {
         res.write('<html>');
         res.write('<head><title>Home page</title></head>');
         res.write('<body><h1>Welcome home</h1></body>')
         res.write('</html>')
         return res.end();
     }
      if (url === '/about') {
         res.write('<html>');
         res.write('<head><title>About page</title></head>');
         res.write('<body><h1>Welcome to About Us page</h1></body>')
         res.write('</html>');
         return res.end();
     }
      if (url === '/node') {
         res.write('<html>');
         res.write('<head><title>About page</title></head>');
         res.write('<body><h1>Welcome to Node Js</h1></body>')
         res.write('</html>');
         return res.end();
     } */
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();

    }
       
});
server.listen(4000);