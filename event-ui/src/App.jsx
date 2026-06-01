import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Layouts from './components/Layouts.jsx';
import EventList from './pages/EventList.jsx';
import EventForm from './pages/EventForm.jsx';
import RegisterForm from './pages/RegisterForm.jsx';
import MyRegistrations from './pages/MyRegistrations.jsx';
import Login from './pages/Login.jsx';
import EventDetail from './components/EventDetails.jsx';
import AdminRegistrations from './components/AdminRegistrations.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Layouts />}>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path='events' element={<EventList />} />
        <Route path='events/add' element={<EventForm />} />
        <Route path='events/edit/:id' element={<EventForm />} />
        <Route path='register/:eventId' element={<RegisterForm />} />
       <Route path='events/:id' element={<EventDetail />} /> 
        <Route path='my-registrations' element={<MyRegistrations />} /> 
           <Route path='events/:eventId/registrations' element={<AdminRegistrations />} /> 
      </Route>
    </Routes>
  )
}

export default App