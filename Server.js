app.post("/logindata",(req,res)=>{
    const loginemail = req.body.loginemail;
    const loginpassword=req.body.loginpassword;
    
    const csql=`select * from isharegdata_cust where email="${loginemail}" and password="${loginpassword}"`
    con.query(csql,(error,result)=>{
        if (error){
        }
        else if(result.length==0){
            res.send(result)
            // res.send("Sorry , user is not exist , your login is fail, please try again")
        }
        else if(result[0].accesstoken){
            res.send(result);
            // console.log(true)
        }
        else if(!result[0].accesstoken){
            // console.log(false)
            const accesstoken=jwt.sign({email : loginemail},"iabcd1234");
            // console.log(accesstoken);
            
            const jsql="select * from isharegdata_cust where accesstoken is null"
            con.query(jsql,(error,result1)=>{
                if (error) throw error;
                // console.log(result1)
            })
            
            const sqlupdatetoken=`update isharegdata_cust set accesstoken="${accesstoken}" where email="${loginemail}";`

            con.query(sqlupdatetoken,(err,result)=>{
                if(err) throw err;
                // console.log(sqlupdatetoken)
                // console.log("accesstoken is updated successfully")
                // console.log("accesstoken is" + accesstoken)
                // res.send(result);
             
            // console.log(result);


          
            })
            const fsql = `select * from isharegdata_cust where email="${loginemail}" and password="${loginpassword}")`;
            con.query(fsql,(error,result)=>{
                if (error) throw error;
                // console.log(result)
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
    // console.log(yysql)
    // console.log(result)
    res.send(result)
})

})


app.get("/product",(req,res)=>{
    const sql=`select * from ishaproduct_cust`;
    con.query(sql,(error,result)=>{
        if(error) throw error;
        // console.log(result)
        res.send(result)
    })
})

app.post("/getSingleData",(req,res)=>{
const id=req.body.ID;
sql=`select * from ishaproduct_cust where id = "${id}";`
// console.log(sql)
con.query(sql,(err,result)=>{
if(err) throw err;
// console.log(result)
res.send(result)
})
})

app.post("/grandtotal",(req,res)=>{
    const product1=req.body.product1;
    //  console.log(product1)
     for(let i = 0 ; i < product1.length ; i++){
        // console.log(product1[i].productprice);
        sql = `insert into ishaorder (productprice,quantity) values (${product1[i].productprice},${product1[i].quantity})`
        con.query(sql , (error,result)=>{
            if(error) throw error;
            console.log(result)
            console.log("Data added successfully")
        })

        sql2=`update ishaorder set totalprice=(productprice*quantity)`;
        con.query(sql2,(error,result)=>{
            if(error) throw error;
            console.log(result)
            console.log("totalprice is updated successfully")
        })

        // sql3=`select sum(totalprice) from ishaorder`;
        // con.query(sql3,(error,result)=>{
        //     if(error) throw error;
        //     console.log("totalprice is calculated successfully")
        //     console.log(result)
        //     // res.send(result)
        // })
     }


    //  for(let i = 0 ; i < product1.length ; i++){
    //     console.log(product1[i].quantity);
    //  }

    //  sql = `insert into ishaorder (productprice,quantity) values ()`
})



app.get("/totalpriceoforder",(req,res)=>{
    sql=`select sum(totalprice) as grandtotal from ishaorder`;
    con.query(sql,(error,result)=>{
        if(error) throw error;
        console.log("totalprice of order is calculated successfully")
        console.log(result)
        res.send(result)
    })
})

app.get("/displayorderlisting",(req,res)=>{
    sql =`select * from ishaorderlisting`;
    con.query(sql,(error,result)=>{
        if(error) throw error;
        console.log(result)
        res.send(result)
    }
    )
})

app.post("/managedatainordertable" ,(req,res)=>{
    sql=`truncate table ishaorder`;
    con.query(sql,(error,result)=>{
        if(error) throw error;
        console.log(result)
        console.log("data in table is cleared successfully")
        res.send("ok")
    })
})


app.post("/orderdatetable",(req,res)=>{
    const date=req.body.orddate;
    console.log(date)
    sql=`insert into ishaorderlisting(date,orderid) values("${date.slice(0,10)}","${"ORD" + Math.floor(Math.random() * 1000000000)}")`
    con.query(sql,(error,result)=>{
        if(error) throw error;
        console.log(result);
        console.log(sql);
        console.log("date in table is added successfully")
    })
})

app.listen(8006,()=>console.log("your server is running on the port number 8006"))
