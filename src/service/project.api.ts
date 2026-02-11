import { api } from "@/lib/axios";
import type { ApiResponse } from "@/model/apiResponse.model";
import type { CreateEditProject, ProjectDescription, ProjectList } from "@/features/project/project.model";





// export const getAllProject = async (params: {project_id: number}) => {
//     const { data } = await api.get("/project", {params});
//     return data;
// };


export const getProjectByWorkspace = async (params: {workspace_id: number}) => {
  const { data } = await api.get<ProjectList[]>(`/project`, {params});
  return data;
};

export const getProjectDescription = async (params: {project_id: number}) => {
  const { data } = await api.get<ProjectDescription>(`/project/project-description`, {params});
  return data;
};


export const createProject = async (newItem: CreateEditProject) => {
    const { data } = await api.post<ApiResponse>(`/project`, newItem);
    return data;
}