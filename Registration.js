
import react,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Registration(){
    
    const[firstname,setfirstname]=useState("");
    const[lastname,setlastname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[confirmpassword,setconfirmpassword]=useState("");
    const[mobilenumber,setmobilenumber]=useState("");
    const[gender,setgender]=useState("");
    const[address,setaddress]=useState("");
    const[dob,setdob]=useState("");
    const[data,setdata]=useState([]);


    function phonenumber(inputtxt)
    {
      var phoneno = /^\d{10}$/;
      if(inputtxt.value.match(phoneno))
            {
          return true;
            }
          else
            {
            alert("Please enter valid mobile number");
            return false;
            }
    }


    function allLetter(inputtxt)
       
    {
      console.log(inputtxt);
     var letters = /^[A-Za-z]+$/;
     if(inputtxt.value.match(letters))
       {
        return true;
       }
     else
       {
       alert("Only characters are allowed in " + inputtxt.name);
       return false;
       }
    }
    
    // function allowinputtext(){
    //   var firstnuminput = document.getElementsByClassName("firsttextvalidation").value;
    //   if(/^[0-9]*$/.test(firstnuminput)){
    //       document.getElementById("firsttextvalidation").style.color="green";
    //       document.getElementById("firsttextvalidation").innerHTML="Correct input"
    //   }
    //   else{
    //       document.getElementById("firsttextvalidation").style.color="red";
    //       document.getElementById("firsttextvalidation").innerHTML="Error:Only numeric values are allowed  ";
    //   }
    //   }

const sendRegdatawhensubmit= async(e)=>{
  // allowinputtext()
    console.log("Data submitted successfully")
e.preventDefault();

if(password.length < 8) { 
  return (alert("Error: Password must be at least 8 characters"))
       } else if(password.search(/[a-z]/) < 0) { 
        return (alert("Error: Password must contain at least one lowercase letter"))
         
        
        } else if(password.search(/[A-Z]/) < 0) { 
          return (alert("Error: Password must contain at least one uppercase letter"))
        
        
        } else if(password.search(/[0-9]/) < 0) { 
          return (alert("Error: Password must contain at least one number"))
     
        
        } else if(password.search(/[=.*@#$%^&-+=())(?=\\S+$]/) < 0) { 
          return (alert("Error: Password must contain at least special character"))
        }
        else if(password != confirmpassword)
  {
    return(
        alert("Password And Confirm Password Must Be Same")
    )
  }
  else if(allLetter(document.registration.firstname)&&allLetter(document.registration.lastname)&&phonenumber(document.registration.mobilenumber)){
    console.log(true)
    console.log("dd")
    console.log(mobilenumber);
    var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
console.log(today);
    if(today>dob){
      console.log("right date")
      document.getElementById("bday").innerHTML="Right birthdate"
      document.getElementById("bday").style.color="green"
      const res=await axios.post("http://localhost:8006/regdata",{
        firstname : firstname,
        lastname : lastname,
        email :email ,
        password : password ,
        confirmpassword : confirmpassword,
        mobile:mobilenumber,
        gender:gender,
        address:address,
        birthdate:dob,
        customerid:firstname+mobilenumber
    })
    console.log(res.data)
    document.getElementById("erroremail").innerHTML=res.data
    document.getElementById("erroremail").style.color="red"
    }else{
      console.log("wrong date")
      document.getElementById("bday").innerHTML="Wrong birthdate"
      document.getElementById("bday").style.color="red"
    }
   }

else {
}
}

    return(
        <>
        <div>
<div >
     {<Link to="/" className='home1'>Back to Homepage </Link>}
     </div>
        <div  className='regdiv'>
        
    <form className='f1' name="registration" onSubmit={sendRegdatawhensubmit}>
    <h1>Registration</h1>
    <div align="center" class="title">
      <label>Firstname</label>
      <br />
        <input
          type="text"
          placeholder="Please enter your last name"
          class="form-control"
          id="firstname"
          name="firstname"
          onChange={(e)=>{setfirstname(e.target.value)}}
         
        />
        {/* <p id="lastnamevalidation"></p> */}
      </div>
      <div align="center" class="title">
      <label>Lastname</label>
        <input
          type="text"
          placeholder="Please enter your last name"
          class="form-control"
          id="lastname"
          name="lastname"
          onChange={(e)=>{setlastname(e.target.value)}}
         
        />
        {/* <p id="lastnamevalidation"></p> */}
      </div>
      <div align="center" class="title">
      <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
          class="form-control"
          onChange={(e)=>{setemail(e.target.value)}}
        />
      </div>
      
      <div align="center" class="title">
      <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Please enter your password"
          class="form-control"
         
          onChange={(e)=>{setpassword(e.target.value)
          }}
        />
      </div>
      <div align="center" class="title">
      <label>Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          placeholder="Please enter your password again"
          class="form-control"
         
          onChange={(e)=>{setconfirmpassword(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
      <label>Mobile number</label>
        <input
          type="text"
          name="mobilenumber"
          placeholder="Please enter your Mobile Number"
          class="form-control"
        
          onChange={(e)=>{setmobilenumber(e.target.value)}}
        />
      </div>
      <div className="gender">
      <label>Select your gender</label>
      <br />
              <input
                type="radio"
                name="Gender"
                placeholder="Please enter your Gender"
                onChange={(e) => setgender(e.target.value)}
                value="male"
                id="male"
              />
              <label for ="male">male</label>
<br />
              <input
                type="radio"
                name="Gender"
                onChange={(e) => setgender(e.target.value)}
                value="female"
                id="female"
              />
              <label for="female">female</label>
            </div>
            <div align="center" class="title">
            <label>Address</label>
        <input
          type="text"
          placeholder="Please enter your Address"
          class="form-control"
         name="address"
          onChange={(e)=>{setaddress(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
      <label>Birthdate</label>
        <input
          type="date"
          placeholder="Please select your birthdate"
          class="form-control"
          
          onChange={(e)=>{setdob(e.target.value)}}
        />
      </div>
      <p id="bday"></p>
      <p id="erroremail"></p>
      

      <div>
        <button type="submit" class="btn btn-primary" >Submit</button>
      </div>
      <div className='isha'>

        <label>Already registered?</label>
<br />
      <Link to="/login" >Please click here to login </Link>
      </div>
      </form>
      </div>
      </div>
      </>

    )
}

export default Registration;
