import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'

const Faq = ({id, question, answer}) => {
    
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);

    

    return (
      <AnimationOnScroll animateIn='animate__headShake'>
        <article className='faq-container'
            onClick={() => { setIsAnswerShowing(prev => !prev) }}>
            
            <div className='faq-item'>
                <h4>{question}</h4>
                <button className='faq-icon'>
                    {
                        isAnswerShowing ? <FaChevronUp /> : <FaChevronDown />
                    }
                </button>
                
            </div>
                
            {isAnswerShowing && <p className='faq-answer'>{answer}</p>}
        </article>
      </AnimationOnScroll>
  )
}

export default Faq