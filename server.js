const express=require('express');                        //starting express
const app=express();                                 //assign app to use these function of express module
const fs=require('fs');                              //assign file system object to read the file favs.json
var bodyParser= require('body-parser');              // using bodyParser to wrap data in order to put of get via script
app.listen(3000,()=>console.log('listening at 3000'));   //function to reach server and get response via notice console.log
app.use(express.static(__dirname));                    //read file index html
app.use(bodyParser.json());  

app.get('/', function(req,res){    
    router.get('/', function(req, res, next) {
        res.render('index', { title: 'Express' });
      
       // res.send({users:users});
      });
  }) 
  