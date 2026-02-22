
// import { useProjectTaskDialog } from "./hooks/useProjectTaskDialog";
import { Tabs } from "@chakra-ui/react";
import ProjectTaskDialog from "./components/ProjectTaskDialog";
import { ProjectTaskTableView } from "./components/ProjectTaskTableView";
import { LuGrid2X2, LuList } from "react-icons/lu";
import { CreateProjectTaskButton } from "./components/CreateProjectTaskButton";


const Task = () => {

  // const { setOpen } = useProjectTaskDialog();

  return (
    <> 

        <Tabs.Root defaultValue="table_view" variant={'enclosed'} size={'sm'} fitted >

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

            {/* <Button 
              size={'xs'} 
              onClick={() => setOpen(true)}
            >
              Create
            </Button> */}

            <CreateProjectTaskButton />

          </div>

          <Tabs.Content value="table_view">
            <ProjectTaskDialog />
            <ProjectTaskTableView />
          </Tabs.Content>

          <Tabs.Content value="card_view">
            Task Card View
          </Tabs.Content>

        </Tabs.Root>
    
    </>
  )
}

export default Task