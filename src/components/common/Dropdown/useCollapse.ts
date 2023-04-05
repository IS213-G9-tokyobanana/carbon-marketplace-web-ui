import { useEffect, useRef } from 'react';

export default (expand: boolean, setExpand: (b: boolean) => void) => {
  const expandIntent = useRef(false);

  useEffect(() => {
    const collapse = () => {
      if (expandIntent.current) {
        expandIntent.current = false;
      } else {
        setExpand(false);
      }
    };

    window.addEventListener('click', collapse);

    return () => {
      window.removeEventListener('click', collapse);
    };
  }, []);

  const onSelectClick = () => {
    expandIntent.current = true;
    setExpand(!expand);
  };

  return onSelectClick;
};
