import React, { useState, useEffect } from 'react'
import './bookingform.css'

const BookingForm = ({availableTimes}) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('')

  // useEffect(() => {
  //   console.log(date);
  //   console.log(time);
  //   console.log(guests);
  //   console.log(occasion);
  // }, [date, time, guests, occasion])



  return (
    <div>
     <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>

        <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" onChange={(e) => setDate(e.target.value)}/>

        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" step="1" id="guests" onChange={(e) => setGuests(e.target.value)} />

        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)}>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />

    </form>

    </div>
  )
}

export default BookingForm