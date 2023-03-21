import react from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <>
          <h1>Dashboard</h1>
        <div className='navdiv'>
            <li><Link to="/registration" >Registration</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/profile">Profile page</Link></li>
            <li><Link to="/product">Product Screen</Link></li>
            <li><Link to="/order">Order Screen</Link></li>
            
            </div></>
    )
}

export default Nav;
