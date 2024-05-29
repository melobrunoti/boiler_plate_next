import { create } from 'zustand';
import { userStoreInterface } from './types';

export const useUserStore = create<userStoreInterface>((set) => ({
  nome: '',
  setUserNome: (nome: string) =>
    set((state: userStoreInterface) => ({ nome })),
  resetNome: () => set({ nome: '' }),
}));

// async example
/* const usePostsStore = create((set) => ({
  posts: [],
  fetch: async () => {
    const response = await fetch(POSTS_API);
    set({ posts: await response.json() });
  },
})); */
