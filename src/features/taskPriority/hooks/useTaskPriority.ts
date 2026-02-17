

import { getTaskPriorityApi } from "@/service/taskPriority.api"
import { useQuery } from "@tanstack/react-query"



export const useTaskPriority = () => {

    const { data: taskPriority, isPending, error } = useQuery({
        queryKey: ['task_priroty'],
        queryFn: () => getTaskPriorityApi(),
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })

    return { taskPriority, isPending, error }

}