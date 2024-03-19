import { User } from '@_types/user';
import { atom } from 'recoil';

export const userAtom = atom<User | null>({
  key: 'auth/user',
  default: null,
});
