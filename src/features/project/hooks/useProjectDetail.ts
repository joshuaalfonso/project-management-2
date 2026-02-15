
import { getProjectById } from "@/service/project.api";
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";




export const useProjectDetail = () => {

    const { project_id } = useParams();

    const { data: project, isPending, error } = useQuery({
        queryKey: ['project_detail', project_id],
        queryFn: () => getProjectById(+project_id!),
        enabled: !!project_id,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })


    return { project, isPending, error }

}