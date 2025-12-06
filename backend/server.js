
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes.js'
const app = express();

app.use(express.json())
app.use(cors());

app.use('/api/auth', authRouter);

app.listen(8000, () => console.log('Server running on http://localhost:8000'));