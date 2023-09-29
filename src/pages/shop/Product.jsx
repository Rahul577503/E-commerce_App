import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';


const Product = (props) => {
    const{id,productName,price,productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage} alt='produImage'/>
        <div className='description'>
            <p>{productName}</p>
            <p>${price}</p>          
        </div>
        <button className="addCartButton" onClick={()=>addToCart(id)}>
            Add To Cart{cartItemAmount>0 && <>({cartItemAmount})</>}
        </button>
    </div>
  )
}

export default Product