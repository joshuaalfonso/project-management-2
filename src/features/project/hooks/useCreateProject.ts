import { useWorkSpace } from "@/context/workspace/useWorkspace";
import { createProject } from "@/service/project.api"
import { useMutation, useQueryClient } from "@tanstack/react-query"



export const useCreateProject = () => {

    const queryClient = useQueryClient();
    const { activeWorkspace } = useWorkSpace();

    const workspace_id = activeWorkspace?.workspace_id;

    const { mutate: createProjectMutation, isPending: isCreating, error }  = useMutation({
        mutationFn: createProject,
        onSuccess: () => {
            if (workspace_id) {
                queryClient.invalidateQueries({
                    queryKey: ['projects', workspace_id]
                });
            }
        },
    })

    return { createProjectMutation, isCreating, error }

}