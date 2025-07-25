import { Team, Driver } from '../types';

export const teams: Team[] = [
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

export const drivers: Driver[] = [
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
