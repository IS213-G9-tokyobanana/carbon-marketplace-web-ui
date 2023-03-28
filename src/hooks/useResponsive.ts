import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import config from 'config';
import useViewportStore from 'stores/useViewportStore';

export default () => {
  const setViewport = useViewportStore((state) => state.set);

  const sm = useMediaQuery({ minWidth: config.viewport.sm });
  const md = useMediaQuery({ minWidth: config.viewport.md });
  const lg = useMediaQuery({ minWidth: config.viewport.lg });
  const xl = useMediaQuery({ minWidth: config.viewport.xl });

  useEffect(() => {
    setViewport({ sm, md, lg, xl });
  }, [sm, md, lg, xl, setViewport]);
};
