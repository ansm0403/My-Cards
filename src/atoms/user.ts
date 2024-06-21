import { atom } from 'recoil'
import { User } from '@model/user'

export const userAtom = atom<User | null>({
  key: 'auth/User',
  default: null,
})