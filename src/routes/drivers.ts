import { FastifyInstance } from 'fastify';
import { drivers } from '../data';
import { DriverParams } from '../types';

export async function driverRoutes(fastify: FastifyInstance) {
  fastify.get('/drivers', async (request, response) => {
    response.type('application/json').code(200);
    return { drivers };
  });

  fastify.get<{ Params: DriverParams }>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    
    if (isNaN(id)) {
      response.type('application/json').code(400);
      return { message: 'Invalid driver ID' };
    }

    const driver = drivers.find(d => d.id === id);

    if (!driver) {
      response.type('application/json').code(404);
      return { message: 'Driver not found' };
    }

    response.type('application/json').code(200);
    return { driver };
  });
}
