export interface userStoreInterface {
  email: string;
  setUserEmail: (email: string) => void;
  resetEmail: () => void;
}
