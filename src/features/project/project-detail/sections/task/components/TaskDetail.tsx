import {  CloseButton, Drawer, Portal } from "@chakra-ui/react"
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
                    <Drawer.Content >
                        <Drawer.Header>
                            <Drawer.Title>{ taskDetail?.title }</Drawer.Title>
                        </Drawer.Header>
                        <Drawer.Body >

                            {isPending && <p>Loading...</p>}
                            {!isPending && error && <p>Failed to load details</p>}
                            
                            { taskDetail && !isPending && !error && (
                                <TaskDetailDataList 
                                    taskDetail={taskDetail} 
                                />
                            ) }

                            {/* <Dialog.Root size="full">
                                <Dialog.Trigger asChild>
                                    <Button>Open Nested</Button>
                                </Dialog.Trigger>
                                <Portal>
                                    <Dialog.Backdrop />
                                    <Dialog.Positioner>
                                    <Dialog.Content background={'bg.subtle'}>
                                        <Dialog.Header>
                                        <Dialog.Title>Attachments</Dialog.Title>
                                        </Dialog.Header>
                                        <Dialog.Body>
                                            <DocViewer
                                                documents={files ?? []}
                                                pluginRenderers={DocViewerRenderers}
                                                activeDocument={activeDocument}
                                                onDocumentChange={(doc: IDocument) => {
                                                    if (doc.fileName && doc.fileType && doc.uri) {
                                                        setActiveDocument({
                                                            uri: doc.uri,
                                                            fileName: doc.fileName,
                                                            fileType: doc.fileType
                                                        });
                                                    } else {
                                                        // Handle undefined values if necessary
                                                        console.warn('Document missing required fields', doc);
                                                    }
                                                }}
                                                config={{
                                                    header: {
                                                        disableFileName: true
                                                    }
                                                }}
                                            />
                                        </Dialog.Body>
                                    </Dialog.Content>
                                    </Dialog.Positioner>
                                </Portal>
                            </Dialog.Root> */}


                            {/* <img src={fileUrl + '0c2a9c3b-501e-490c-9c57-06bde225e105.png'} /> */}

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