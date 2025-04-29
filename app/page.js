'use client'

import Products from "./components/products";
import CartSummary from "./components/cartSummary";
import Cart from "./components/Cart";

export default function Home() {
  return (
    
    <div  className="max-w-7xl mx-auto p-4">
      <h1 className="text-center text-5xl font-semibold p-4">Shopping Cart</h1>
      <Products />
      <CartSummary/>
      <Cart/>
    </div>
  );
}
