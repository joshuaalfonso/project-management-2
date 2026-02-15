import { useWorkSpace } from "@/context/workspace/useWorkspace";
import { getWorkspaceMemberByIdApi } from "@/service/workspaceMember.api";
import { useQuery } from "@tanstack/react-query";



export const useWorkspaceMember = () => {

    const { activeWorkspace } = useWorkSpace();

    const workspace_id = activeWorkspace?.workspace_id;

    const { data: workspace_members, isPending, error } = useQuery({
        queryKey: ['worksace_member', workspace_id],
        queryFn: () => getWorkspaceMemberByIdApi(+workspace_id!),
        enabled: !!workspace_id,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })


    return { workspace_members, isPending, error }

}