const express = require('express');
const {ServerConfig,Logger} = require('./config');
const apiRoutes = require('./routes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Sucessfully started the server on PORT : ${ServerConfig.PORT}`);
   
})