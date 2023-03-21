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


const sendRegdatawhensubmit= async(e)=>{
    console.log("Data submitted successfully")
e.preventDefault();
const res=await axios.post("http://localhost:8006/regdata",{
    firstname : firstname,
    lastname : lastname,
    email :email ,
    password : password ,
    confirmpassword : confirmpassword,
    mobile_number:mobilenumber,
    gender:gender,
    address:address,
    birthdate:dob,
    customerid:firstname+mobilenumber
})
}

    return(
        <>
        <div  className='regdiv'>
       
            

       
  
    <form className='f1' onSubmit={sendRegdatawhensubmit}>
      <div align="center" class="title">
        
        <h1>Registration</h1>
     <label>Firstname</label>
        <input
          type="text"
          placeholder="Please enter your first name"
          class="form-control"
          id ="firstname" onChange={(e)=>{setfirstname(e.target.value)}} required
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
          onChange={(e)=>{setlastname(e.target.value)}}
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
          onChange={(e)=>{setemail(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
      <label>Password</label>
        <input
          type="text"
          placeholder="Please enter your password"
          class="form-control"
          required
          onChange={(e)=>{setpassword(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
      <label>Confirm Password</label>
        <input
          type="text"
          placeholder="Please enter your password again"
          class="form-control"
          required
          onChange={(e)=>{setconfirmpassword(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
      <label>Mobile number</label>
        <input
          type="text"
          placeholder="Please enter your Mobile Number"
          class="form-control"
          required
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
          required
          onChange={(e)=>{setaddress(e.target.value)}}
        />
      </div>
      <div align="center" class="title">
      <label>Birthdate</label>
        <input
          type="date"
          placeholder="Please select your birthdate"
          class="form-control"
          required
          onChange={(e)=>{setdob(e.target.value)}}
        />
      </div>
      

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
      </>

    )
}

export default Registration;
