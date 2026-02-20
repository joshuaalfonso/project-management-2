
// import { Avatar, Badge, Heading, Table, Text } from "@chakra-ui/react"
// import { FiClock } from "react-icons/fi"
import { useProjectTaskDialog } from "../hooks/useProjectTaskDialog";
import { Avatar, AvatarGroup, Badge, Button, Table, Text } from "@chakra-ui/react";
import ProjectTaskDialog from "../components/ProjectTaskDialog";
import { useProjectTask } from "../hooks/useProjectTask";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { FiClock } from "react-icons/fi";

const Task = () => {

  const { setOpen } = useProjectTaskDialog();

  const { projectTasks, isPending, error } = useProjectTask(); 

  if (isPending) return <LoadingSpinner />;
  if (error) return <p>Failed to load project tasks</p>;

  console.log('project task list')

  const colorPalette = ["red", "blue", "green", "yellow", "purple", "orange"]

  const pickPalette = (name: string) => {
    const index = name.charCodeAt(0) % colorPalette.length
    return colorPalette[index]
  }

  return (
    <> 

        <ProjectTaskDialog />

        <div className="flex items-center justify-between mb-8!">
          <h1>Table List</h1>
          <Button size={'xs'} onClick={() => setOpen(true)}>Create</Button>
        </div>

        <Table.Root size="sm" tableLayout={'fixed'}>
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
                      <Badge colorPalette="yellow">{item.task_status_name}</Badge>
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
                        <AvatarGroup size="lg" stacking="last-on-top">

                          {item.assignees.map((assignee) => (
                            <Avatar.Root 
                              key={assignee.user_id} 
                              size="sm" 
                              shape="full" 
                              borderColor={'bg.subtle'}
                              colorPalette={pickPalette(assignee.user_fullname)}
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
    
    </>
  )
}

export default Task