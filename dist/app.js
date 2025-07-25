"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  createApp: () => createApp
});
module.exports = __toCommonJS(app_exports);
var import_fastify = __toESM(require("fastify"));
var import_cors = __toESM(require("@fastify/cors"));

// src/data/index.ts
var teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 7, name: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
  { id: 8, name: "AlphaTauri", base: "Faenza, Italy" },
  { id: 9, name: "Williams", base: "Grove, United Kingdom" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" }
];
var drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari" },
  { id: 5, name: "George Russell", team: "Mercedes" },
  { id: 6, name: "Carlos Sainz Jr.", team: "Ferrari" },
  { id: 7, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 8, name: "Lance Stroll", team: "Aston Martin" },
  { id: 9, name: "Oscar Piastri", team: "McLaren" },
  { id: 10, name: "Pierre Gasly", team: "Alpine" },
  { id: 11, name: "Esteban Ocon", team: "Alpine" },
  { id: 12, name: "Alexander Albon", team: "Williams" },
  { id: 13, name: "Logan Sargeant", team: "Williams" },
  { id: 14, name: "Valtteri Bottas", team: "Alfa Romeo Racing" },
  { id: 15, name: "Zhou Guanyu", team: "Alfa Romeo Racing" },
  { id: 16, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 17, name: "Nyck de Vries", team: "AlphaTauri" },
  { id: 18, name: "Kevin Magnussen", team: "Haas" },
  { id: 19, name: "Nico Hulkenberg", team: "Haas" }
];

// src/routes/teams.ts
async function teamRoutes(fastify2) {
  fastify2.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
  });
  fastify2.get("/teams/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.type("application/json").code(400);
      return { message: "Invalid team ID" };
    }
    const team = teams.find((t) => t.id === id);
    if (!team) {
      response.type("application/json").code(404);
      return { message: "Team not found" };
    }
    response.type("application/json").code(200);
    return { team };
  });
}

// src/routes/drivers.ts
async function driverRoutes(fastify2) {
  fastify2.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
  });
  fastify2.get("/drivers/:id", async (request, response) => {
    const id = parseInt(request.params.id);
    if (isNaN(id)) {
      response.type("application/json").code(400);
      return { message: "Invalid driver ID" };
    }
    const driver = drivers.find((d) => d.id === id);
    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver not found" };
    }
    response.type("application/json").code(200);
    return { driver };
  });
}

// src/routes/extra.ts
async function extraRoutes(fastify2) {
  fastify2.get("/health", async () => {
    return { status: "OK", timestamp: (/* @__PURE__ */ new Date()).toISOString() };
  });
  fastify2.get("/stats", async () => {
    const totalTeams = teams.length;
    const totalDrivers = drivers.length;
    const driversByTeam = teams.map((team) => ({
      team: team.name,
      drivers: drivers.filter((driver) => driver.team === team.name).length
    }));
    return {
      totalTeams,
      totalDrivers,
      driversByTeam
    };
  });
  fastify2.get("/drivers/by-team/:teamName", async (request) => {
    const teamName = decodeURIComponent(request.params.teamName);
    const teamDrivers = drivers.filter(
      (driver) => driver.team.toLowerCase() === teamName.toLowerCase()
    );
    if (teamDrivers.length === 0) {
      return { message: "No drivers found for this team", drivers: [] };
    }
    return { team: teamName, drivers: teamDrivers };
  });
}

// src/app.ts
function createApp() {
  const app = (0, import_fastify.default)({ logger: true });
  app.register(import_cors.default, {
    origin: "*"
  });
  app.register(teamRoutes);
  app.register(driverRoutes);
  app.register(extraRoutes);
  return app;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createApp
});
//# sourceMappingURL=app.js.map