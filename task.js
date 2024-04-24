const http = require('http');
const server = http.createServer((req,res) => {
    //console.log(req.url, req.method, req.headers);
    //process.exit();
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/home') {
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
    } 
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    
});
server.listen(4000);