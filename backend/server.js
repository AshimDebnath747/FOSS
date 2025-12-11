
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js'
import softwareRouter from './routes/software.routes.js';
import cookieParser from "cookie-parser";
import passport from 'passport';
import "./config/passport.js"
const app = express();

app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());

app.use('/api/auth', authRouter);
app.use('/api/software', softwareRouter);

app.listen(8000, () => console.log('Server running on http://localhost:8000'));