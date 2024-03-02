import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";


          
function Display({isAddedToCart,handleClick,handleRemove,setCount,count}) {
  const product = [
    {
      name: "Fancy Product",
      isName: false,
      price: "$40.00 - $80.00",
    },
    {
      name: "Special Item",
      isName: true,
      price: "$20.00 - $18.00",
    },
    {
      name: "Sale item",
      isName: false,
      price: "$50.00 - $25.00",
    },
    {
      name: "popular item",
      isName: true,
      price: "$40.00",
    },
    {
      name: "Special Item",
      isName: true,
      price: "$20.00 -$18.00",
    },
    {
      name: "Fancy Product",
      isName: false,
      price: "$120.00 -$280.00",
    },
    {
      name: "Special Item",
      isName: true,
      price: "$20.00 -$18.00",
    },
    {
      name: "popular item",
      isName: true,
      price: "$40.00",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {product.map((e, index) => {
            return (
              <Num e={e} setCount={setCount} index={index} count={count}/>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Display;
function Num({e,setCount,index,count}){
  const [isAddedToCart, setIsAddedToCart] = useState(true); 

  const handleClick = () => {
    setIsAddedToCart(!isAddedToCart); 
    setCount(count + 1);
  };

  const handleRemove = () => {
    setIsAddedToCart(!isAddedToCart); 
    setCount(count - 1);
  };
  return(
    <div className="col-lg-3" key={index}>
                <Card
                  style={{ width: "18rem", margin: "5px", height: "20rem" }}
                >
                  <Card.Img
                    variant="top"
                    style={{ height: "100px", backgroundColor: "grey" }}
                  />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                      <span
                        className={e.isName ? "fa fa-star checked" : ""}
                      ></span>
                      <span
                        className={e.isName ? "fa fa-star checked" : ""}
                      ></span>
                      <span
                        className={e.isName ? "fa fa-star checked" : ""}
                      ></span>
                      <span
                        className={e.isName ? "fa fa-star checked" : ""}
                      ></span>
                      <span
                        className={e.isName ? "fa fa-star checked" : ""}
                      ></span>
                    </Card.Text>
                    <Card.Text>{e.price}</Card.Text>
                    {
                          (isAddedToCart ? <button onClick={()=>handleClick()}>Add to Cart</button>:<button onClick={()=>handleRemove()}>Remove from cart</button>)
                    }
                  </Card.Body>
                </Card>
              </div>
  )
}
