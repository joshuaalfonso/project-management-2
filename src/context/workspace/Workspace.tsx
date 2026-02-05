import { createContext } from "react";
import type { WorkspaceContextType } from "./WorkSpaceProvider";






export const WorkspaceContext = createContext<WorkspaceContextType | undefined>(
  undefined
);