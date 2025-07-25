import { createApp } from './app';
import { config } from './config';

async function start() {
  try {
    const app = createApp();
    
    await app.listen({ 
      port: config.port, 
      host: config.host 
    });
    
    console.log(`Server running on ${config.host}:${config.port}`);
  } catch (err) {
    console.error('Error starting server:', err);
  }
}

start();
