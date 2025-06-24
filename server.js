import app from "./src/app.js";
import logger from "./src/utils/logger.js";

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