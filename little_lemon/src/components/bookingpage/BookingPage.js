import React from 'react'
import './bookingpage.css'
import BookingForm from '../bookingform/BookingForm'

const BookingPage = ({availableTimes, dispatch}) => {
  return (
    <>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </>
  )
}

export default BookingPage