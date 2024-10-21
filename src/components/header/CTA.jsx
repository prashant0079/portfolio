import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='https://calendly.com/nonchalantprashant95/30min' className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA