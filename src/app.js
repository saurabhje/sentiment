import express from "express";
import sentimentRoute from "./routes/sentimentRoute.js";
import apiLimiter from "./middleware/ratelimitter.js";
import errorHandler from "./middleware/errorHandler.js";
import { requestLogger } from "./middleware/requestlogger.js";
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml');

// Middlewares
app.use(express.json());
app.use(requestLogger);
app.use(apiLimiter);

// Routes
app.use('/api/sentiment', sentimentRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use(errorHandler);

export default app;