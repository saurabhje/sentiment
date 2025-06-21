import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express()

//middlewares
app.use(cors())
app.use(helmet())

//routes
app.use('/api')

const server = app.listen(3000, () =>{
    logger.info('Server started')
})

//handle unhandled exceptions
process.on('unhandledRejection', (err) => {
    logger.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
    logger.error(`Uncaught Exception: ${err.message}`);
    server.close(() => process.exit(1));
});
