import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"; 
import EventList from "./pages/EventList";
import EventDetails from "./components/EventDetails";
import RegisterForm from "./pages/RegisterForm";
import MyRegistrations from "./pages/MyRegistrations";
import ManageEvents from "./pages/ManageEvents";
import EventForm from "./pages/EventForm";
import Attendees from "./pages/Attendees";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pb-10">
        <Routes>
        
          <Route path="/" element={<Login />} />
          
  
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/register/:id" element={<RegisterForm />} />
          <Route path="/my-registrations" element={<MyRegistrations />} />
          
  
          <Route path="/manage-events" element={<ManageEvents />} />
          <Route path="/event-form" element={<EventForm />} />
          <Route path="/events/edit/:id" element={<EventForm />} />
          <Route path="/attendees/:eventId" element={<Attendees />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;