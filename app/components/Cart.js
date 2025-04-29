'use client';
import AppContext from '../AppContext';
import React, { useContext } from 'react';
import EmptyCart from './emptyCard';

const Cart = () => {
    const { cart, setCart } = useContext(AppContext);

    const handleIncremtnent = (product) => {
        const isProductInCart = cart.find((item) => item.id === product.id);
        if (isProductInCart) {
            setCart((prev) =>
                prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        }
    }

    const handleDecrement = (product) => {
        const isProductInCart = cart.find((item) => item.id === product.id);
        if (isProductInCart && isProductInCart.quantity > 1) {
            setCart((prev) =>
                prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
        }else{
            setCart((prev) => prev.filter((item) => item.id !== product.id));
        }

    }


    console.log('CARD', cart);
    return (
        <section>
            {cart?.length > 0 ? (
                <div className=''>
                    <h2 className='text-xl md:text-3xl font-bold my-6 text-[#364153]'>Cart Items</h2>
                    <div className=''>
                        {cart?.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className='bg-white flex justify-between items-center gap-4 shadow-md my-4 border border-gray-200 p-4 rounded-md'
                                >
                                    <div className='text-gray-700 text-sm'>
                                        <h5 className='font-semibold text-gray-700 text-base'>{item.name}</h5>
                                        <span className='text-xs md:text-sm font-medium text-gray-500'>
                                            ₹{item.price} * {item.quantity || 1}
                                        </span>{' '}
                                        = <span className='text-xs md:text-sm font-medium text-gray-500'>₹{item.price * item.quantity || 1}</span>
                                    </div>

                                    <div className='flex justify-center items-center gap-1'>
                                        <button onClick={() => handleDecrement(item)} className=' rounded-md flex justify-center items-center bg-red-500 size-10 text-white font-bold text-xl'>-</button>
                                        <span className=' rounded-md flex justify-center items-center text-lg font-semibold size-10'>{item.quantity || 1}</span>
                                        <button onClick={() => handleIncremtnent(item)} className=' rounded-md flex justify-center items-center bg-green-500 p-2 size-10 text-white font-bold text-xl'>+</button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </section>
    );
};

export default Cart;
