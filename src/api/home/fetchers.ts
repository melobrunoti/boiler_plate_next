import { BASE_API } from '@/constants';

export function getBanks() {
  return fetch(`${BASE_API}/bancos/buscar`);
}
