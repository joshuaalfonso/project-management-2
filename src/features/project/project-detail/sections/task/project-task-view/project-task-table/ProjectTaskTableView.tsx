import { EmptyList } from "@/shared/components/EmptyState";
import { useProjectTask } from "../../hooks/useProjectTask";
import { ProjectTaskTableList } from "./ProjectTaskTableList";
import { TaskDetail } from "../../project-task-detail/TaskDetail";
import LoadingSpinner from "@/shared/components/LoadingSpinner";



export const ProjectTaskTable = () => {

    const { projectTasks, isPending, error } = useProjectTask(); 

    if (isPending) return <LoadingSpinner />;
    if (error) return <p>Failed to load task</p>;


    if (projectTasks?.length === 0) {
        return <EmptyList />
    }

    return (
        <>
            <ProjectTaskTableList projectTasks={projectTasks ?? []} />
            <TaskDetail />
        </>
    );


}
