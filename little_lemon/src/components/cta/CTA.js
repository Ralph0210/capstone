import React from 'react'
import Hero from '../../assets/restauranfood.jpg'
import './cta.css'

const CTA = () => {
  return (
    <main>
            <div className="hero_container section__padding">
                <div className="left_container">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                    <article>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</article>
                    <button>Reserve a Table</button>
                </div>

                <div className='right_container'>
                <img src={Hero} alt="restaurant food"/>
                </div>
            </div>
        </main>
  )
}

export default CTA