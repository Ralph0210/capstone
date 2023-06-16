import React from 'react'
import './bookingpage.css'
import BookingForm from '../bookingform/BookingForm'

const BookingPage = ({availableTimes}) => {
  return (
    <div>
        <BookingForm availableTimes={availableTimes}/>
    </div>
  )
}

export default BookingPage