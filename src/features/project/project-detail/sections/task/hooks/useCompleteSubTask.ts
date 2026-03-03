import { completeSubtaskApi } from "@/service/subtask"
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface CompleteSubtask {
    isCompleted: boolean; 
    subtask_id: number
}

export const useCompleteSubtask = (task_id: number) => {

    const queryClient = useQueryClient();

    const { mutate: completeSubtaskMutation, isPending, error } = useMutation({
        mutationFn: ({isCompleted, subtask_id}: CompleteSubtask) => completeSubtaskApi(isCompleted, subtask_id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['task_detail', task_id]
            });
        }
    })


    return { completeSubtaskMutation, isPending, error }


}