import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  eventId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Event', required: true
   },
  eventName: {
     type: String, 
     required: true 
    }, 
  studentName: {
     type: String,
     required: true 
    },
  rollNo: {
     type: String,
      required: true 
    },
  email: {
     type: String,
     required: true
     },
  phone: {
     type: String,
      required: true
     },
  department: { 
    type: String, 
    required: true
   },
  status: {
     type: String,
      default: 'Confirmed'
     }
}, { timestamps: true });

export default mongoose.model('Registration', registrationSchema)