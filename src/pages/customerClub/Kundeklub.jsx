import React from 'react'
import headerBg from './../../assets/medlem.jpg'
import Header from '../../components/Header'
import Formular from '../../components/Formular'

const Kundeklub = () => {
  return (
      <>
      <Header image={headerBg} title="Bliv medlem af vores" subtitle="KUNDEKLUB" subtext="og få ekslusive tilbud og nyheder før alle andre" />
      
      <Formular />
      </>
  )
}

export default Kundeklub