import { api } from "@/lib/axios";
import type { ApiResponse } from "@/model/apiResponse.model";
import type { CreateEditProject, ProjectDescription, ProjectList } from "@/features/project/project-list/project.model";



export const getProjectByWorkspace = async (params: {workspace_id: number}) => {
  const { data } = await api.get<ProjectList[]>(`/project`, {params});
  return data;
};

export const getProjectById = async (project_id: number) => {
  const { data } = await api.get<ProjectList>(`/project/${project_id}`);
  return data;
};

export const getProjectDescription = async (params: {project_id: number}) => {
  const { data } = await api.get<ProjectDescription>(`/project/project-description`, {params});
  return data;
};

export const createProjectApi = async (newItem: CreateEditProject) => {
    const { data } = await api.post<ApiResponse>(`/project`, newItem);
    return data;
}

export const updateProjectApi = async (updatedItem: CreateEditProject) => {
    const { data } = await api.put<ApiResponse>(`/project`, updatedItem);
    return data;
}