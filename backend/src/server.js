import express from 'express';
import cors from 'cors'
import notesRoutes from './routes/notesRoute.js'
import { connectDB } from './config/db.js';
import dotenv from "dotenv"
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();
const PORT = process.env.PORT || 5001;
const app = express();

//middleware
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Started on PORT:", PORT);
  })
})

