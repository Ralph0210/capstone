import React from 'react'
import Hero from '../../assets/restauranfood.jpg'
import './cta.css'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <main>
            <div className="hero_container section__padding">
                <div className="left_container">
                        <h2 tabIndex={0}>Little Lemon</h2>
                        <h3 tabIndex={0}>Chicago</h3>
                    <article tabIndex={0}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</article>
                    <Link to='/booking' className="link-button">
                      <button>Reserve a Table</button>
                    </Link>
                </div>

                <div className='right_container'>
                <img src={Hero} alt="restaurant food"/>
                </div>
            </div>
        </main>
  )
}

export default CTA