



import type { TaskDetail } from "@/features/project/project-detail/sections/task/projectTask.model";
import type { TaskPriority } from "@/features/taskPriority/taskPriority.model";
import { api } from "@/lib/axios";



export const getTaskPriorityApi = async () => {

    const { data } = await api.get<TaskPriority[]>(`/task-priority`);
    return data;

}


export const getTaskByIdApi = async (task_id: number) => {

    const { data } = await api.get<TaskDetail>(`/task/detail/${task_id}`);
    return data;

}