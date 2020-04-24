import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

export const PortalBody = ({ children }: any): React.ReactPortal | null => {
  const ref = useRef<HTMLElement>(null!);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.body;
    setMounted(true);
  }, []);

  return mounted ? ReactDOM.createPortal(children, ref.current) : null;
};
