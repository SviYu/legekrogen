import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import headerBg from './../../assets/produkter.jpg'
import BlivMedlem from '../../components/BlivMedlem'
import ProductItem from '../../components/ProductItem'
import { AnimationOnScroll } from 'react-animation-on-scroll'
 
const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('https://legekrogen.webmcdm.dk/products/')
      .then(response => response.json())
      .then(productData => {
        console.log(productData)
        setProduct(productData)
      })
    .catch(err => console.log(err))
  }, [])

  return (
      <>
      <Header image={headerBg} title="På udkig efter nyt" subtitle="LEGETØJ?" subtext="" />
      
      <AnimationOnScroll animateIn='animate__fadeIn'>
        <section className="products-section">
          <AnimationOnScroll animateIn='animate__rubberBand'>
            <h2 className='products-section-title'>Alt vores</h2>
            <h3 className='products-section-subtitle'>LEGETØJ</h3>
          </AnimationOnScroll>

          <div className='products-wrapper'>
            {
              product.map((product) => <ProductItem product={product} key={product._id}/>)
            }
          </div>
          
        </section>
      </AnimationOnScroll>

      <BlivMedlem />
      </>
  )
}

export default Products