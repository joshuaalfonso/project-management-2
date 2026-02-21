
import { useProjectTaskDialog } from "./hooks/useProjectTaskDialog";
import {  Button, Tabs } from "@chakra-ui/react";
import ProjectTaskDialog from "./components/ProjectTaskDialog";
import { ProjectTaskTableView } from "./components/ProjectTaskTableView";
import { LuGrid2X2, LuList } from "react-icons/lu";


const Task = () => {

  const { setOpen } = useProjectTaskDialog();

  return (
    <> 

        <ProjectTaskDialog />

        <div className="flex items-center justify-between mb-8!">
          <h1>Table List</h1>
          <Button size={'xs'} onClick={() => setOpen(true)}>Create</Button>
        </div>

        <Tabs.Root defaultValue="table_view" variant={'plain'} size={'sm'} >

          <Tabs.List>
            <Tabs.Trigger value="table_view" >
              <LuList />
            </Tabs.Trigger>
            <Tabs.Trigger value="card_view" >
              <LuGrid2X2 />
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="table_view">
            <ProjectTaskTableView />
          </Tabs.Content>
          <Tabs.Content value="card_view">Manage your projects</Tabs.Content>

        </Tabs.Root>
    
    </>
  )
}

export default Task