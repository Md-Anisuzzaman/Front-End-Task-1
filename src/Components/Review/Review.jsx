import React from 'react'
import './Review.css'

const Review = () => {
  return (
   <div className='review__body'>
       <h1 className='text-light text-center pt-3 mb-5'>Our Progressive Review</h1>
        <div className='review__content'>
        <div className="one diff__border">
            <h1>1 BN</h1>
            <h5>Daily Impressions</h5>
        </div>
        <div className="one diff__one">
            <h1>$500k+</h1>
            <h5>Paid</h5>
        </div>
        <div className="one diff__bg">
            <h1>8K+</h1>
            <h5>Global Publishers</h5>
        </div>
    </div>
   </div>
  )
}

export default Review