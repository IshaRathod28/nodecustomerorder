const express=require('express');
const app=express();
const cors=require('cors');
const jwt=require('jsonwebtoken');
app.use(cors());
app.use(express.json());

var mysql =require("mysql");
var con=mysql.createConnection({
    host:"192.168.2.8",
    user:"trainee",
    password:"trainee@123",
    database:"trainee"
})

con.connect(function(error){
    if(error) throw error;
    console.log("Database is connected");
});

// const createtable=()=>{
//     sql="CREATE TABLE isharegdata_cust ( recid bigint(20),customerid varchar(255),firstname VARCHAR(100), lastname VARCHAR(100) , email varchar(100),password varchar(255), mobile_number integer , gender varchar(50) , address varchar(255) , birthdate varchar(255) ,accesstoken varchar(255))"
//     con.query(sql,(err,result)=>
//     {
//         if (err) throw err;
//         console.log("your table is created");
//     })
// }

// createtable()



app.post("/regdata",(req,res)=>{
    const customerid= req.body.customerid;
    const firstname = req.body.firstname;
    const lastname=req.body.lastname;
    const email=req.body.email;
    const password=req.body.password;
const mobile_number=req.body.mobile_number;
const gender=req.body.gender;
const address=req.body.address;
const birthdate=req.body.birthdate;
    const sql=`insert into isharegdata_cust(firstname,lastname,email,password,mobile_number,gender,address,birthdate,customerid)values('${firstname}' , '${lastname}' , '${email}' , '${password}','${mobile_number}','${gender}','${address}','${birthdate}','${customerid}') `
    con.query(sql,(error,result)=>{
        if (error) throw error;
        console.log("Data is inserted data successfully")
        console.log(result)
    }
   
    )

})


// const createlogintable =()=>{
//     sql="create table ishalogincheck (recid bigint(20) ,email varchar(100),password varchar(255))";
   
//     con.query(sql,(error,result)=>{
//         if(error) throw error;
//         console.log("ishalogincheck table created successfully")
//         console.log(result)
//     })
// }

// createlogintable();

app.post("/logindata",(req,res)=>{
    const loginemail = req.body.loginemail;
    const loginpassword=req.body.loginpassword;
    
    const csql=`select * from isharegdata_cust where email="${loginemail}" and password="${loginpassword}"`
    con.query(csql,(error,result)=>{
        if (error){
        }
        else if(result.length==0){
            res.send("Sorry , user is not exist , your login is fail, please try again")
        }
        else if(result[0].accesstoken){
            res.send(result);
            console.log(true)
        }
        else if(!result[0].accesstoken){
            console.log(false)
            const accesstoken=jwt.sign({email : loginemail},"iabcd1234");
            console.log(accesstoken);
            
            const jsql="select * from isharegdata_cust where accesstoken is null"
            con.query(jsql,(error,result1)=>{
                if (error) throw error;
                console.log(result1)
            })
            
            const sqlupdatetoken=`update isharegdata_cust set accesstoken="${accesstoken}" where email="${loginemail}";`

            con.query(sqlupdatetoken,(err,result)=>{
                if(err) throw err;
                console.log(sqlupdatetoken)
                console.log("accesstoken is updated successfully")
                console.log("accesstoken is" + accesstoken)
                // res.send(result);
             
            console.log(result);


          
            })
            const fsql = `select * from isharegdata_cust where email="${loginemail}" and password="${loginpassword}")`;
            con.query(fsql,(error,result)=>{
                if (error) throw error;
                console.log(result)
                res.send(result);
            })
        }

        
        
        
      
    }
    )


    
    

})


app.post("/update",(req,res)=>{
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const  email=req.body.email;
    const mobilenumber=req.body.number;
    const gender=req.body.gender;
   
    const address=req   .body.address;
    const dob=req.body.dob;
    const yysql=`update isharegdata_cust set firstname="${firstname}",lastname="${lastname}" ,email="${email}"  , mobile_number=${mobilenumber},gender="${gender}",address="${address}",birthdate="${dob}" where email="${email}"`;
con.query(yysql,(error,result)=>{
    if(error) throw error;
    console.log(yysql)
    console.log(result)
    res.send(result)
})

})


app.get("/product",(req,res)=>{
    const sql=`select * from ishaproduct_cust`;
    con.query(sql,(error,result)=>{
        if(error) throw error;
        console.log(result)
        res.send(result)
    })
})

app.post("/getSingleData",(req,res)=>{
const id=req.body.ID;
sql=`select * from ishaproduct_cust where id = "${id}";`
console.log(sql)
con.query(sql,(err,result)=>{
if(err) throw err;
console.log(result)
res.send(result)
})
})


app.listen(8006,()=>console.log("your server is running on the port number 8006"))
