




export interface ProjectTask {
  task_id: number
  title: string
  description: string
  project_id: number
  project_name: string
  task_status_id: number
  task_status_name: 'todo' | 'in progress' | 'review' | 'done'
  task_priority_id: number
  task_priority_name: string
  start_date: string
  end_date: string
  completed_at: string | null
  created_at: string
  assignees: {user_id: number, user_fullname: string}[]
}



export interface CreateProjectTask {
    title: string
    description: string
    task_priority_id: number
    start_date: string
    end_date: string
    assignees: string[]
}