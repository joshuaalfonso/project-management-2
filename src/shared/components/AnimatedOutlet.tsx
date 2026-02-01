import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimatedOutlet = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
        <Outlet key={location.pathname} />
    </AnimatePresence>
  );
}

export default AnimatedOutlet
