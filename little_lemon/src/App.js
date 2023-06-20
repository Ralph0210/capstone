import { Navbar, Homepage, Footer, BookingPage } from './components';
import './App.css';
import { useState, useReducer, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import { fetchAPI, sumbitAPI } from './api'

function App() {
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState({selectedGuests: 1})
  const [occasion, setOccasion] = useState({selectedOccasion: "None"})

  // useEffect(() => {
  //   const today = new Date();
  //   const availableTimes = fetchAPI(today);
  //   // Do something with the availableTimes
  // }, []);

  const submitForm = (formData) => {
    console.log(formData)
  }

  const initializeTimes = () => {
    // const today = new Date();
    const today = new Date('2023-06-30')
    const availableTimes = fetchAPI(today);

    return {
      selectedTime: null,
      availableTimes: availableTimes,
    };
  };

// const initializeTimes = () => ({

//     date: today,
//     selectedTime: null,
//     availableTimes: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'],
//   });

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'SELECT_TIME':
        return {
          ...state,
           selectedTime: action.payload,
        };
      case 'SELECT_DATE':
        return {
          ...state,
          availableTimes: fetchAPI(action.payload)
        }
        default:
          return state;
    }
  }

  const [availableTimes, dispatch] =  useReducer(updateTimes, initializeTimes())

  useEffect(() => {
    console.log(availableTimes.selectedTime);
  }, [availableTimes.selectedTime])

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking/*' element={<BookingPage 
        availableTimes={availableTimes} dispatch={dispatch} date={date} setDate={setDate}
        guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion} submitForm={submitForm}/>} />
      </Routes>
      </div>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
