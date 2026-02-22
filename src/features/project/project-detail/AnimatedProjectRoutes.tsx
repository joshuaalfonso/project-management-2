import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "../../../shared/components/PageTransition";
import Overview from "./sections/overview/Overview";
import Task from "./sections/task/Task";
import Attachment from "./sections/attachment/Attachment";
import Setting from "./sections/setting/Setting";
import { ProjectTaskDialogProvider } from "./sections/task/hooks/useProjectTaskDialog";

const AnimatedProjectRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<PageTransition><Overview /></PageTransition>} />
        <Route path="task" element={
          <PageTransition>
            <ProjectTaskDialogProvider>
              <Task />
            </ProjectTaskDialogProvider>
          </PageTransition>
        } />
        <Route path="attachment" element={<PageTransition><Attachment /></PageTransition>} />
        <Route path="setting" element={<PageTransition><Setting /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  ); 
};  

export default AnimatedProjectRoutes;
