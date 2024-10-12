import { User } from '@/model/user'
import { atom } from 'recoil'

export const userAtom = atom<User | null>({
  key: 'auth/User',
  default: null,
})