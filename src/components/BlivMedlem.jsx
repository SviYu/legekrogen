import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Link } from 'react-router-dom'

const BlivMedlem = () => {
  return (
      <section className='member-section'>
      <div className="member-section-content container">
        <AnimationOnScroll animateIn='animate__lightSpeedInLeft'>
          <p>Kunne du også tænke dig at blive medlem af vores</p>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__lightSpeedInRight'>
          <h2>Kundeklub?</h2>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__pulse'>
          <Link className='btn' to="/kundeklubben">BLIV MEDLEM NU!</Link>   
        </AnimationOnScroll>
        </div>
    </section>
  )
}

export default BlivMedlem