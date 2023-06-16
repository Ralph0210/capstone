import { Navbar, Homepage, Footer, BookingPage } from './components';
import './App.css';
import { useState, useReducer } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {
  const updateTimes = (state, action) => {

  }
  const initializeTimes = () => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
  const [availableTimes, dispatch] =  useReducer(updateTimes, initializeTimes())

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/booking' element={<BookingPage availableTimes={availableTimes}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
