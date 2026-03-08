import { useWorkSpace } from "@/context/workspace/useWorkspace";
import { updateProjectApi } from "@/service/project.api"
import { useMutation, useQueryClient } from "@tanstack/react-query"



export const useUpdateProject = () => {

    const queryClient = useQueryClient();
    const { activeWorkspace } = useWorkSpace();

    const workspace_id = activeWorkspace?.workspace_id;

    const { mutate: updateProjectMutation, isPending: isUpdating, error }  = useMutation({
        mutationFn: updateProjectApi,
        onSuccess: () => {
            if (workspace_id) {
                queryClient.invalidateQueries({
                    queryKey: ['projects', workspace_id]
                });
            }
        },
    })

    return { updateProjectMutation, isUpdating, error }

}