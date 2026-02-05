import { useState, type ReactNode } from "react";
import { WorkspaceContext } from "./Workspace";


interface Workspace {
  workspace_id: number;
  workspace_name: string;
//   role?: "owner" | "admin" | "member";
}


export interface WorkspaceContextType {
  activeWorkspace: Workspace | null;
  setActiveWorkspace: (workspace: Workspace | null) => void;
  switchWorkspace: (workspace: Workspace) => void;
}

export const WorkspaceProvider = ({ children }: { children: ReactNode }) => {


    const [activeWorkspace, setActiveWorkspaceState] = useState<Workspace | null>(() => {
        const storedWorkSpace = localStorage.getItem("workspace");
        return storedWorkSpace ? JSON.parse(storedWorkSpace) : null;
    });

    // const [user, setUser] = useState<User | null>(() => {
    //     const storedUser = localStorage.getItem("user");
    //     return storedUser ? JSON.parse(storedUser) : null;
    // });

  const setActiveWorkspace = (workspace: Workspace | null) => {
    setActiveWorkspaceState(workspace);
    // Optional: persist to localStorage or call backend to update last_active_workspace
    localStorage.setItem("workspace", JSON.stringify(workspace));
  };

  const switchWorkspace = (workspace: Workspace) => {
    setActiveWorkspace(workspace);
    // optionally refetch workspace-scoped data here
  };

  return (
    <WorkspaceContext.Provider
      value={{ activeWorkspace, setActiveWorkspace, switchWorkspace }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

