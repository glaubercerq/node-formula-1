"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/drivers.ts
var drivers_exports = {};
__export(drivers_exports, {
  driverRoutes: () => driverRoutes
});
module.exports = __toCommonJS(drivers_exports);

// src/data/index.ts
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

// src/routes/drivers.ts
async function driverRoutes(fastify) {
  fastify.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
  });
  fastify.get("/drivers/:id", async (request, response) => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  driverRoutes
});
//# sourceMappingURL=drivers.js.map