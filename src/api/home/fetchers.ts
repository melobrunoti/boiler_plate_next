import { BASE_API, BASE_API_CONTAINER } from '@/constants';
import { loggedFetch } from '../config';

export function getAccessLevel() {
  return loggedFetch(`${BASE_API_CONTAINER}/usuario/nivelacesso`);
} 

export function getBanks() {
  return fetch(`${BASE_API}/bancos/buscar`);
}