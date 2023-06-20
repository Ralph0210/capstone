import React from 'react'
import './review.css'
import { Link } from 'react-router-dom'

export const Review = () => {
  return (
    <div className='review'>
        <h1>Thank you for making a reservation at Little Lemon</h1>
        <p>Your reservation has been confirmed</p>
        <Link to='/' className='link'>Home</Link>
    </div>
  )
}
