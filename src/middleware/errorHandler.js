import logger from "../utils/logger.js";

const errorHandler = (err, req, res) => {
    const statusCode = err.status || 500;
    const message = err.message || 'Internal Server Error';

    logger.error('Unhandled Error', {
        statusCode,
        message,
        method: req.method,
        url: req.originalUrl,
        ip: req.ip,
        stack: err.stack,
    });

    res.status(statusCode).json({ error: message });
};

export default errorHandler;
