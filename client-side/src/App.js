import Dashboard from './pages/Dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import VendorDashboard from './pages/VendorDashboard/VendorDashboard'
import Vendor from './pages/Vendor/Vendor'
import FoodMenu from './pages/FoodMenu/FoodMenu'
import Search from './pages/Search/Search'
import FoodItems from './pages/FoodItems/FoodItems'
import Collections from './pages/Collections/Collections'
import Cart from './pages/Cart/Cart'
import CartContext from './context/CartContext'
import { useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = ()=>{
  const [cartList, setCartList] = useState([])

  const addCartItem = food =>{
    setCartList((prevCartList) => [...prevCartList, food])
  }
  const deleteCartItem = (foodId) => {
    setCartList((prevCartList) => prevCartList.filter((food) => food.id !== foodId))
  }
  const decreaseQuantity = (foodId) => {
    setCartList((prevCartList) => prevCartList.map((food) => food.id === foodId ? {...food, quantity: food.quantity - 1} : food))
  }
  const increaseQuantity = (foodId) => {
    setCartList((prevCartList) => prevCartList.map((food) => food.id === foodId ? {...food, quantity: food.quantity + 1} : food))
  }
  const clearCart = ()=>{
    setCartList([])
  }

  return (
    <CartContext.Provider value={{
      cartList,
      addCartItem,
      deleteCartItem,
      decreaseQuantity,
      increaseQuantity,
      clearCart,
    }}>
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path='/vendor-dashboard' element={<VendorDashboard />}/>
      <Route exact path='/' element={<ProtectedRoute route={<Home/>}/> }/>
      <Route exact path='/search' element={<ProtectedRoute route={<Search/>}/>}/>
      <Route exact path='/restaurantItems/:restaurantId' element={<ProtectedRoute route={<FoodItems/>}/>}/>
      <Route exact path='/collections/:activeCuisine' element={<ProtectedRoute route={<Collections/>}/>} />
      <Route exact path='/cart' element={<ProtectedRoute route={<Cart/>}/>}/>
      <Route exact path='/vendor' element={<Vendor />}/>
      <Route exact path='/vendor/food-menu' element={<FoodMenu />} />
    </Routes>
    </CartContext.Provider>
  )
}

export default App