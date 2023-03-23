import axios from "axios";
import { useState, useEffect } from "react";

// var y=[];
function Product() {
  //   const [adddata, setadddata] = useState([]);
  const [product, setproduct] = useState();
  var [product1, setproduct1] = useState([]);
  var [quantity, setquantity] = useState(1);

  useEffect(() => {
    const Handleproduct = async (e) => {
      const res = await axios.get("http://localhost:8006/product");
      // console.log(res.data[0])
      setproduct(res.data);
      //   setadddata(res.data);
    };
    Handleproduct();
  }, []);

  console.log(quantity);

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
                      ADD
                    </button>
                  </td>
                </tr>
              </>
            ))}
        </table>
      </div>

      <div>
        <h1>Order Table</h1>
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
                      onClick={() => {
                        // console.log("hjew")
                        console.log(items.quantity)
                        if (items.quantity >= 1) {
                          setquantity(quantity-1);
                          items.quantity -= 1 ; 
                        // id(items.productcode,quantity-1)

                        //   quantity -= 1;

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

                        items.quantity += 1 ; 

                        // setAmount(theArray.pprice);

                        // setAmount(amount + theArray.pprice);
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              </>
            ))}
        </table>
      </div>
    </>
  );
}

export default Product;
