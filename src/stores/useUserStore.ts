import { create } from 'zustand';
import { API } from 'types';

type StoreSchema = {
  user?: API.User;
  set: (u: API.User) => void;
};

export default create<StoreSchema>((_set) => ({
  user: undefined,
  set: (u) =>
    _set(() => ({
      user: u,
    })),
}));
