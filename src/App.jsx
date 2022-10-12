import React, { useState , useEffect} from 'react'
import { Products, Navbar, Cart } from './components'
import {commerce} from './lib/commerce'
export default function App() {
  const [products, setproducts] = useState([])
  const [cart, setcart] = useState({})
  const fetchProduct = async () => {
    const { data } = await commerce.products.list()
    setproducts(data)
  }

  const fetchCart = async () => {

    setcart(await commerce.cart.retrieve())
  }

  const handelAddToCart = async (productId , quantity) => {
    const item = await commerce.cart.add(productId, quantity)

    setcart(item)
  }
  useEffect(() => {
    fetchProduct()
    fetchCart()
  }, [])
  
  return (
    <>
      <Navbar totalItems={cart.total_items } />
      {/* <Products products={products} onAddToCart={handelAddToCart} /> */}
      <Cart cart={cart}/>
      </>
  )
}
