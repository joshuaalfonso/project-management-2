



export interface LoginPost {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean
  message: string
  token: string
  user: User,
  workspace: WorkSpace
}

export interface User {
  user_id: number
  name: string
  email: string
  password: string
  google_id: string | null
  created_at: string,
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}


export interface WorkSpace {
  workspace_id: number
  workspace_name: string
}
