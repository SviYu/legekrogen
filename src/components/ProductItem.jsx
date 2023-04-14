import React from 'react'
import './../pages/products/products.css'

const ProductItem = ({product}) => {
  return (
      <div className='product-card container'>
          <img src={product.image} alt="Children's toys" className='product-image' />
          
          {/* Shows DiscountInPercent, if it is actually there */}
          {
              product.discountInPercent ?
                  <div className='product-badge'>
                      <span>{product.discountInPercent}%</span>
                  </div> : ''
          }

          <div className="product-description">
              <p className="product-description-title">{product.title}</p>
              <p className="product-description-description">{product.description}</p>
              <div className="card-bottom">
                  <p className='product-price'>{product.price} kr</p>
                  <button className='product-buy-btn btn'>KØB</button>
              </div>
          </div>
    </div>
  )
}

export default ProductItem