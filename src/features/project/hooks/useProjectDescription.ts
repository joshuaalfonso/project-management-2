

import { getProjectDescription } from "@/service/project.api";
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";




export const useProjectDescription = () => {

    const { project_id } = useParams();

    const { data: projectDescription, isPending, error } = useQuery({
        queryKey: ['project_description', project_id],
        queryFn: () => getProjectDescription({project_id: +project_id!}),
        enabled: !!project_id,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })


    return { projectDescription, isPending, error }

}