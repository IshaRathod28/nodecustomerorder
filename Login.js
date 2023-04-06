import axios from 'axios';
import react,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

function Login(){
  const[showlogin,setshowlogin]=useState(true);
  const [showprofile,setshowprofile]=useState(false);
  const [showmainpage,setshowmainpage]=useState(false);

  // const[firstname,setfirstname]=useState("");
  // const [lastname, setlastname] = useState("");
  // const [email, setemail] = useState("");
  // const [mobilenumber, setmobilenumber] = useState("");
  // const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
    
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

  const updatesubmit=async(e)=>{


    const form = e.target;
e.preventDefault();
if(allLetter(document.profile.fname)&&allLetter(document.profile.lname)&&phonenumber(document.profile.number)){
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
console.log(document.profile.dob)
console.log(form.dob.value)
const inputdate=form.dob.value;
console.log(inputdate)
if(today>inputdate){
  
  console.log("right date")
  document.getElementById("bday").innerHTML="Right birthdate"
      document.getElementById("bday").style.color="green"
      console.log("update")

      const res = await axios.post("http://localhost:8006/update",{
        firstname :form.fname.value ,

   lastname : form.lname.value ,

   email : form.email.value ,

   number : form.number.value ,

   gender : form.gender.value ,

   address : form.address.value ,

   dob : form.dob.value ,
  })
  // .then((res)=>{
  //   console.log(res.data)
  // })
  console.log(res.data)
   
    }else{
      console.log("wrong date")
      document.getElementById("bday").innerHTML="Wrong birthdate"
      document.getElementById("bday").style.color="red"
}
}




  
  


  }
  
  
  const[loginemail,setloginemail]=useState("");
    const[loginpassword,setloginpassword]=useState("");
    const[data,setdata]=useState([]);

    const clickloginaction=async(e)=>{
        e.preventDefault();
        if(loginpassword.length < 8) { 
          return (alert("Error: Password must be at least 8 characters"))
               } else if(loginpassword.search(/[a-z]/) < 0) { 
                return (alert("Error: Password must contain at least one lowercase letter"))
                 
    
                } else if(loginpassword.search(/[A-Z]/) < 0) { 
                  return (alert("Error: Password must contain at least one uppercase letter"))
                
                
                } else if(loginpassword.search(/[0-9]/) < 0) { 
                  return (alert("Error: Password must contain at least one number"))
             
                
                } else if(loginpassword.search(/[=.*@#$%^&-+=())(?=\\S+$]/) < 0) { 
                  return (alert("Error: Password must contain at least special character"))
                }else{

                  const res= await axios.post("http://localhost:8006/logindata",{
                    loginemail : loginemail,
                    loginpassword : loginpassword
                 })
               .then((res)=>{
              console.log("this is data")
                console.log(res.data.length)
                if(res.data.length==0){
                  console.log("Sorry , user is not exist , your login is fail, please try again")
                  setdata([""]);
                  document.getElementById("loginerror").innerHTML="Sorry , user is not exist , your login is fail, please try again"
                  document.getElementById("loginerror").style.color="red"
                }else{
                  console.log("Login is Successfull")
                  setshowmainpage(true)
                  setshowlogin(false)
                  setdata(res.data[0])
                  document.getElementById("loginerror").innerHTML="Login is Successfull"
                  document.getElementById("loginerror").style.color="green"

                }
                //  if(res.data == "Sorry , user is not exist , your login is fail, please try again"){
                //    console.log(res.data);
                //    setdata([""]);
                //  }
                //  else{
                //    console.log("Yeah! Your login is successfull");
                //      setdata(res.data[0])
                //  }
                
               })
               .catch((error)=>{
                 console.log(error)
               })

                }
         
        

    }
      
 return (
    <>
     <div >
     {<Link to="/" className='home1'>Back to Homepage </Link>}</div>
     {showlogin?
     <div className='regdiv'>
     
<form onSubmit={clickloginaction} className='f1' name="login" >
<div align="center" class="title">
<h1>Login</h1>
       <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Please enter your Email"
          class="form-control"
          // required
          onChange={(e)=>{setloginemail(e.target.value)}}
        /></div>


<div align="center" class="title">
      <label htmlFor="">Password</label>

        <input
          type="password"
          name='password'
          placeholder="Please enter your password"
          class="form-control"
          onChange={(e)=>{setloginpassword(e.target.value)}}
        /></div>
        <div>
          
        {/* <button type="submit" class="btn btn-primary" onClick={()=>{<Link to="/profile"/>}}>Submit</button> */}
        {/* <Link to="/profile"> */}
          <button type="submit" class="btn btn-primary" >Submit</button>
          {/* </Link> */}

      </div>

<br />
<div>
  <p id="loginerror"></p>
</div>
      <div className='isha'>

<label>Not registered yet?</label>
<br />
{<Link to="/registration" >Please click here to register </Link>}
</div>
<br />

 

</form>
        </div>
        :null}

{showmainpage?<><div><button class="btn btn-success" onClick={()=>{setshowprofile(true);
setshowlogin(false)}}>Please click here to see your profile</button></div>
<tr className='apptable'>
             
             <Link to="/product">Product Screen</Link>
             </tr></>:null}

        {showprofile?
        <div className='regdiv'>

            <form className='f1' onSubmit={updatesubmit} name="profile" >
                <div align="center" class="title">

                    <h1>Profile Page</h1>
                    <label>Firstname</label>
                    <input
                        type="text"
                        placeholder="Please enter your first name"
                        class="form-control"
                        name='fname'
                        id="firstname" required
                        defaultValue={data.firstname}
                        // onChange={(e)=>{setfirstname(e.target.value)}}
                    />
                    {/* <p id="firstnamevalidation"></p> */}
                </div>
                <div align="center" class="title">
                    <label>Lastname</label>
                    <input
                        type="text"
                        placeholder="Please enter your last name"
                        class="form-control"
                        id="lastname"
                        name='lname'
                        defaultValue={data.lastname}
                        // onChange={(e)=>{setlastname(e.target.value)}}
                        required
                    />
                    {/* <p id="lastnamevalidation"></p> */}
                </div>
                <div align="center" class="title">
                    <label>Email</label>
                    <input
                        type="text"
                        placeholder="Please enter your email"
                        class="form-control"
                        required
                        defaultValue={data.email}
name='email'
                        // onChange={(e)=>{setemail(e.target.value)}}

                    />
                </div>
             
            
                <div align="center" class="title">
                    <label>Mobile number</label>
                    <input
                        type="number"
                        placeholder="Please enter your Mobile Number"
                        class="form-control"
                        required
                        name='number'
                        defaultValue={data.mobile_number}
                        // onChange={(e)=>{setmobilenumber(e.target.value)}}
                    />
                </div>
                <div className="gender">
                    <label>Select your gender</label>
                    <br />
                    <input
                        type="radio"
                        name="gender"
                      
                        // onChange={(e)=>{setgender(e.target.value)}}
                        checked={data.gender === 'male'}
                        id="male"
                    />
                    <label for="male">male</label>
                    <br />
                    <input
                        type="radio"
                        name="gender"
                        // onChange={(e)=>{setgender(e.target.value)}}
                        checked={data.gender === 'female'}
                        id="female"
                    />
                    <label for="female">female</label>
                </div>
                <div align="center" class="title">
                    <label>Address</label>
                    <input
                        type="text"
                        placeholder="Please enter your Address"
                        name='address'
                        class="form-control"
                        defaultValue={data.address}
                        // onChange={(e)=>{setaddress(e.target.value)}}
                        required

                    />
                </div>
                <div align="center" class="title">
                    <label>Birthdate</label>
                    <input
                        type="date"
                        placeholder="Please select your birthdate"
                        class="form-control"
                        required
                        name='dob'
                        defaultValue={data.birthdate}
                        // onChange={(e)=>{setdob(e.target.value)}}

                    />
                </div>
<p id="bday"></p>

                <div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </div>

            </form>





        </div>:null}</>
 )
}

export default Login;
