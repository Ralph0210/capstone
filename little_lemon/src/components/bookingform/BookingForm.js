import React, { useState, useRef } from 'react'
import './bookingform.css'
import { Link } from 'react-router-dom'

const BookingForm = ({availableTimes, dispatch, formData, setFormData, submitForm}) => {

  const scrollToRef = useRef();

  // useEffect(() => {
  //   console.log(date);
  //   console.log(guests);
  //   console.log(occasion);
  // }, [date, guests, occasion])

const [messages, setMessages] = useState({
  mFname:'Please type in your first name',
  fname: false,
  mLname: 'Please type in your last name',
  lname: false,
  mEmail:'Please provide your email address',
  email: false,
  mTel: 'Please provide your phone number',
  tel: false,
  mDate: 'Please choose a valid date',
  date: false,
  mGuests: 'Please choose the number of the guests',
  guests: false,
  mTime: 'Please choose a time',
  time: false,
  mOccasion: 'Please choose an occasion',
  occasion: false,
})

  const handleChangeOnBlur = (e) => {
    const {name, value} = e.target;
    if (value === '') {
      setMessages((data) => ({
        ...data,
        [name]: true
      }))
    } else if(name === 'date' && new Date(value) < new Date()) {
      setMessages((data) => ({
        ...data,
        [name]: true
      }))
    } else {
      setMessages((data) => ({
        ...data,
        [name]: false
      }))
    }
  }

  const handleTimeSelection = (e, time) => {
    e.preventDefault();
    dispatch({type: 'SELECT_TIME', payload: time})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(formData.time === '') {
      setMessages((data) => ({
        ...data,
        time: true
      }))
      scrollToRef.current.scrollIntoView();
      return
    }
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
    <p id='promo' tabIndex={0}>Reserve your table now and embark on a flavorful journey. See you soon!</p>
    <div className='form_one'>
     <form onSubmit={handleSubmit}>
        <div className='date'>
        <label htmlFor="res-date">Choose date</label>
        {messages.date &&<p className='message'>{messages.mDate}</p>}
        <input type="date" required id="res-date" name='date' value={formData.date} onChange={(e) => {
          handleChange(e);
          handleDateSelection(e);
        }} onBlur={handleChangeOnBlur}/>
        </div>

        <div className='guests'>
        <label htmlFor="guests">Number of guests</label>
        {messages.guests &&<p className='message'>{messages.mGuests}</p>}
        <input type="number" required placeholder="1" min="1" max="10" step="1" id="guests" name='guests' value={formData.guests} onChange={handleChange} onBlur={handleChangeOnBlur}/>
        </div>

        <div ref={scrollToRef}>
        <label htmlFor='time-button'  tabIndex={0}>Please choose a time below:</label>
        {messages.time &&<p className='message'>{messages.mTime}</p>}
        <div className='time-button' id='time-button'>
        {availableTimes.availableTimes.map((time) => (
            <button key={time} name='time' value={time} onClick={(e) => {
              handleTimeSelection(e, time)
            handleChange(e)}} disabled={availableTimes.selectedTime === time}>{time}</button>
          ))}
        </div>
        </div>

        <div className='occasion'>
        <label htmlFor="occasion">Occasion</label>
        {messages.occasion &&<p className='message'>{messages.mOccasion}</p>}
        <select id="occasion" required value={formData.occasion} onChange={handleChange} name='occasion' onBlur={handleChangeOnBlur}>
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
          {messages.fname &&<p className='message'>{messages.mFname}</p>}
          <input type='text' required id='first_name' value={formData.fname} onChange={handleChange} name='fname' onBlur={handleChangeOnBlur}/>
          </div>

          <div className='lname'>
          <label htmlFor='last_name'>Last Name</label>
          {messages.lname &&<p className='message'>{messages.mLname}</p>}
          <input type='text' required id='last_name' value={formData.lname} onChange={handleChange} name='lname' onBlur={handleChangeOnBlur}/>
          </div>


          <div className='email'>
          <label htmlFor='email'>Email</label>
          {messages.email &&<p className='message'>{messages.mEmail}</p>}
          <input type='email' required id='email' value={formData.email} onChange={handleChange} name='email' onBlur={handleChangeOnBlur}/>
          </div>

          <div className='tel'>
          <label htmlFor='phone'>Phone Number</label>
          {messages.tel &&<p className='message'>{messages.mTel}</p>}
          <input type='tel' required id='phone' value={formData.phone} onChange={handleChange} name='tel' onBlur={handleChangeOnBlur}/>
          </div>

          {/* <Link to='/booking/review' className="link-button"></Link> */}
          <button type='submit' id='submit'>Reserve</button>
        </form>
        </div>

        </>
  )
}

export default BookingForm