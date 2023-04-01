import { create } from 'zustand';
import { Viewport } from 'types';

type StoreSchema = { [v in keyof Viewport]: boolean } & {
  set: (viewports: { [k in keyof Viewport]?: boolean }) => void;
};

export default create<StoreSchema>((_set) => ({
  sm: false,
  md: false,
  lg: false,
  xl: false,
  set: (viewports) =>
    _set((state) => {
      const clone = { ...state };

      for (const [k, v] of Object.entries(viewports)) {
        clone[k as keyof Viewport] = v;
      }

      return clone;
    }),
}));
