import type { CreateProjectTask, ProjectTask } from "@/features/project/project-detail/sections/task/projectTask.model";
import { api } from "@/lib/axios";
import type { ApiResponse } from "@/model/apiResponse.model";



export const getTaskByProjectId = async (project_id: number) => {
  const { data } = await api.get<ProjectTask[]>(`/task/${project_id}`);
  return data;
};

export const createProjectTask = async (newItem: CreateProjectTask) => {
    const { data } = await api.post<ApiResponse>(`/task`, newItem);
    return data;
}