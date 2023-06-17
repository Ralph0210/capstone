import React, { useState, useEffect } from 'react'
import './bookingform.css'
import { Link } from 'react-router-dom'

const BookingForm = ({availableTimes, dispatch, date, setDate, guests, setGuests, occasion, setOccasion, fname, setFname, lname, setLname, email, setEmail, phone, setPhone}) => {

  useEffect(() => {
    console.log(date);
    console.log(guests);
    console.log(occasion);
  }, [date, guests, occasion])

  const handleTimeSelection = (e, time) => {
    e.preventDefault();
    dispatch({type: 'SELECT_TIME', payload: time})
  }

  const handleContinue = (e) => {
    // e.preventDefault()
  }


  return (
    <>
    <div className='form_one'>
     <form>
        <div className='date'>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" value={date.selectedDate} onChange={(e) => setDate({selectedDate: e.target.value})}/>
        </div>

        <div className='guests'>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" step="1" id="guests" value={guests.selectedGuests} onChange={(e) => setGuests({selectedGuests: e.target.value})} />
        </div>

        <p>Please choose a time below:</p>
        <div className='time-button'>
        {availableTimes.availableTimes.map((time) => (
            <button key={time} onClick={(e) => handleTimeSelection(e, time)} disabled={availableTimes.selectedTime === time}>{time}</button>
          ))}
        </div>

        <div className='occasion'>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion.selectedOccasion} onChange={(e) => {setOccasion({selectedOccasion: e.target.value})}}>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
          <option>None</option>
        </select>
        {occasion.selectedOccasion === "Other" && <textarea/>}
        </div>
          <hr/>
    </form>
    </div>

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

          <Link to='/booking/review' className="link-button"><button type='submit' id='submit'>Reserve</button></Link>
        </form>
        </div>

        </>
  )
}

export default BookingForm