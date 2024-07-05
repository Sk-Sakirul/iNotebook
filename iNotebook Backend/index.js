import connectDB from './db.js';
import express from 'express';
import authRoutes from './routes/auth.js'; 

const app = express();
const port = 3000;

connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
