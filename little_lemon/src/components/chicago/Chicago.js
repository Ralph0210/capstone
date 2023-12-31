import React from 'react'
import A from "../../assets/Mario and Adrian A.jpg"
import B from "../../assets/Mario and Adrian b.jpg"
import './chicago.css'

const Chicago = () => {
  return (
  <div className='chicago section__padding'>
    <div className='left_box'>
        <h2 tabIndex={0}>Little Lemon</h2>
        <h3 tabIndex={0}>Chicago</h3>
        <article tabIndex={0}>We are a family-owned Mediterranean restaurant, offering traditional recipes with a modern twist. Experience our unique fusion of flavors, combining authentic ingredients with innovative techniques. Join us for a memorable dining experience that celebrates the rich heritage of Mediterranean cuisine.</article>
    </div>

    <div className='right_box'>
      <div className='A'>
        <img src={A} className='image_A' alt='' aria-hidden="true"/>
        </div>
        <div className='B'>
          <img src={B} className='image_B' alt='' aria-hidden="true"/>
        </div>
    </div>
</div>
  )
}

export default Chicago