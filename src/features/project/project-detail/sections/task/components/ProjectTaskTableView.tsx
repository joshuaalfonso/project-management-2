import { useProjectTask } from "../hooks/useProjectTask";
import { ProjectTaskTable } from "./ProjectTaskTable";



export const ProjectTaskTableView = () => {

    const { projectTasks, isPending, error } = useProjectTask(); 

    if (isPending) return <p>loading...</p>;
    if (error) return <p>Failed to load task</p>;

    return (

        <>
            <ProjectTaskTable projectTasks={projectTasks ?? []} />
        </>

    )


}
