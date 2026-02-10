




export interface ProjectList {
    project_id: number
    project_name: string
    project_description: string
    status: number
    created_at: string
    ownder_id: string
}


export interface CreateEditProject {
  project_id?: number | null
  project_name: string
  project_description: string
  workspace_id: number
}