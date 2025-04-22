import express, { Application } from 'express';
import cors from 'cors';
import apiRoutes from './api';
import { requestLogger } from './middleware';

const app: Application = express();

// Middlewares
app.use(cors({
  origin: ['https://cryptoluck-server.mondalsuman97322.workers.dev', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

// Routes
app.use('/api', apiRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Server is running');
});

export default app;