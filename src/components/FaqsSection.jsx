import React, { useEffect, useState } from 'react'
import Faq from './Faq'
import './../pages/faqs/faqs.css'

const FaqsSection = () => {
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('https://legekrogen.webmcdm.dk/questions')
            .then(response => response.json())
            .then(res => {
                console.log(res)
                setFaq(res)
        }).catch(err => console.error(err))
    }, [])

  return (
      <section className='container faq-section'>
              {
                  faq.map((faq) => {
                      return <Faq key={faq._id}
                          question={faq.question}
                          answer={faq.answer} />
                  })
              }
          
    </section>
  )
}

export default FaqsSection