import Dexie, { Table } from 'dexie';
// table inteface
export interface Access {
  id?: number;
  token : string;
}

export class DB extends Dexie {
  access!: Table<Access>; 
  constructor() {
    super('myDatabase');
    this.version(1).stores({
        access: '++id, token'  
    });
  }
}
export const db = new DB();