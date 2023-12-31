import React from 'react'
import './bookingpage.css'
import BookingForm from '../bookingform/BookingForm'
import {Routes, Route} from 'react-router-dom'
import { Review } from '../review/Review'
import { useState } from 'react'

const BookingPage = (props) => {
  // const [fname, setFname] = useState('')
  // const [lname, setLname] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')
  return (
    <>
      <Routes>
        <Route path='/' element={<BookingForm {...props}/>}/>
        <Route path='/review' element={<Review {...props}/>} />
      </Routes>
    </>
  )
}

export default BookingPage