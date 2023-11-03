import React from 'react'
import './product.css'
function ProductCard(props) {
  return (
    <>
    <div className='product-card' style={{ 'marginBottom': '20px'}}>
      <div class="card" >
  <img src={props.image} class="card-img-top" alt="..." style={{'height': "300px"} }/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <a href="/" class="btn btn-primary" >price${props.price}</a>
  </div>
</div>
</div>
    </>
  )
}

export default ProductCard
