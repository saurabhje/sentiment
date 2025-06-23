import logger from '../utils/logger.js';

export const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;

    logger.info('Incoming Request', {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      body: req.body,
      timestamp: new Date().toISOString()
    });
  });

  next();
};
