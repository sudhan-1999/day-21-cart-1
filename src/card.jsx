import React from 'react'
import Card from 'react-bootstrap/Card';



function card() {
  const product = [{
    name : "Fancy Product",
    isName:false,
    price : "$40.00 - $80.00",
    buton: "View Option"
  },
{
  name : "Special Item",
  isName:true,
    price : "$20.00 - $18.00",
    buton: "Add to Cart"
},
{
  name : "Sale item",
  isName:false,
    price : "$50.00 - $25.00",
    buton: "Add to Cart"
},{
  name : "popular item",
  isName:true,
    price : "$40.00",
    buton: "Add to Cart"
},
{
  name : "Special Item",
  isName:true,
    price : "$20.00 -$18.00",
    buton: "View Option"},
    {
  name : "Fancy Product",
  isName:false,
    price : "$120.00 -$280.00",
    buton: "View Option"
},{
  name : "Special Item", 
   isName:true,
    price : "$20.00 -$18.00",
    buton: "View Option"
},{
  name : "popular item",
  isName:true,
    price : "$40.00",
    buton: "View Option"
}]
return<>
<div className="container">
<div className='row'>
  {
    product.map((e)=>{
  return <div className='col-lg-3'>
  <Card style={{ width: '18rem',margin:"5px",height: '20rem' }}>
  <Card.Img variant="top" style={{height:"100px" , backgroundColor:"grey"}} />
  <Card.Body>
    <Card.Title>{e.name}</Card.Title>
    <Card.Text>
    <span class={e.isName?"fa fa-star checked":""}></span>
    <span class={e.isName?"fa fa-star checked":""}></span>
    <span class={e.isName?"fa fa-star checked":""}></span>
    <span class={e.isName?"fa fa-star checked":""}></span>
    <span class={e.isName?"fa fa-star checked":""}></span>
    </Card.Text>
    <Card.Text>{e.price}</Card.Text>
    <div><button className='butn'></button></div>
  </Card.Body>
</Card>
</div>
}
  )
}    
  </div>
  </div>
</>
}
export default card;