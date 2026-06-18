import Event from "../Model/Event.js"; 

export const createEvent = async (req, res) => {
    try {
        const { EventTitle, Category, OrganiserName, Date, Time, Venue, TotalSeats, EventDescription } = req.body;

       
        const eventExists = await Event.findOne({ EventTitle });

        if (eventExists) {
            
            return res.status(409).json({ message: "An event with this title already exists" });
        }

       
        const newEvent = await Event.create({
            EventTitle,
            Category,
            OrganiserName,
            Date,
            Time,
            Venue,
            TotalSeats,
            EventDescription
        });

        res.status(201).json({ message: "Event is Created", event: newEvent });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllEvents = async (req, res) => {
    try {
    
        const events = await Event.find(); 
        
        res.status(200).json({
            events
        });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getOneEvents = async (req, res) => {
    try {
    
        const events = await Event.findById(req.params.id); 
        
        res.status(200).json({ 
            message: "Get one event successfully", 
            data: events 
        });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const UpdateOne = async (req, res) => {
    try {
    
        const events = await Event.findByIdAndUpdate(req.params.id,req.body, {returnDocument:"after"}); 
        
        res.status(200).json({ 
            message: "Event Update Successfully", 
            data: events 
        });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteOne = async (req, res) => {
    try {
    
        const events = await Event.findByIdAndDelete(req.params.id); 
        
        res.status(200).json({ 
            message: "Event deleted Successfully", 
            data: events 
        });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
