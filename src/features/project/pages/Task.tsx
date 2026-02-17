
// import { Avatar, Badge, Heading, Table, Text } from "@chakra-ui/react"
// import { FiClock } from "react-icons/fi"
import { useProjectTaskDialog } from "../hooks/useProjectTaskDialog";
import { Badge, Button, Table, Text } from "@chakra-ui/react";
import ProjectTaskDialog from "../components/ProjectTaskDialog";
import { useProjectTask } from "../hooks/useProjectTask";
import LoadingSpinner from "@/shared/components/LoadingSpinner";
import { FiClock } from "react-icons/fi";

const Task = () => {

  const { setOpen } = useProjectTaskDialog();


  const { projectTasks, isPending, error } = useProjectTask(); 

  if (isPending) return <LoadingSpinner />;
  if (error) return <p>Failed to load project tasks</p>;

  console.log(projectTasks)

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
                        <Text fontSize={'sm'} color={'fg.muted'}>{new Date(item.start_date).toLocaleDateString()}</Text>
                      </div>
                    </Table.Cell>
                    {/* <Table.Cell textAlign="end">
                      <Avatar.Root size={'xs'}>
                        <Avatar.Fallback name="Segun Adebayo" />
                        <Avatar.Image src="https://bit.ly/sage-adebayo" />
                      </Avatar.Root>
                    </Table.Cell> */}
                  </Table.Row>
                ))}
              </Table.Body>
          </Table.Root>
    
    </>
  )
}

export default Task