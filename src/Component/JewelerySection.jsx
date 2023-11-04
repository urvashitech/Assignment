import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './menSection.css'

function JewelerySection() {
  const [mensClothing, setMensClothing] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const itemsPerPage = 3; 
  useEffect(() => {
    const apiEndpoint = 'https://fakestoreapi.com/products';

    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((data) => {
       
        const mensClothingData = data.filter((product) => {
          
          return (
            product.title.toLowerCase().includes('jewelery') ||
            product.category.toLowerCase().includes('jewelery') ||
            product.description.toLowerCase().includes('jewelery')
          );
        });
        
        
        setMensClothing(mensClothingData);
      },[])
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, []);
   const Count = Math.ceil(mensClothing.length/itemsPerPage);
   const display = mensClothing.slice(
        currentPage * itemsPerPage,
        (currentPage+1)* itemsPerPage
   );
   const handleNextPage =()=>{
        if (currentPage < Count-1){
                setCurrentPage(currentPage+1);
        }
   };
   const handlePrevPage=()=>{
        if(currentPage>0){
                setCurrentPage(currentPage-1);
        }
   };
  return (
        <div className='product-container'>
      {display.map((product) => (
        <>
        <ProductCard title={product.title} description={product.description} image = {product.image} price={product.price}/>
        
        </>
        
      ))}
      
      <div className='container'>
        <button type='button' disabled={currentPage === 0} className={`bg-orange container btn-l ${currentPage === 0 ? 'disabled' : ''}`} onClick={handlePrevPage}> &larr; Previous</button>
        <button type='button'  disabled={currentPage === Count - 1} className='bg-orange btn-r'onClick={handleNextPage} >Next &rarr;</button>
      </div>
      </div>   
  );
}

export default JewelerySection;
