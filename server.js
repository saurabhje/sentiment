import express from "express";
import cors from "cors";
import sentimentRoute from "./src/routes/sentimentRoute.js";
import apiLimiter from "./src/middleware/ratelimitter.js";
import errorHandler from "./src/middleware/errorHandler.js";
import logger from "./src/utils/logger.js";
const app = express()


//middlewares
app.use(cors())
app.use(express.json())
app.use(apiLimiter)

//routes
app.use('/api/sentiment',sentimentRoute)
app.use(errorHandler)

const server = app.listen(3000, () => {
  logger.info('Server is running on port 3000');
});


process.on('unhandledRejection', (err) => {
    logger.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
    logger.error(`Uncaught Exception: ${err.message}`);
    server.close(() => process.exit(1));
});