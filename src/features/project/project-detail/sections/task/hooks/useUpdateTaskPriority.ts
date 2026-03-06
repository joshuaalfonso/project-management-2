import { updateTaskPriorityApi } from "@/service/project-task.api";
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface UpdateTaskPriority{
    task_priority_id: number; 
}

export const useUpdateTaskPriority = (task_id: number) => {

    const queryClient = useQueryClient();

    const { mutate: updateTaskPriorityMutation, isPending, error } = useMutation({
        mutationFn: ({task_priority_id}: UpdateTaskPriority) => updateTaskPriorityApi(task_priority_id, task_id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['task_detail', task_id]
            });
        }
    })


    return { updateTaskPriorityMutation, isPending, error }


}