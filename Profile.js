import axios from "axios";
import react, { useEffect, useState } from 'react'

function Profile() {

    const[firstname,setfirstname]=useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [gender, setgender] = useState("");
    const [address, setaddress] = useState("");
    const [dob, setdob] = useState("");
    const [data, setdata] = useState([]);
    const defaultFunction = async () => {
        const res = await axios.get("http://localhost:8006/profiledata");
        console.log(res.data);
        setfirstname(res.data[0].firstname);
        setlastname(res.data[0].lastname);
        setemail(res.data[0].email);
        setmobilenumber(res.data[0].mobile_number);
        setgender(res.data[0].gender);
        setaddress(res.data[0].address)
        setdob(res.data[0].birthdate)

        
    }
    useEffect(() => {
        defaultFunction();
    }, [])
    return (<>
        <div className='regdiv'>

            <form className='f1' >
                <div align="center" class="title">

                    <h1>Profile Page</h1>
                    <label>Firstname</label>
                    <input
                        type="text"
                        placeholder="Please enter your first name"
                        class="form-control"
                        id="firstname" required
                        value={firstname}
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
                        value={lastname}
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
                        value={email}

                    />
                </div>
               
            
                <div align="center" class="title">
                    <label>Mobile number</label>
                    <input
                        type="text"
                        placeholder="Please enter your Mobile Number"
                        class="form-control"
                        required
value={mobilenumber}
                    />
                </div>
                <div className="gender">
                    <label>Select your gender</label>
                    <br />
                    <input
                        type="radio"
                        name="Gender"
                        placeholder="Please enter your Gender"

                        checked={gender === 'male'}
                        id="male"
                    />
                    <label for="male">male</label>
                    <br />
                    <input
                        type="radio"
                        name="Gender"

                        checked={gender === 'female'}
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
                        value={address}
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
                        value={dob}

                    />
                </div>


                <div>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                </div>

            </form>





        </div></>)
}

export default Profile;
