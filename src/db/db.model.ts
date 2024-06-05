import Dexie, { type EntityTable } from 'dexie';

interface access {
  id: number;
  token: string;
}

const db = new Dexie('ContainerDatabase') as Dexie & {
  AuthTable: EntityTable<
  access,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  AuthTable: '++id, token' // primary key "id" (for the runtime!)
});

export type { access };
export { db };