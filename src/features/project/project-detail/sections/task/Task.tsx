
// import { useProjectTaskDialog } from "./hooks/useProjectTaskDialog";
import { Tabs } from "@chakra-ui/react";
import ProjectTaskDialog from "./project-task-dialog/ProjectTaskDialog";
import { LuGrid2X2, LuList } from "react-icons/lu";
import { CreateProjectTaskButton } from "./components/CreateProjectTaskButton";
import { ProjectTaskTable } from "./project-task-view/project-task-table/ProjectTaskTableView";


const Task = () => {

  return (
    <> 

        <Tabs.Root 
          defaultValue="table_view" 
          variant={'enclosed'} 
          size={'sm'} 
          // fitted 
        >

          <div className="flex items-center justify-between mb-8!">
            <Tabs.List height={'1'}>
              
              <Tabs.Trigger 
                value="table_view" 
                fontSize="md"
                minH="auto"
                height={'auto'}
                _selected={{bg: 'bg.subtle'}} 
              >
                <LuList />
              </Tabs.Trigger>

              <Tabs.Trigger 
                value="card_view" 
                fontSize="md"
                minH="auto"
                 height={'auto'}
                _selected={{bg: 'bg.subtle'}} 
              >
                <LuGrid2X2 />
              </Tabs.Trigger>

            </Tabs.List>

            <CreateProjectTaskButton />

          </div>

          <Tabs.Content value="table_view">
            <ProjectTaskDialog />
            <ProjectTaskTable />
          </Tabs.Content>

          <Tabs.Content value="card_view">
            Task Card View
          </Tabs.Content>

        </Tabs.Root>
    
    </>
  )
}

export default Task