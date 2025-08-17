import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './config/mongoose.js';
import userRouter from './Routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

// Connect to DB
connectDB().catch(err => console.error('DB connection failed:', err));

app.get('/', (req, res) => res.send("API IS WORKING"));
app.use('/api/user',userRouter)
// Only listen when running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export app for Vercel
export default app;
