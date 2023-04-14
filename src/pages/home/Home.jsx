import React from 'react'
import FrontPageHeader from '../../components/FrontPageHeader'
import './home.css'
import BlivMedlem from '../../components/BlivMedlem'
import Feedbacks from '../../components/Feedbacks'
import ChosenProducts from '../../components/ChosenProducts'

const Home = () => {
  return (
      <main className='front-page'>
      <FrontPageHeader />
      <ChosenProducts />
      <Feedbacks />
      <BlivMedlem />
      </main>
  )
}

export default Home