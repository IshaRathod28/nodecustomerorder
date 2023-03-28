import react from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <>
        <div>
        <div>
        <h1 className='home'>Home Page</h1>
        </div>
        
        <div className='navdiv'>
          <table className='apptable'>
            <tr className='apptable'>
            
              <Link to="/registration" >Registration</Link>
              </tr>
              <tr className='apptable'>
              
              <Link to="/login">Login</Link>
              </tr>
              <tr className='apptable'>
             
              <Link to="/product">Product Screen</Link>
              </tr>
          </table>
            <li></li>
            <li></li>
            {/* <li><Link to="/login">Profile page</Link></li> */}
            <li></li>
            {/* <li><Link to="/order">Order Screen</Link></li> */}
         
            </div>
            </div></>
    )
}

export default Nav;
