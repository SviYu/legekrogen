import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './../pages/customerClub/kundeklub.css'
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Formular = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({ mode: 'onBlur' });

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [caughtErr, setCaughtErr] = useState('')
    const [answer, setAnswer] = useState(false);

    const dataToSubmit = {
        "name": fullName,
        "email": email,
        "message": msg
    }

    const submitForm = () => {

        fetch('https://legekrogen.webmcdm.dk/subscribe', {
            method: 'POST',
            body: JSON.stringify(dataToSubmit),
            headers: {'Content-Type': 'application/json;charset=UTF-8'}
        }).then(res => res.json())
            .then(res => {
                //check if I have already got a user's email
                if (res.message === "Subscriber kan ikke oprettes") setCaughtErr(
                    
                        <p className='answer-error'>*Brugeren med denne email er allerede oprettet!</p>
                    
                )
                    
                else (setAnswer(true))    
                
        }).catch(err => {
            console.error(err.message)
        })
        
    }
    const renderAnswer = () => {
        return (
            <div className='answer-container'>
                <div className="answer-overlay"></div>
                <h2 className='answer-title'>Tak <br /> {fullName}!</h2>
                <p className='answer-text'>Vi er så glade for at du vil være en del af vores kundeklub.</p>
                <p className='answer-text'>Tag et kig i din indbakke. Vi har givet dig fri fragt på din første ordre.</p>
                <Link to="/" className='btn'>TIL FORSIDEN</Link>
            </div >
        )
    }


  return (
      <section className='formular-section container'>
          <form method='post'
              className='formular-section-form'
              onSubmit={handleSubmit(submitForm)}>
              
              <AnimationOnScroll animateIn='animate__headShake'>
                <input 
                    className='input-field'
                    type="text"
                    placeholder='Fulde navn'
                    {...register("name", {
                        required: "*Navnet skal udfyldes"
                    })}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <div className="err-text">{errors?.name?.message}</div> 
              </AnimationOnScroll>
              
              <AnimationOnScroll animateIn='animate__headShake'>
                <input
                    className='input-field'
                    type="email"
                    placeholder='Email'
                    {...register('email', {
                        required: "*Email skal udfyldes",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "*Ugyldig emailadresse"
                        }
                        })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="err-text">{errors?.email?.message}</div>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn='animate__headShake'>
                <textarea
                    className='input-field'
                    placeholder='Hvem køber du legetøj til?'
                    rows={8}
                    {...register("message", {
                        required: "*Husk at skrive noget"
                    })}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}></textarea>
                <div className="err-text">{errors?.message?.message}</div>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn='animate__pulse'>
                <input className='submit-btn' type="submit" value="BLIV MEDLEM NU!" />
              </AnimationOnScroll>
              
              {answer ? renderAnswer() : caughtErr}
              
          </form>

      </section>
  )
}

export default Formular