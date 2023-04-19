import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ChosenProducts = () => {
    const [chosenProducts, setChosenProducts] = useState([])

    useEffect(() => {
        fetch('https://legekrogen.webmcdm.dk/products')
            .then(response => response.json())
            .then(productData => {
              console.log('Products', productData)
              
              //here I filter if product has a true recommended status
                setChosenProducts(productData.filter((chosenProducts) => chosenProducts.recommended))
        })
    }, [])

  return ( 
    <AnimationOnScroll animateIn='animate__fadeIn'>
      <section className="products-section">
        <AnimationOnScroll animateIn='animate__rubberBand'>
          <h2 className='products-section-title'>Et udpluk af vores</h2>
          <h3 className='products-section-subtitle'>LEGETØJ</h3>
        </AnimationOnScroll>

        <div className='products-wrapper'>
          {
            chosenProducts.map((product) => <ProductItem product={product} key={product._id}/>)
          } 
        </div>
        
      </section>
    </AnimationOnScroll>
  )
}

export default ChosenProducts