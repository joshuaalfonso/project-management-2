import Attachment from "@/features/project/pages/Attachment";
import Overview from "@/features/project/pages/Overview";
import Setting from "@/features/project/pages/Setting";
import Task from "@/features/project/pages/Task";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "./PageTransition";

const AnimatedProjectRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<PageTransition><Overview /></PageTransition>} />
        <Route path="task" element={<PageTransition><Task /></PageTransition>} />
        <Route path="attachment" element={<PageTransition><Attachment /></PageTransition>} />
        <Route path="setting" element={<PageTransition><Setting /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  ); 
}; 

export default AnimatedProjectRoutes;
