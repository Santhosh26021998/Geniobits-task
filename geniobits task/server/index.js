const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const mycon = require('mysql');

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));

let c = mycon.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password : "Sandy@123",
    database : "college"
});

c.connect(function(error){
    if(error){console.log(error);}
    else{
        console.log('Database Connected');
    }
});

app.post('/Signup',(request,response)=>{

   let {firstname,lastname,dob,gender,email,mobile,password} = request.body;
   
   let sql = "insert into sign(firstname,lastname,dob,gender,email,mobile,password) values(?,?,?,?,?,?,?)";

   c.query(sql,[firstname,lastname,dob,gender,email,mobile,password],(error,result)=>{
    if(error){
        let s = {"status":"error"};
        response.send(s);
    }   
    else{
        let s = {"status":"success"};
        response.send(result);
    }
   })
})

app.post("/Signin",(request,response)=>{
    let {email,password} = request.body;

    let sql = 'select * from sign where email=?';

    c.query(sql,[email],(error,result)=>{
        if(error){
            let s = {"status":"syntaxerror"};
            response.send(s);
        }
        else if(result.length > 0){
            let username1 = result[0].email;
            let password1 = result[0].password;
          
            let id = result[0].id;

            if(username1 === email && password1 === password){
                let s = {"status":"success","id":id};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid"};
                response.send(s);
            }
        }
        else{
            let s = {"status":"error"}
            response.send(s);
        }
    })


})

app.listen(3002 ,()=>{console.log('Server running on 3002')});