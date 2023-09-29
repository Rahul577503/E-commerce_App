import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./Product";
import "../shop/shop.css"
const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>ShopSculpt</h1>
      </div>
      <div className="products">
        {" "}
        {PRODUCTS.map((product)=>
        <Product data={product}/>
        )}

      </div>
    </div>
  );
};

export default Shop;
