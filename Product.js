import axios from "axios";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
// const orderid = require('order-id')('key');

// var y=[];
function Product() {
  //   const [adddata, setadddata] = useState([]);
  // const id = orderid.generate();
  // orderid.getTime(id);
  // console.log(id);
  const[showproductbutton,setshowproductbutton]=useState(true);
  const[view,setshowview]=useState(false)
  const[orderlistbutton,setshoworderlistbutton]=useState(false)
  const[orderlist,setshoworderlist]=useState(false)
  const [showproduct,setshowproduct] =useState(false)
  const[cart,showcart]=useState(false);
  const [product, setproduct] = useState();
  var [product1, setproduct1] = useState([]);
  var [quantity, setquantity] = useState(1);
  var [orddate,setorddate] =useState("")
  var[price,totalprice]=useState("")
var[order,setorder]=useState("")
  useEffect(() => {
    const Handleproduct = async (e) => {
      const res = await axios.get("http://localhost:8006/product");
      // console.log(res.data[0])
      setproduct(res.data);
      //   setadddata(res.data);
    };
    
    Handleproduct();
  }, []);
  const Grandtotal = async(e)=>{
    const res = await axios.post("http://localhost:8006/grandtotal",{
      product1:product1
    })
  }
 
  const managedatainordertable =async(e)=>{
    const res=await axios.post("http://localhost:8006/managedatainordertable")
    setproduct1([])
  };

  const totalpriceoforder = async(e) => {
    const res = await axios.get("http://localhost:8006/totalpriceoforder")
   console.log(res.data[0]) 
   console.log("true")
   document.getElementById("grandtotal").innerHTML=res.data[0].grandtotal;
   console.log("true")
  }
  
  
const displayorderlisting = async(e) => {
  setshoworderlist(true);
  setshoworderlistbutton(false);
  const res = await axios.get("http://localhost:8006/displayorderlisting")
  console.log(res.data)
  setorder(res.data)
  console.log(order)
}


  const orderdatetable = async(e) => {
   setshoworderlistbutton(true)
   showcart(false)
    var orddate = new Date();
    console.log(orddate.getDate());
    console.log(orddate.getMonth()+1);
    console.log(orddate.getFullYear());
 
    var day = orddate.getDate();
    var month = orddate.getMonth()+1;
    var year =orddate.getFullYear();
 
    var orderdate= day + "/" + month + "/" + year;
    console.log(orderdate)
    setorddate(orderdate)
   
    const res = await axios.post("http://localhost:8006/orderdatetable",{
      orddate:orddate
    })
  }

 console.log(orddate)
  // console.log(quantity);
  // console.log(product1)

  // const faltu = ()=>{
  //     // console.log(adddata)
  //     adddata.map((item)=>(
  //         console.log(item.productcode)
  //     ))
  //     // console.log(adddata[0])
  //  }
  //  faltu();

  //   function add(x) {
  //      setproduct1((a) => [...a, { ...x, qty: 1 }]);

  //     //  setAmount(amount + x.pprice);

  //     //  y = product1;

  //     //  console.log(y);

  //      }

  //   const handleAdd = async (id) => {
  //     const res = await axios.post("http://localhost:8006/getSingleData", {
  //       ID: id,
  //     });

  //     setproduct1(res.data);
  //     console.log(res.data);
  //   };

  //   console.log(product1)
  // console.log(y)

  return (
    <>

<div>
<div >
     {<Link to="/" className='home1'>Back to Homepage </Link>}
     </div>
     {showproductbutton?
     <div>
      <h1><button className="btn btn-primary" id="showproducts" onClick={()=>{
        setshowproduct(true)
        setshowproductbutton(false)
      }}>Show Products</button></h1>
     </div>:null}
     {showproduct?
     <>
      <div>
        <h1>Product Table</h1>
        <table>
          <th>Productcode</th>
          <th>Productname</th>
          <th>Brand</th>
          <th>Productprice</th>
          <th>Productstatus</th>
          <th>Add to card</th>
          {product &&
            product.map((items) => (
              <>
                <tr>
                  <td>{items.productcode}</td>
                  <td>{items.productname}</td>
                  <td>{items.brand}</td>
                  <td>{items.productprice}</td>
                  <td>{items.productstatus}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                      
                        // console.log(items);
                        //1 na add par click kre to 1 vali product niche table ma aave and 2 par click kare to 2 vali
                        //add1=>items=>data of product1 , add2=>items=>data of product2
                        //click add1=>product1 data store in variable

                        var storeselectedproductdata = items;
                        //add1=>upervala ma product 1 no data store thase
                        // console.log(x);
// console.log(storeselectedproductdata)
                        //setproduct1([storeselectedproductdata])
                        //uper jevu kare to data select pan thay and show pan thay but ek j row ma natak thay , aapane particular product mate different row joiye etle alag rite set karavva padse

                        setproduct1((initialdata) => [
                          ...initialdata,
                          { ...storeselectedproductdata, quantity: 1 },
                        ]);
                        // y=product1;
                        // console.log(y)
                      }}
                    >
                      ADD TO CART
                    </button>
                  </td>
                </tr>
              </>
            ))}
        </table>
      </div>
      <br />
      <div>
      <button className="btn btn-danger" onClick={()=>{setshowproduct(false)
      setshowproductbutton(true)}}>BACK</button>
    </div>
    <br />
    <div>
      <button className="btn btn-danger" onClick={()=>{  showcart(true);
                     setshowproduct(false)}}>CLICK HERE TO SHOW YOUR CART</button>
    </div>
    </>
      :null}
      
{cart?<>
      <div>
        <h1>CART</h1>
        <table>
          <th>Productcode</th>
          <th>Productname</th>
          <th>Brand</th>
          <th>Productprice</th>
          <th>Productstatus</th>
          <th>No. of product</th>
          <th>Total price</th>
          {product1 &&
            product1.map((items) => (
              <>
                <tr>
                  <td>{items.productcode}</td>
                  <td>{items.productname}</td>
                  <td>{items.brand}</td>
                  <td>{items.productprice}</td>
                  <td>{items.productstatus}</td>
                  <td>
                    <button
                    class="btn btn-success"
                      onClick={() => {
                        // console.log(items)
                        // console.log(product1)
                        // console.log("hjew")
                        
                       
                       
                        if (items.quantity >= 1) {
                          setquantity(quantity-1);
                          items.quantity -= 1 ; 
                       
                           // id(items.productcode,quantity-1)

                        //   quantity -= 1;
                        // console.log(items.productprice)
                        // console.log(items.quantity)

                        // setproductprice(items.productprice)
                        // setproductqty(items.quantity)
                          // setAmount(theArray.pprice);

                          // setAmount(amount - theArray.pprice);
                        }
                      }}
                    >
                      -
                    </button>
                    {items.quantity}
                    <button
                      onClick={()=> {
                        setquantity(quantity + 1);
                        // console.log(product1)
                        // console.log(items.productprice)

                        items.quantity += 1 ; 
                        // console.log(items.productprice)
                        // console.log(items.quantity)
                        // setAmount(theArray.pprice);

                        // setAmount(amount + theArray.pprice);
                      }}

                      class="btn btn-success"
                    >
                      +
                    </button>
                  </td>
                  <td>

                    {items.productprice*items.quantity}

                  </td>
                </tr>
              </>
            ))}
        </table>
        <br />

<div>
        <button type="submit" onClick={()=>{setshowproduct(true)
        showcart(false)}} class="btn btn-danger">BACK</button>
        <button type="submit" onClick={Grandtotal} class="btn btn-danger">SUBMIT</button>
        <button type="submit" onClick={managedatainordertable}  class="btn btn-danger">CLEAR</button>
</div>
<br />
        <div>
        <button onClick={totalpriceoforder}  class="btn btn-danger"> Click here to see the grandtotal</button>
        <p id="grandtotal"></p>
        </div>
    
      </div>
<div>
  <button class="btn btn-danger" onClick={orderdatetable}>
    Click here to place the order
  </button>
  
</div>
<br />
</>
:null}
{orderlistbutton?<>
<div>
<button class="btn btn-primary" id="showproducts" onClick={displayorderlisting}>
    Click here to see your order list
  </button></div><div>
  <button className="btn btn-danger" onClick={()=>{showcart(true); setshoworderlistbutton(false)}}>BACK</button>
</div></>:null}
{orderlist?<>
      <div>
        <h1>
          Order Listing
        </h1>
        <table>
         
            <th>Order ID</th>
            <th>Date</th>
            <th>Action</th>
          {order&&order.map((items)=>(
            <>
            <tr>
              <td>{items.orderid}</td>
              <td>{items.date}</td>
              <td><button onClick={()=>{setshowview(true)
              setshoworderlist(false)}}>View</button></td>
              </tr></>
          )
            
)}
          
        </table>
      </div>
      <br />
      <div>
        <button className="btn btn-danger" onClick={()=>{setshoworderlist(false); setshoworderlistbutton(true)}}>BACK</button>
        </div></>
:null}
{
  view?
<>
      <div>
        <h1>
          Order Detail view
        </h1>
        <table>
          
            <th>productcode</th>
            <th>productname</th>
            <th>productprice</th>
            <th>quantity</th>
            <th>totalprice</th>
            {product1 &&
            product1.map((items) => (
              <>
                <tr>
                  <td>{items.productcode}</td>
                <td>{items.productname}</td>
                  <td>{items.productprice}</td>
                <td>{items.quantity}</td>
                <td>{items.productprice*items.quantity}</td>
                  </tr></>))}
         
        </table>
      </div>
      <br />
      <div>
      <button className="btn btn-danger" onClick={()=>{setshoworderlist(true); setshowview(false)}}>BACK</button>
      </div></>:null}
      </div>
    </>
  );
}

export default Product;
