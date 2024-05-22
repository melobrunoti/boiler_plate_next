import { create } from 'zustand';
import { userStoreInterface } from './types';

export const useUserStore = create<userStoreInterface>((set) => ({
  email: '',
  setUserEmail: (email: string) =>
    set((state: userStoreInterface) => ({ email })),
  //resetEmail: () => set({ email: '' }),
}));

// async example
/* const usePostsStore = create((set) => ({
  posts: [],
  fetch: async () => {
    const response = await fetch(POSTS_API);
    set({ posts: await response.json() });
  },
})); */


