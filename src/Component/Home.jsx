import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function Home() {
  const [productsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Define the number of items per page here

  useEffect(() => {
    const apiEndpoint = 'https://fakestoreapi.com/products';

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
        const extractedData = data.map((product) => ({
          title: product.title,
          image: product.image,
          description:product.description,
          category: product.category,
          price: product.price,
        }));
        setProductsData(extractedData);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);

  const Count = Math.ceil(productsData.length / itemsPerPage);
  const display = productsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < Count - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='product-container'>
      {display.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          description = {product.description.slice(0,60)}
          image={product.image}
          price={product.price}
        />
      ))}

      <div className='container'>
        <button
          type='button'
          disabled={currentPage === 0}
          className={`bg-orange container btn-l ${
            currentPage === 0 ? 'disabled' : ''
          }`}
          onClick={handlePrevPage}
        >
          &larr; Previous
        </button>
        <button
          type='button'
          disabled={currentPage === Count - 1}
          className='bg-orange btn-r'
          onClick={handleNextPage}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}

export default Home;
