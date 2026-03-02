




export interface ProjectTask {
  task_id: number
  title: string
  description: string
  project_id: number
  project_name: string
  task_status_id: number
  task_status_name: 'todo' | 'in progress' | 'review' | 'done'
  task_priority_id: number
  task_priority_name: 'low' | 'medium' | 'high' | 'urgent'
  start_date: string
  end_date: string
  completed_at: string | null
  created_at: string
  attachment_count: number
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



export interface TaskDetail {
  task_id: number
  title: string
  description: string
  project_id: number
  project_name: string
  task_status_id: number
 task_status_name: 'todo' | 'in progress' | 'review' | 'done'
  task_priority_id: number
 task_priority_name: 'low' | 'medium' | 'high' | 'urgent'
  start_date: string
  end_date: string
  completed_at: string
  created_at: string
  assignees: Assignee[]
  attachment: Attachment[]
  subtasks: Subtask[]
}

export interface Assignee {
  user_id: number
  user_fullname: string
}

export interface Attachment {
  size: number
  file_name: string
  file_type: string
  original_name: string
  task_attachment_id: number
}


export interface Subtask {
  subtask_id: number
  task_id: number
  subtask_title: string
  is_completed: number
  created_at: string
}
