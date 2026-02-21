import { Avatar, AvatarGroup, Badge, Stack, Table, Text } from "@chakra-ui/react"
import type { ProjectTask } from "../projectTask.model"
import { BiCircle } from "react-icons/bi"
import { FiClock } from "react-icons/fi"



export const ProjectTaskTable = ({projectTasks} : {projectTasks: ProjectTask[]}) => {

    const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

    const pickPalette = (name: string) => {
        const index = name.charCodeAt(0) % colorPalette.length
        return colorPalette[index]
    }

    const getStatusColor = (status: 'todo' | 'in progress' | 'review' | 'done') => {

        switch(status) {

        case 'in progress':
            return 'blue.500'
        
        case 'review':
            return 'yellow.500'

        case 'done':
            return 'green.500'

        default:
            return 'fg.muted'

        }
    
    }

    return (
        <Table.Root size="sm" tableLayout={'fixed'}>
            <Table.Header>
                <Table.Row background={'bg.subtle'}>
                    <Table.ColumnHeader>Title</Table.ColumnHeader>
                    <Table.ColumnHeader>Status</Table.ColumnHeader>
                    <Table.ColumnHeader>Priority</Table.ColumnHeader>
                    <Table.ColumnHeader>Due Date</Table.ColumnHeader>
                    <Table.ColumnHeader>Assignees</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {projectTasks?.map((item, index) => (
                    <Table.Row 
                    key={item.task_id} 
                    background={'bg.subtle'} 
                    color={'fg.muted'}
                    borderBottom={index === projectTasks.length - 1 ? 'none' : undefined}
                    >
                    <Table.Cell>{item.title}</Table.Cell>
                    <Table.Cell>
                        {/* <Badge> */}
                        <Stack direction={'row'} alignItems={'center'}>
                        <Text color={getStatusColor(item.task_status_name)}>
                            <BiCircle />
                        </Text>
                        <Text textTransform={'capitalize'}>
                            {item.task_status_name}
                        </Text>
                        </Stack>
                        {/* </Badge> */}
                    </Table.Cell>
                    <Table.Cell>
                        <Badge colorPalette="red">{item.task_priority_name}</Badge>
                    </Table.Cell>
                    <Table.Cell>
                        <div className="flex items-center gap-2">
                        <FiClock /> 
                        <Text fontSize={'sm'} color={'fg.muted'}>{new Date(item.end_date).toLocaleDateString()}</Text>
                        </div>
                    </Table.Cell>
                        <Table.Cell>
                        <div className="flex items-center gap-1">
                        <AvatarGroup size="sm" stacking="last-on-top">
                            {item.assignees.map((assignee) => (
                                <Avatar.Root
                                shape="full"
                                borderWidth="2px"
                                borderColor="bg.subtle"
                                colorPalette={pickPalette(assignee.user_fullname)}
                                key={assignee.user_id}
                                >
                                <Avatar.Fallback name={assignee.user_fullname} />
                                </Avatar.Root>
                            ))}
                        </AvatarGroup>
                        </div>
                    </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}