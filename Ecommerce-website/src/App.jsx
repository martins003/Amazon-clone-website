import { Routes, Route } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { PageNotFound } from './pages/PageNotFound';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');/*query parameter expand the cart with product details */
      setCart(response.data);

    }
    fetchAppData();
  }, [])
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='checkout' element={<CheckoutPage cart={cart} />} />
      <Route path='orders' element={<OrdersPage cart={cart} />} />
      <Route path='Tracking' element={<TrackingPage />} />
      <Route path='*' element={<PageNotFound />} />




    </Routes>

  )
}

export default App


