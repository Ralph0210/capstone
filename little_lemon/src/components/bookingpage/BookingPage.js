import React from 'react'
import './bookingpage.css'
import BookingForm from '../bookingform/BookingForm'
import {Routes, Route} from 'react-router-dom'
import BookingFormTwo from '../bookingformtwo/BookingFormTwo'
import { useState } from 'react'

const BookingPage = ({availableTimes, dispatch, date, setDate}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<BookingForm availableTimes={availableTimes} dispatch={dispatch} date={date} setDate={setDate}/>}/>
        <Route path='/customer' element={<BookingFormTwo/>} />
      </Routes>
    </>
  )
}

export default BookingPage