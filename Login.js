import axios from 'axios';
import react,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom'

function Login(){
  const[firstname,setfirstname]=useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
    
  

  const updatesubmit=async(e)=>{
    const form = e.target;
e.preventDefault();
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
.then((res)=>{
  console.log(res.data)
})
  }
  
  
  const[loginemail,setloginemail]=useState("");
    const[loginpassword,setloginpassword]=useState("");
    const[data,setdata]=useState([]);

    const clickloginaction=async(e)=>{
        e.preventDefault();
              
        const res= await axios.post("http://localhost:8006/logindata",{
           loginemail : loginemail,
           loginpassword : loginpassword
        })
      .then((res)=>{
        // console.log(res.data);
        // if(res.data[0]){
        //   console.log("Yeah! Your login is successfull")
        // }
        // console.log(res)
        if(res.data == "Sorry , user is not exist , your login is fail, please try again"){
          console.log(res.data);
          setdata([""]);
        }
        else{
          console.log("Yeah! Your login is successfull");
         
            // console.log(res.data);
            setdata(res.data[0])
            // setfirstname(res.data[0].firstname);
            // setlastname(res.data[0].lastname);
            // setemail(res.data[0].email);
            // setmobilenumber(res.data[0].mobile_number);
            // setgender(res.data[0].gender);
            // setaddress(res.data[0].address)
            // setdob(res.data[0].birthdate)
    
            
        
       
           
       
          // console.log(res.data)
        }
       
      })
      .catch((error)=>{
        console.log(error)
      })

    }
      
 return (
    <>
     <div className='regdiv'>
<form onSubmit={clickloginaction} className='f1' >
<div align="center" class="title">
<h1>Login</h1>
       <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="Please enter your Email"
          class="form-control"
          // required
          onChange={(e)=>{setloginemail(e.target.value)}}
        /></div>

<div align="center" class="title">
      <label htmlFor="">Password</label>
        <input
          type="text"
          name='pass'
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
      <div className='isha'>

<label>Not registered yet?</label>
<br />
{<Link to="/registration" >Please click here to register </Link>}
</div>
</form>
        </div>
        
        
        <div className='regdiv'>

            <form className='f1' onSubmit={updatesubmit} >
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
                        onChange={(e)=>{setaddress(e.target.value)}}
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
                        onChange={(e)=>{setdob(e.target.value)}}

                    />
                </div>


                <div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </div>

            </form>





        </div></>
 )
}

export default Login;
