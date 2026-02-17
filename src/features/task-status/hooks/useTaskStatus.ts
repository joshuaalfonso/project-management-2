import { getTaskStatusApi } from "@/service/taskRoute.api"
import { useQuery } from "@tanstack/react-query"



export const useTaskStatus = () => {

    const { data: taskStatus, isPending, error } = useQuery({
        queryKey: ['task_status'],
        queryFn: () => getTaskStatusApi(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })

    return { taskStatus, isPending, error }

}