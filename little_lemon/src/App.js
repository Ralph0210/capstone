import { Navbar, Homepage, Footer, BookingPage } from './components';
import './App.css';
import { useState, useReducer, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {

  const [date, setDate] = useState({selectedDate: null})
  const [guests, setGuests] = useState({selectedGuests: 1})
  const [occasion, setOccasion] = useState({selectedOccasion: "None"})

const initializeTimes = () => ({
    selectedTime: null,
    availableTimes: ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'],
  });

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'SELECT_TIME':
        return {
          ...state,
           selectedTime: action.payload,
        };
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
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking/*' element={<BookingPage 
        availableTimes={availableTimes} dispatch={dispatch} date={date} setDate={setDate}
        guests={guests} setGuests={setGuests} occasion={occasion} setOccasion={setOccasion}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
