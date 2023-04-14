import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

const ChosenProducts = () => {
    const [chosenProducts, setChosenProducts] = useState([])

    useEffect(() => {
        fetch('https://legekrogen.webmcdm.dk/products')
            .then(response => response.json())
            .then(productData => {
                console.log('Products', productData)
                setChosenProducts(productData.filter((chosenProducts) => chosenProducts.recommended))
        })
    }, [])

  return (
    <section className="products-section">
        <h2 className='products-section-title'>Et udpluk af vores</h2>
        <h3 className='products-section-subtitle'>LEGETØJ</h3>

        <div className='products-wrapper'>
          {
            chosenProducts.map((product) => <ProductItem product={product} key={product._id}/>)
          } 
        </div>
        
      </section>
  )
}

export default ChosenProducts