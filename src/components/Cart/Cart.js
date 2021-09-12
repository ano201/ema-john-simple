import React from 'react';
import './cart.css';

const Cart = (props) => {
 
 const cart = props.cart;
 const totalPrice = cart.reduce((total, prd) => total+prd.price, 0);
 let shippingCost = 0;
 if(totalPrice > 39){
  shippingCost = 0;
 } else if(totalPrice > 19){
  shippingCost = 8.99;
 } else if(totalPrice > 0){
  shippingCost = 14.99;
 }
 
 const tax = (totalPrice / 10).toFixed(2);
 const finalCost = (totalPrice+shippingCost+Number(tax)).toFixed(2);
 
 return (
  <div>
   <h3>Ordered Summary</h3>
   <p>Items Ordered: {cart.length}</p>
   <p>Product Price: {totalPrice.toFixed(2)}</p>
   <p>Shipping Cost: {shippingCost}</p>
   <p><small>Tax + Vat: {tax}</small></p>
   <p>Total Price: {finalCost}</p>
  </div>
  )
}
export default Cart;