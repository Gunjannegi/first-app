const express = require('express');
const app = express();
const path = require('path')
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactUs');
const successRoutes = require('./routes/success');
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
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminRoutes);
app.use(contactRoutes);
app.use(shopRoutes);
app.use(successRoutes);
app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(4000);