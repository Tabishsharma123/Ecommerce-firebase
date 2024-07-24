/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'
import Loader from '../../components/loader/Loader'

function Order() {
  const userid = JSON.parse(localStorage.getItem('user'))?.user?.uid
  const context = useContext(myContext)
  const { mode, loading, order } = context
  const [userOrders, setUserOrders] = useState([])

  useEffect(() => {
    if (order.length > 0 && userid) {
      const filteredOrders = order.filter(obj => obj.userid === userid)
      setUserOrders(filteredOrders)
    }
  }, [order, userid])

  if (loading) {
    return <Layout><Loader /></Layout>
  }

  if (!userid) {
    return <Layout><h2 className='text-center text-2xl text-white'>Please log in to view your orders</h2></Layout>
  }

  return (
    <Layout>
      {userOrders.length > 0 ? (
        <div className="h-full pt-10">
          {userOrders.map((order, index) => (
            <div key={index} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 mb-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>Order #{index + 1}</h2>
              {order.cartItems.map((item, itemIndex) => (
                <div key={itemIndex} className="rounded-lg md:w-2/3">
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
                    <img src={item.imageUrl} alt="product-image" className="w-full rounded-lg sm:w-40" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
                        <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
                        <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>Price: ₹{item.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <h2 className='text-center text-2xl text-white'>No orders found</h2>
      )}
    </Layout>
  )
}

export default Order