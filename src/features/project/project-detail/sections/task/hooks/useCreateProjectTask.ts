

import { createProjectTask } from "@/service/project-task.api";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom";


export const useCreateProjectTask = () => {

    const queryClient = useQueryClient();

    const { project_id } = useParams();

    const { mutate: createProjectTaskMutation, isPending: isCreating, error }  = useMutation({
        mutationFn: createProjectTask,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks', project_id]
            });
        },
    })

    return { createProjectTaskMutation, isCreating, error }

}