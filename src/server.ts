import express, {Request, Response, Router} from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: __dirname+'/config/.env.local' });

import userRoutes from './routes/userRoutes';

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

// API routes
app.use('/users', userRoutes);

// Server & health
app.get('/', (req: Request, res: Response)=>{
    res.send('Running...');
});
app.listen(PORT, ()=>{
    console.log(`Server running.. localhost:{PORT}`);
});
