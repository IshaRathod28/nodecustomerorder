import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Routes ,Route} from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Product from './components/Product';
import Order from './components/Order';
import Profile from './components/Profile';
function App() {
  return (
    <div  className="App">
    
      <BrowserRouter>
    {/* <Nav/>
    <h1>E-Dashboard</h1>  */}
    <Routes>
      <Route path="/" element={<Nav/>}/>
      <Route path = "/registration" element={<Registration />} />
      <Route path = "/login" element={<Login />} />
      <Route path = "/product" element={<Product/>} />
      <Route path = "/order" element={<Order />} />
      <Route path = "/profile" element={<Profile />} />


    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
