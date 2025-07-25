import { FastifyInstance } from 'fastify';
import { teams, drivers } from '../data';

export async function extraRoutes(fastify: FastifyInstance) {
  fastify.get('/health', async () => {
    return { status: 'OK', timestamp: new Date().toISOString() };
  });

  fastify.get('/stats', async () => {
    const totalTeams = teams.length;
    const totalDrivers = drivers.length;
    const driversByTeam = teams.map(team => ({
      team: team.name,
      drivers: drivers.filter(driver => driver.team === team.name).length
    }));

    return {
      totalTeams,
      totalDrivers,
      driversByTeam
    };
  });

  fastify.get('/drivers/by-team/:teamName', async (request: any) => {
    const teamName = decodeURIComponent(request.params.teamName);
    const teamDrivers = drivers.filter(driver => 
      driver.team.toLowerCase() === teamName.toLowerCase()
    );

    if (teamDrivers.length === 0) {
      return { message: 'No drivers found for this team', drivers: [] };
    }

    return { team: teamName, drivers: teamDrivers };
  });
}
