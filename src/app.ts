import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import golobalErrorHandlar from './app/middlewares/golobalErrorHandler';
import routers from './app/routes';
export const port = 5000;
const app: Application = express();

app.use(
  cors({
    origin: [
      'https://estateease.vercel.app',
      'https://estateease-dashboard.vercel.app',
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    credentials: true,
  })
);

app.use(cookieParser());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Appliction routs
app.use('/api/v1', routers);

app.use(golobalErrorHandlar);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: ' Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        errorMessage: ' API Not Found',
      },
    ],
  });

  next();
});

export default app;
