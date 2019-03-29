import { Hamburger, Lunch } from '../models/lunchModel';

export const LUNCHS: Lunch[] = [
  { id: 1, name: 'Hamburguesa Simple', price: 1500 },
  { id: 2, name: 'Hamburguesa Doble', price: 2500 },
  { id: 3, name: 'Huevo', price: 500 },
  { id: 4, name: 'Queso', price: 500 },
  { id: 5, name: 'Papas Fritas', price: 500 },
  { id: 6, name: 'Onion Rings', price: 500 },
  { id: 7, name: 'Agua 750ml', price: 800 },
  { id: 8, name: 'Agua 500ml', price: 500 },
  { id: 9, name: 'Gaseosa 500ml', price: 700 },
  { id: 9, name: 'Gaseosa 750ml', price: 1000 }
];

export const HAMBURGUERS: Hamburger[] = [
  { typeMeat: 'res' },
  { typeMeat: 'pollo' },
  { typeMeat: 'vegi' }
];
