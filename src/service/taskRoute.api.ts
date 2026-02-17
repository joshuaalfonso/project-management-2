import type { TaskStatus } from "@/features/task-status/taskStatus.model";
import { api } from "@/lib/axios";



export const getTaskStatusApi = async () => {

    const { data } = await api.get<TaskStatus[]>(`/task-status`);
    return data;

}