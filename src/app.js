import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,  
  credentials: true
  }));
app.use(cookieParser());

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true })); // ye isliye use hota h ki agr aapko urlencoded data bhejna hai to aap isko use kr skte ho, aur extended: true ka matlab h ki aap nested objects bhi bhej skte ho urlencoded format me.

app.use(express.static('public')); // ye isliye use hota h ki aap apne static files ko serve kr skte ho, jaise ki images, css files, js files etc. aapko bas apne static files ko public folder me rakhna hoga, aur phir aap unhe access kr skte ho http://localhost:8000/filename.jpg ke through.

export default app;

// Define a simple route

app.get('/', (req, res) => {
  res.send('Hello, World!');
});