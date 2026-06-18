import Registration from "../Model/Registration.js";
import Event from "../Model/Event.js";


export const createRegistration = async (req, res) => {
  try {
    const { eventName, studentName, rollNo, email, phone, department } = req.body;
    const event = await Event.findOne({ EventTitle: eventName });

    if (!event) return res.status(404).json({ message: "Event not found" });

    const currentCount = event.RegisteredCount || 0;
    if (currentCount >= event.TotalSeats) {
        return res.status(400).json({ message: "Event is fully booked" });
    }

    const existingRegistration = await Registration.findOne({ eventId: event._id, rollNo: rollNo });
    if (existingRegistration) {
        return res.status(409).json({ message: "This student is already registered!" });
    }

    const newRegistration = await Registration.create({
      eventId: event._id, eventName, studentName, rollNo, email, phone, department
    });

    await Event.findByIdAndUpdate(event._id, { $inc: { RegisteredCount: 1 } });
    res.status(201).json({ success: true, registration: newRegistration });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getRegistrations = async (req, res) => {
  try {
    const { eventId } = req.query;
    const query = eventId ? { eventId } : {};
    const registrations = await Registration.find(query);
    res.status(200).json({ registrations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getMyRegistrations = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) return res.status(400).json({ message: "Email is required" });
    
    const registrations = await Registration.find({ email: email });
    res.status(200).json({ registrations });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findById(id);
    if (!registration) return res.status(404).json({ message: "Registration not found" });

    
    await Event.findByIdAndUpdate(registration.eventId, { $inc: { RegisteredCount: -1 } });
    await Registration.findByIdAndDelete(id);

    res.status(200).json({ message: "Registration cancelled successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};