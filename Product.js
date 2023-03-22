import axios from "axios";
import { useState,useEffect } from "react";

function Product(){

    const[product, setproduct ]=useState();
useEffect(()=>{
    const Handleproduct = async(e) =>{
        const res = await axios.get("http://localhost:8006/product");
        console.log(res.data)
        setproduct(res.data)
        };
        Handleproduct()
},[]);
   
    return(
        <>

        <div>
        <table>
        <th>Productcode</th>
                <th>Productname</th>
                <th>Brand</th>
                <th>Productprice</th>
                <th>Productstatus</th>
            {product&&product.map((items)=>(<>
    
                <tr>
                    <td>{items.productcode}</td>
                    <td>{items.productname}</td>
                    <td>{items.brand}</td>
                    <td>{items.productprice}</td>
                    <td>{items.productstatus}</td>
                </tr>
               

            
            </>))}
            </table>
           
        </div>
        </>
    )
}

export default Product;
