import React from 'react'
import Feedback from './Feedback'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Feedbacks = () => {
  return (
    <AnimationOnScroll animateIn='animate__fadeIn'>
      <section className='feedback-section container'>
        <AnimationOnScroll animateIn='animate__rubberBand'>
          <h2 className='feedbacks-title'>Vores kunder</h2>
          <h3 className='feedbacks-subtitle'>UDTALER</h3>
        </AnimationOnScroll>
          <Feedback />
      </section>
    </AnimationOnScroll>
  )
}

export default Feedbacks