import React from 'react'
import './bookingpage.css'
import BookingForm from '../bookingform/BookingForm'
import {Routes, Route} from 'react-router-dom'
import BookingFormTwo from '../bookingformtwo/BookingFormTwo'
import { useState } from 'react'

const BookingPage = (props) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  return (
    <>
      <Routes>
        <Route path='/' element={<BookingForm {...props}/>}/>
        <Route path='/customer' element={<BookingFormTwo
        fname={fname} setFname={setFname} lname={lname} setLname={setLname} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone}
        />} />
      </Routes>
    </>
  )
}

export default BookingPage