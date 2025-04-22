import app from './app';
import { environment } from './config/environment';

const startServer = () => {
  try {
    app.listen(environment.port, () => {
      console.log(`Server started on port ${environment.port} in ${environment.nodeEnv} mode`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();