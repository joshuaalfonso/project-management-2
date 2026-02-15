




export interface WorkspaceMembers {
  workspace_id: number
  workspace_name: string
  workspace_members: WorkspaceMember[]
}

export interface WorkspaceMember {
  user_id: number
  workspace_id: number
  user_fullname: string
  user_email: string
  workspace_role: string
  workspace_role_id: number
}
