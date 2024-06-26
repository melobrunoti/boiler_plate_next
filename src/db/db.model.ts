import Dexie, { type EntityTable } from 'dexie';

interface access {
  id: number;
  token: string;
  createdAt: number;
  expiresAt: number; 
}

const db = new Dexie('ContainerDatabase') as Dexie & {
  AuthTable: EntityTable<
  access,
    'id' // primary key "id" (for the typings only)
  >;
};


db.version(1).stores({
  AuthTable: '++id, token, createdAt'

});

export type { access };
export { db };