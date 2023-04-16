import React from 'react'

const Header = ({image, title, subtitle, subtext}) => {
  return (
      <div className='header'>
          {/* <div className="header-overlay"></div> */}
          <img src={image} className='header-bg' alt="Children's toys" />
      <div className="header-container">
        <div className="container">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{subtext}</p>
        </div>
      </div>
     </div>
  )
}

export default Header