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

// src/routes/teams.ts
var teams_exports = {};
__export(teams_exports, {
  teamRoutes: () => teamRoutes
});
module.exports = __toCommonJS(teams_exports);

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

// src/routes/teams.ts
async function teamRoutes(fastify) {
  fastify.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
  });
  fastify.get("/teams/:id", async (request, response) => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  teamRoutes
});
//# sourceMappingURL=teams.js.map