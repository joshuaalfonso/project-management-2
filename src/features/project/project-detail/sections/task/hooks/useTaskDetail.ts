

import { useQuery } from "@tanstack/react-query"
import { useProjectTaskDialog } from "./useProjectTaskDialog";
import { getTaskByIdApi } from "@/service/taskPriority.api";



export const useTaskDetail = () => {

    const { selectedId } = useProjectTaskDialog();

    const { data: taskDetail, isPending, error } = useQuery({
        queryKey: ['task_detail', selectedId],
        queryFn: () => getTaskByIdApi(selectedId as number),
        enabled: selectedId !== undefined,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })


    return { taskDetail, isPending, error }

} 