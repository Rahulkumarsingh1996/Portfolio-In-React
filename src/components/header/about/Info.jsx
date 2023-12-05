import React from 'react'

function Info() {
  return (
   <div className="about__info grid">
    <div className="about__box">
     <i class="uil uil-award-alt about__icon"></i>
        <h3 className="about__title">Experience </h3>
            <span className="about__subtitle">1 Year working</span>
       
    </div>

    <div className="about__box">
     <i class="uil uil-bag about__icon"></i>
        <h3 className="about__title"> Completed</h3>
            <span className="about__subtitle">5 + projects</span>
       
    </div>

    <div className="about__box">
      <i class="fa-solid fa-headset about__icon"></i>
        <h3 className="about__title">Support </h3>
            <span className="about__subtitle">Online 24/7</span>
       
    </div>

    
   </div>
  )
}

export default Info