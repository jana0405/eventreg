import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connetedDB from './config/db.js'; 
import eventRoutes from './Router/Event.js';
import registrationRoutes from './Router/Registration.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connetedDB();
app.get('/', (req, res) => {
    res.send("Backend is running successfully!");
});

// Both separated routes registered here
app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});