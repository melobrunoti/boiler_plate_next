import { BASE_API_CONTAINER } from '@/constants';
import { IRequestLoginData } from './types';


export async function  loginRequest(data: IRequestLoginData){
  const response = await fetch(`${BASE_API_CONTAINER}/usuario/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'x-www-form-form-data',
    },
    body: JSON.stringify(data),
  })

  return await response.json();
}
