import { Avatar, AvatarGroup, Badge, Button, Stack, Table, Text } from "@chakra-ui/react"
import type { ProjectTask } from "../../hooks/projectTask.model"
import { BiCircle } from "react-icons/bi"
import { FiCheckSquare, FiClock, FiEye, FiLink } from "react-icons/fi"
import { HiFlag } from "react-icons/hi"
import { useProjectTaskDialog } from "../../hooks/useProjectTaskDialog"
import { getPriorityColor, getStatusColor, pickPalette } from "@/lib/task"


interface Props {
    item: ProjectTask, 
    index: number
}


const ProjectTaskRow = ({item}: Props) => {

    const {
        setDetailOpen,
        setSelectedId
    } = useProjectTaskDialog();


    return (
        <Table.Row 
            key={item.task_id} 
            background={'bg.subtle'} 
            color={'fg.muted'}
        >
            {/* borderBottom={index === projectTasks.length - 1 ? 'none' : undefined} */}
            <Table.Cell>{item.title}</Table.Cell>
            <Table.Cell>
                <Stack direction={'row'} gap={4}>
                    <div className="flex items-center gap-2">
                        <FiLink /> 
                        <Text >{item.attachment_count}</Text>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiCheckSquare /> 
                        <Text >{item.subtask_count}</Text>
                    </div>
                </Stack>
            </Table.Cell>
            <Table.Cell>
                <div className="flex items-center gap-3">
                    <Stack direction={'row'} alignItems={'center'}>
                        <Text color={getStatusColor(item.task_status_name)}>
                            <BiCircle />
                        </Text>
                        <Text textTransform={'capitalize'}>
                            {item.task_status_name}
                        </Text>
                    </Stack>
                    <Badge colorPalette={getPriorityColor(item.task_priority_name)}>
                        <HiFlag />
                        {item.task_priority_name}
                    </Badge>
                </div>
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
            <Table.Cell>
                <Button
                    size={'xs'}
                    variant={'ghost'}
                    onClick={() => {
                        setDetailOpen(true)
                        setSelectedId(item.task_id)
                    }}
                >
                    <FiEye />
                </Button>
            </Table.Cell>
        </Table.Row>
    )
}

export default ProjectTaskRow