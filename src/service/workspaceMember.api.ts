import type { WorkspaceMembers } from "@/features/WorkspaceMember/workspaceMember.model";
import { api } from "@/lib/axios";


export const getWorkspaceMemberByIdApi = async (workspace_id: number) => {
  const { data } = await api.get<WorkspaceMembers>(`/workspace-member/${workspace_id}`);
  return data;
};