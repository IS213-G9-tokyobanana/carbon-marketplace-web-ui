import { useEffect } from 'react';

export default (setExpand: (b: boolean) => void) => {
  useEffect(() => {
    const collapse = () => {
      setExpand(false);
    };

    window.addEventListener('click', collapse);
    return () => {
      window.removeEventListener('click', collapse);
    };
  }, []);
};
