import React from "react";
import ProductItem from "../ProductItem";

export default function ProductList({ products, moveToCard }) {
  return (
    <div className="product_list">
      {products.map((elm, i) => {
        return <ProductItem moveToCard= {moveToCard} key={i} product={elm} />;
      })}
    </div>
  );
}
