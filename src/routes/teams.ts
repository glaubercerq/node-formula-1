import { FastifyInstance } from 'fastify';
import { teams } from '../data';
import { TeamParams } from '../types';

export async function teamRoutes(fastify: FastifyInstance) {
  fastify.get('/teams', async (request, response) => {
    response.type('application/json').code(200);
    return { teams };
  });

  fastify.get<{ Params: TeamParams }>('/teams/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    
    if (isNaN(id)) {
      response.type('application/json').code(400);
      return { message: 'Invalid team ID' };
    }

    const team = teams.find(t => t.id === id);

    if (!team) {
      response.type('application/json').code(404);
      return { message: 'Team not found' };
    }

    response.type('application/json').code(200);
    return { team };
  });
}
