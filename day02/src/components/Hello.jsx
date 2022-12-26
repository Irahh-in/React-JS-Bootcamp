import React, { useEffect } from "react";

function Product(props) {
  var name = props.Name;
  var price = props.Price;
  var quantity = props.Quantity;
  return (
    <div>
      <h1>Product</h1>
      <div>Name: {name}</div>
      <div>Price: {price} </div>
      <div>Left products quanity {quantity} </div>
    </div>
  );
}

export default Product;
