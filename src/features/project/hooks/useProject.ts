import { useWorkSpace } from "@/context/workspace/useWorkspace"
import { getProjectByWorkspace } from "@/service/project.api"
import { useQuery } from "@tanstack/react-query"




export const useProject = () => {

    const { activeWorkspace } = useWorkSpace();

    const workspace_id = activeWorkspace?.workspace_id;

    const { data: projects, isPending, error } = useQuery({
        queryKey: ['projects', workspace_id],
        queryFn: () => getProjectByWorkspace({workspace_id: workspace_id!}),
        enabled: !!workspace_id
    })


    return { projects, isPending, error }

}