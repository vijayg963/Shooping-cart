'use client'
import React, { useContext } from 'react'
import { PRODUCTS } from '../utils/constant'
import AppContext from '../AppContext'


const Products = () => {
    const { products ,cart, setCart} = useContext(AppContext)

    const handleAddToCart = (product) => {
        console.log(product);
        const isProductInCart = cart.find(item => item.id === product.id)
        if (isProductInCart) {
            setCart((prev) => prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        } else {
            setCart((prev) => [...prev, { ...product, quantity: 1 }])
        }
    }

    console.log("cart",cart);
    return (
        <section>
            <h2 className='text-3xl font-bold my-6 text-[#364153]'>Products</h2>
            <div className='flex justify-between items-center gap-8'>
                {products?.map(item => <div key={item.id} className='bg-white p-4 rounded-md flex flex-col gap-4 flex-1'>
                    <h2 className='text-2xl font-semibold'>{item.name}</h2>
                    <p className='text-lg font-medium'>Price: ${item.price}</p>
                    <button onClick={()=>handleAddToCart(item)} className='bg-blue-500 text-white px-4 py-2 rounded font-semibold'>Add to Cart</button>
                </div>
                )}
            </div>
        </section>
    )
}

export default Products