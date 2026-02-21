import { getTaskByProjectId } from "@/service/project-task.api";
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";



export const useProjectTask = () => {

    const { project_id } = useParams();

    const { data: projectTasks, isPending, error } = useQuery({
        queryKey: ['tasks', project_id],
        queryFn: () => getTaskByProjectId(+project_id!),
        enabled: !!project_id,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
    })


    return { projectTasks, isPending, error }

} 