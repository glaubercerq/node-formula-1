import fastify from 'fastify';
import cors from '@fastify/cors';
import { teamRoutes } from './routes/teams';
import { driverRoutes } from './routes/drivers';
import { extraRoutes } from './routes/extra';

export function createApp() {
  const app = fastify({ logger: true });

  app.register(cors, {
    origin: "*",
  });

  app.register(teamRoutes);
  app.register(driverRoutes);
  app.register(extraRoutes);

  return app;
}
