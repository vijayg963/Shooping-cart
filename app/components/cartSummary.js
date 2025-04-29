'use client'
import React, { useContext } from 'react'
import { THRESHOLD } from '../utils/constant'
import AppContext from '../AppContext'

const CartSummary = () => {
  const { cart } = useContext(AppContext)

  const getTotal = () => {
    if (cart.length === 0) return 0
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  }

  return (
    <section>
      <h2 className='text-3xl font-bold my-6 text-[#364153]'>Cart summary</h2>
      <div className='bg-white p-4 rounded-md pb-8'>
        <div className='flex justify-between items-center'>
          <h4 className='text-2xl font-semibold'>Subtotal:</h4> <span className='text-2xl font-bold'>₹{getTotal()}</span>
        </div>
        <hr className='my-6' />
        {getTotal() > THRESHOLD ? <h3 className='font-semibold'>You got a free wireless mouse!</h3> : <div className='bg-[#F0F6FF] w-full flex flex-col gap-4 p-4 rounded-md'>
          <h4 className='font-semibold text-gray-800'>  Add ₹{THRESHOLD} more to get a FREE wireless mouse!</h4>
          <div className='bg-gray-200 h-5 rounded-2xl relative'>
            <div className='absolute left-0 top-0 bg-blue-600 h-5 max-w-[100%] rounded-2xl' style={{ width: `${(getTotal() / THRESHOLD) * 100}%` }}></div>
          </div>
        </div>}
      </div>
    </section>
  )
}

export default CartSummary