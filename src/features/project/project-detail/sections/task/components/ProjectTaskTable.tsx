import { Table } from "@chakra-ui/react"
import type { ProjectTask } from "../projectTask.model"
import ProjectTaskRow from "./ProjectTaskRow"



interface Props {
    projectTasks: ProjectTask[]
}

export const ProjectTaskTable = ({projectTasks} : Props) => {

    return (
        <Table.ScrollArea>
            <Table.Root size="sm" tableLayout={'fixed'}>
                <Table.Header>
                    <Table.Row background={'bg.subtle'}>
                        <Table.ColumnHeader>Title</Table.ColumnHeader>
                        <Table.ColumnHeader>Attachment</Table.ColumnHeader>
                        <Table.ColumnHeader>Tags</Table.ColumnHeader>
                        <Table.ColumnHeader>Due Date</Table.ColumnHeader>
                        <Table.ColumnHeader>Assignees</Table.ColumnHeader>
                        <Table.ColumnHeader></Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {projectTasks?.map((item, index) => (
                        <ProjectTaskRow 
                            item={item} 
                            index={index}
                            key={item.task_id} 
                        />
                    ))}
                </Table.Body>
            </Table.Root>
        </Table.ScrollArea>
    )
}