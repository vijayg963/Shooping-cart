const EmptyCart = () => {
    return (
        <div className='bg-white p-4 rounded-md py-6 text-center my-6'>
            <h2 className='text-2xl text-gray-600 font-semibold my-3'>
                Your cart is empty
            </h2>
            <p className='text-gray-600 font-medium '>
                Add some products to see them here!
            </p>
        </div>
    );
};

export default EmptyCart;