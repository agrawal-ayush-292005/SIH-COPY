import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar";



import Home from './pages/Home';
import Login from './pages/login';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctor from './pages/doctor';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/myappointments" element={<MyAppointments />} />
        <Route path="/appointment" element={<Appointment />} />
        
      </Routes>
    </div>
  );
};

export default App;

