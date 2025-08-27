import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Header } from '../../components/Header';
import { ProductGrid } from './productGrid';
import './HomePage.css';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
    const [searchParams] = useSearchParams();
  const search = searchParams.get('searchTerm');

  useEffect(() => {
    const getHomeData = async () => {
   const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    }
    getHomeData();

  }, [search]);

  return (
    <>
      <title>Ecommerce project</title>
      <link rel="icon" href="images/home-favicon.png" />

      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}