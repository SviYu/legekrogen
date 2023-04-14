import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { BsTelephoneFill } from 'react-icons/bs'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-wrapper container">
        <div className="contact-us">
          <h3> Kundeservice</h3>
          <a href="mailto:kontakt@legehjørnet.dk">
            <BiEnvelope/> kontakt@legehjørnet.dk
          </a>
          <p><BsTelephoneFill /> +45 23 45 67 89</p>
        </div>

        <div className="some">
          <h3>Følg os</h3>
          <a className='some-link' href="https://facebook.com" rel='noreferrer noopener'><RiFacebookCircleFill /></a>
          <a className='some-link some-link-instagram' href="https://instagram.com" rel='noreferrer noopener'><RiInstagramFill /></a>
        </div>

      </div>
    </footer>
  )
}

export default Footer