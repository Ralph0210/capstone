import React, { useState, useEffect } from 'react'
import './bookingform.css'
import { Link} from 'react-router-dom'

const BookingForm = ({availableTimes, dispatch, date, setDate}) => {
  // const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('')

  // useEffect(() => {
  //   console.log(date);
  //   console.log(time);
  //   console.log(guests);
  //   console.log(occasion);
  // }, [date, time, guests, occasion])

  const handleTimeSelection = (e, time) => {
    e.preventDefault();
    dispatch({type: 'SELECT_TIME', payload: time})
  }

  const handleContinue = (e) => {
    // e.preventDefault()
  }


  return (
     <form>
        <div className='date'>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e) => setDate({selectedDate: e.target.value})}/>
        </div>

        <div className='guests'>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" step="1" id="guests" onChange={(e) => setGuests(e.target.value)} />
        </div>

        <p>Please choose a time below:</p>
        <div className='time-button'>
        {availableTimes.availableTimes.map((time) => (
            <button key={time} onClick={(e) => handleTimeSelection(e, time)} disabled={availableTimes.selectedTime === time}>{time}</button>
          ))}
        </div>

        <div className='occasion'>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        </div>

        <Link to='/booking/customer' className="link-button">Continue
          {/* <button className='submit' type="submit" onClick={(e) => handleContinue(e)}>Continue</button> */}
        </Link>
    </form>
  )
}

export default BookingForm