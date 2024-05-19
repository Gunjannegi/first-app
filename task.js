const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
// app.use((req,res,next)=>{
//     console.log('In the middleware');
//     next();
// });
// app.use((req,res,next)=>{
//     console.log('In the another middleware');
//     res.send( { key1: 'value' })
// })

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add</button></form>')
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from Express!</h1>')
})
app.listen(4001)