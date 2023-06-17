import React from 'react'
import './bookingformtwo.css'
import { Link } from 'react-router-dom'

const BookingFormTwo = ({fname, setFname, lname, setLname, email, setEmail, phone, setPhone}) => {
  return (
    <div className='form_two'>
    <form>
      <div className='fname'>
      <label htmlFor='first_name'>First Name</label>
      <input type='text' id='first_name' value={fname} onChange={(e) => setFname(e.target.value)}/>
      </div>

      <div className='lname'>
      <label htmlFor='last_name'>Last Name</label>
      <input type='text' id='last_name' value={lname} onChange={(e) => setLname(e.target.value)}/>
      </div>


      <div className='email'>
      <label htmlFor='email'>Email</label>
      <input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className='tel'>
      <label htmlFor='phone'>Phone Number</label>
      <input type='tel' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </div>

      <Link to='/booking/review' className="link-button">Continue</Link>
    </form>
    </div>
  )
}

export default BookingFormTwo