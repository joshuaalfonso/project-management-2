import { updateTaskDescriptionApi } from "@/service/project-task.api";
import { useMutation, useQueryClient } from "@tanstack/react-query"

interface UpdateTaskDescription {
    description: string; 
}

export const useUpdateTaskDescription = (task_id: number) => {

    const queryClient = useQueryClient();

    const { mutate: updateTaskDescriptionMutation, isPending, error } = useMutation({
        mutationFn: ({description}: UpdateTaskDescription) => updateTaskDescriptionApi(description, task_id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['task_detail', task_id]
            });
        }
    })


    return { updateTaskDescriptionMutation, isPending, error }


}