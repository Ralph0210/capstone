import React, { useState, useEffect } from 'react'
import './bookingform.css'
import { Link } from 'react-router-dom'

const BookingForm = ({availableTimes, dispatch, formData, setFormData, submitForm}) => {

  // useEffect(() => {
  //   console.log(date);
  //   console.log(guests);
  //   console.log(occasion);
  // }, [date, guests, occasion])

const [messages, setMessages] = useState({
  mFname:'Please type in your first name',
  fname: false,
})

  const handleChangeOnBlurFname = (e) => {
    const {name, value} = e.target;
    if (value === '') {
      setMessages((data) => ({
        ...data,
        [name]: true
      }))
    }
  }

  const handleTimeSelection = (e, time) => {
    e.preventDefault();
    dispatch({type: 'SELECT_TIME', payload: time})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitForm(formData)
  }

  const handleDateSelection = (e) => {
    e.preventDefault();
    const f = new Date(e.target.value)
    dispatch({type: 'SELECT_DATE', payload: f})
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }))
  }


  return (
    <>
    <p id='promo'>Reserve your table now and embark on a flavorful journey. See you soon!</p>
    <div className='form_one'>
     <form onSubmit={handleSubmit}>
        <div className='date'>
        <label htmlFor="res-date">Choose date</label>
        <input type="date" required id="res-date" name='date' value={formData.date} onChange={(e) => {
          handleChange(e);
          handleDateSelection(e);
        }}/>
        </div>

        <div className='guests'>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" required placeholder="1" min="1" max="10" step="1" id="guests" name='guests' value={formData.guests} onChange={handleChange} />
        </div>

        <div>
        <p>Please choose a time below:</p>
        <div className='time-button'>
        {availableTimes.availableTimes.map((time) => (
            <button key={time} name='time' value={time} onClick={(e) => {
              handleTimeSelection(e, time)
            handleChange(e)}} disabled={availableTimes.selectedTime === time}>{time}</button>
          ))}
        </div>
        </div>

        <div className='occasion'>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" required value={formData.occasion} onChange={handleChange} name='occasion'>
          <option selected>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
        {formData.occasion !== "None" &&
        <>
        <label htmlFor='requests' className='requests'>Special Requests (optional)</label>
        <textarea id='requests' onChange={handleChange} name='requests'/>
        </>}
        </div>
          <hr/>
    {/* </form> */}
    {/* </div> */}

      {/* <div className='form_two'> */}
        {/* <form> */}
          <div className='fname'>
          <label htmlFor='first_name'>First Name</label>
          {messages.fname &&<p>{messages.mFname}</p>}
          <input type='text' required id='first_name' value={formData.fname} onChange={handleChange} name='fname' onBlur={handleChangeOnBlurFname}/>
          </div>

          <div className='lname'>
          <label htmlFor='last_name'>Last Name</label>
          <input type='text' required id='last_name' value={formData.lname} onChange={handleChange} name='lname'/>
          </div>


          <div className='email'>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' value={formData.email} onChange={handleChange} name='email'/>
          </div>

          <div className='tel'>
          <label htmlFor='phone'>Phone Number</label>
          <input type='tel' required id='phone' value={formData.phone} onChange={handleChange} name='tel'/>
          </div>

          {/* <Link to='/booking/review' className="link-button"></Link> */}
          <button type='submit' id='submit'>Reserve</button>
        </form>
        </div>

        </>
  )
}

export default BookingForm