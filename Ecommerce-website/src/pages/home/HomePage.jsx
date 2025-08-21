import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { ProductGrid } from './productGrid';
import './HomePage.css';

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    }
    getHomeData();

  }, []);

  return (
    <>
      <title>Ecommerce project</title>
      <link rel="icon" href="images/home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  )
}