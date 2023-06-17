import React from 'react'
import './review.css'
import { Link } from 'react-router-dom'

export const Review = () => {
  return (
    <div>
        <h1>Reservation Details</h1>
        <p>Thank you for making a reservation at Little Lemon</p>
        <Link to='/'>Home</Link>
    </div>
  )
}
