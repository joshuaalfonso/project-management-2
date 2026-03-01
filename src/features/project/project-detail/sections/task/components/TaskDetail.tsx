import { CloseButton, Drawer, Portal } from "@chakra-ui/react"
import { useProjectTaskDialog } from "../hooks/useProjectTaskDialog"
import { useTaskDetail } from "../hooks/useTaskDetail";
import { TaskDetailDataList } from "./TaskDetailDataList";


export const TaskDetail = () => {

    const {
        detailOpen,
        setDetailOpen
    } = useProjectTaskDialog();

    const { taskDetail, isPending, error } = useTaskDetail();    

    return (
        <Drawer.Root 
            open={detailOpen} 
            onOpenChange={(e) => setDetailOpen(e.open)}
            size={'md'}
        >
            <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                    <Drawer.Content>
                        <Drawer.Header>
                            <Drawer.Title>{ taskDetail?.title }</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body>

                            {isPending && <p>Loading...</p>}
                            {!isPending && error && <p>Failed to load details</p>}
                            
                            { taskDetail && !isPending && !error && (
                                <TaskDetailDataList 
                                    taskDetail={taskDetail} 
                                />
                            ) }

                        </Drawer.Body>
                        {/* <Drawer.Footer>
                            <Button variant="outline">Cancel</Button>
                            <Button>Save</Button>
                        </Drawer.Footer> */}
                        <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Drawer.CloseTrigger>
                    </Drawer.Content>
                </Drawer.Positioner>
            </Portal>
        </Drawer.Root>
    )
}