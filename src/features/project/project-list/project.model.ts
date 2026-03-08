




export interface ProjectList {
    project_id: number
    project_name: string
    project_description: string
    start_date: string
    end_date: string
    project_status_id: number
    project_status_name: string
    created_at: string
    ownder_id: string
}


export interface CreateEditProject {
  project_id?: number | null
  project_name: string
  project_description: string
  workspace_id: number
  start_date: string
  end_date: string
}

export interface ProjectDescription {
  project_description: string
}