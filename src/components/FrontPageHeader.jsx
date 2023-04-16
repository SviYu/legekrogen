import React from 'react'
import headerBg from './../assets/forsiden.jpg' 

const FrontPageHeader = () => {
  return (
    <section className="front-page-header" id='top'>
          <div className="front-page-header-overlay"></div>
          <img src={headerBg} className='front-page-header-bg' alt="Children are playing" />
      <div className='container front-page-header-container'>
              <h1 className='front-page-header-title'>At lege er at leve</h1>
              <p className='front-page-header-text'>Her hos os har vi et stort udvalg af legetøj i høj kvalitet</p>
          </div>
    </section>
  )
}

export default FrontPageHeader