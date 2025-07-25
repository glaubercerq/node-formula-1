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

// src/data/index.ts
var data_exports = {};
__export(data_exports, {
  drivers: () => drivers,
  teams: () => teams
});
module.exports = __toCommonJS(data_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  drivers,
  teams
});
//# sourceMappingURL=index.js.map