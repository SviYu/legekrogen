import React from 'react'
import headerBg from './../../assets/FAQ.jpg'
import Header from '../../components/Header'
import BlivMedlem from '../../components/BlivMedlem'
import FaqsSection from '../../components/FaqsSection'

const Faqs = () => {
  return (
      <>
      <Header image={headerBg} title="Har du nogle" subtitle="SPØRGSMÅL?" subtext="Måske er de allerede besvaret herunder. Ellers er du altid velkommen til at kontakte os" />

      <FaqsSection />
      
      <BlivMedlem />
      </>
  )
}

export default Faqs