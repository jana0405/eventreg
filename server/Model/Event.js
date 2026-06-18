import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
{
    EventTitle: {
        type: String,
        required: [true, "Event Title is Required"]
    },
    Category: {
        type: String,
       
    },
    OrganiserName: {
        type: String,
        required: [true, "Organiser Name is Required"]
    },
    Date: {
        type: String, 
        required: [true, "Date is Required"]
    },
    Time: {
        type: String,
        required: [true, "Time is Required"]
    },
    Venue: {
        type: String,
        required: [true, "Venue is Required"]
    },
    TotalSeats: {
        type: Number,
        required: [true, "Total Seats is Required"],
        min: [1, "Total Seats cannot be less than 1"]
    },
    RegisteredCount:{
        type: Number,
        default: 0
    },
    EventDescription: {
        type: String,
        
    }
}, 
);

export default mongoose.model("Event", eventSchema);