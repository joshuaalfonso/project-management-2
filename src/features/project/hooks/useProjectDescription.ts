

import { getProjectDescription } from "@/service/project.api";
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";




export const useProjectDescription = () => {

    const { project_id } = useParams();

    const { data: projectDescription, isPending, error } = useQuery({
        queryKey: ['project_id', project_id],
        queryFn: () => getProjectDescription({project_id: +project_id!}),
        enabled: !!project_id
    })


    return { projectDescription, isPending, error }

}