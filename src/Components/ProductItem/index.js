import React from "react";

export default function ProductItem({product, moveToCard}) {
  console.log(product.photo)
  return(
     <div className="productItem">
      <img alt="" src={require("../../"+ product.photo)}/>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button onClick={()=>{moveToCard(product)}}>Add</button>

    
    
    </div>);
}
