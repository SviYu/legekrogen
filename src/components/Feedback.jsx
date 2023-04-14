import React, { useEffect, useState } from 'react'

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://legekrogen.webmcdm.dk/reviews')
            .then(response => response.json()) //gets JSON data
            .then((res => {
                setFeedback(res) //result with got data
                console.log('Feedbacks', res)
            }))
        .catch(err => console.error('ERROR =>', err))
    }, [])

  return (
    <div className='feedback-wrapper'>
          {
              feedback.map((feedback) => {
                  return (
                      <div key={feedback._id} className='feedback-item'>
                          <p>"{feedback.description}"</p>
                          <h5>{feedback.name}</h5>
                      </div>
                  )
                  
              })
          }
    </div>
  )
}

export default Feedback