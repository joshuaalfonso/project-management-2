import { useContext } from "react";
import { WorkspaceContext } from "./Workspace";



export const useWorkSpace = () => {
  const context = useContext(WorkspaceContext);
  if (!context)
    throw new Error("useWorkspaceStore must be used within WorkspaceProvider");
  return context;
};