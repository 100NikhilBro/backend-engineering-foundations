import express from 'express';
import authRoutes from './routes/auth.routes';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);

export default app;