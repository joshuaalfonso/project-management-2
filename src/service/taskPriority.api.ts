



import type { TaskPriority } from "@/features/taskPriority/taskPriority.model";
import { api } from "@/lib/axios";



export const getTaskPriorityApi = async () => {

    const { data } = await api.get<TaskPriority[]>(`/task-priority`);
    return data;

}