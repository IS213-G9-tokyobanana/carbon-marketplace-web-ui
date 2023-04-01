import { useMemo } from 'react';

import { API } from 'types';
import useUserStore from 'stores/useUserStore';

export default (user: API.User) => {
  const setUserStore = useUserStore((state) => state.set);

  useMemo(() => setUserStore(user), []);
};
