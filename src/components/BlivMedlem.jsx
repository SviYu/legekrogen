import React from 'react'
import { Link } from 'react-router-dom'

const BlivMedlem = () => {
  return (
      <section className='member-section'>
        <div className="member-section-content container">
          <p>Kunne du også tænke dig at blive medlem af vores</p>
          <h2>Kundeklub?</h2>
          <Link className='btn' to="/kundeklubben">BLIV MEDLEM NU!</Link>   
        </div>
    </section>
  )
}

export default BlivMedlem