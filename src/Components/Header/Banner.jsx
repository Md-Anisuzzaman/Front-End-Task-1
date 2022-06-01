import React from 'react'
import './Banner.css'


const Banner = () => {
  return (
    <div className='banner__body pt-5 pb-5'>
      <div className="banner__left">
        <h2 style={{color:'#FF6F00'}}>Best Learnig, Best Growth</h2>
        <p style={{color:'#644F9C'}}>To prepare well for IELTS Speaking test you should familiarize yourself with various IELTS Speaking topics and questions types that you may encounter on the test day.</p>
          <button className='learn__more'>Learn More</button>
      </div>

      <div className="banner__right">
        <img className='banner__img' src="https://galvanizetestprep.com/wp-content/uploads/2019/12/RAJA-KONDAPALLI-1.png" alt="" />
      </div>
    </div>
  )
}

export default Banner