import type { TaskDetail } from "../hooks/projectTask.model"
import { FiAlignLeft, FiCalendar, FiCircle, FiDownload, FiEye, FiFlag, FiPaperclip, FiUsers } from "react-icons/fi";
import { getPriorityColor, getStatusColor, pickPalette } from "@/lib/task";
import { DateDifferenceDisplay, DateDisplay } from "@/lib/dateFormat";
import { EmptyList } from "@/shared/components/EmptyState";
import { Avatar, Badge, Box, Button, CloseButton, DataList, Dialog, For, FormatByte, HStack, Image, Popover, Portal, Stack, Text } from "@chakra-ui/react";
import img from '@/assets/images/png.png';
import pdf from '@/assets/images/pdf2.png';
import excel from '@/assets/images/xls.png';
import doc from '@/assets/images/doc.png';
import unknown from '@/assets/images/unknown.png';
import { useState } from "react";
import DocViewer, { DocViewerRenderers } from "@iamjariwala/react-doc-viewer";
import "@iamjariwala/react-doc-viewer/dist/index.css";
import { EditableField } from "./EditableField";
import { useUpdateTaskDescription } from "../hooks/useUpdateTaskDescription";


interface Props {
    taskDetail: TaskDetail
}


export const TaskDetailDataList = ({taskDetail}: Props) => {

    const imageUrl = 'http://192.168.1.31:3000/uploads/images/';
    const documentUrl = 'http://192.168.1.31:3000/uploads/documents/';

    const files = taskDetail?.attachment?.map(item => {
        const isImage = item.file_type?.startsWith('image/');

        return {
            uri: (isImage ? imageUrl : documentUrl) + item.file_name,
            fileName: item.original_name,
            fileType: item.file_type
        };
    }) || [];

    const [activeDocument, setActiveDocument] = useState(files[0]);

    const [open, setOpen] = useState(false)

    const getFileType = (file_type: string) => {
        switch (file_type) {
            case 'image/png':
                return img
            case 'application/pdf':
                return pdf
            case 'application/xlsx':
                return excel
            case 'text/csv':
                return excel
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                return doc
            default:
                return unknown
        }
    }

    const handleViewAttachment = (index: number) => {
        setActiveDocument(files[index]);
        setOpen(true)
    }

    const [statusOpen, setStatusOpen] = useState(false);

    const { updateTaskDescriptionMutation } = useUpdateTaskDescription(taskDetail.task_id);

    const handleUpdateDescription = (value: string) => {
            updateTaskDescriptionMutation({description: value})
    }

    return (
        <DataList.Root orientation="horizontal">
            <DataList.Item>
                <DataList.ItemLabel>
                    <Stack
                        direction={'row'} 
                        alignItems={'center'}
                        gap={'3'}
                    >
                        <FiCircle />
                        Status
                    </Stack>
                </DataList.ItemLabel>
                <DataList.ItemValue>
                    {/* <Stack direction={'row'} alignItems={'center'}>
                        <Text color={getStatusColor(taskDetail?.task_status_name)}>
                            <FiCircle />
                        </Text>
                        <Text textTransform={'capitalize'}>
                            {taskDetail?.task_status_name}
                        </Text>
                    </Stack> */}
                    <Popover.Root 
                        open={statusOpen} 
                        onOpenChange={(e) => setStatusOpen(e.open)}
                        positioning={{ placement: "bottom-start" }}
                    >
                        <Popover.Trigger asChild>
                            <Stack direction={'row'} alignItems={'center'}>
                                <Text color={getStatusColor(taskDetail?.task_status_name)}>
                                    <FiCircle />
                                </Text>
                                <Text textTransform={'capitalize'}>
                                    {taskDetail?.task_status_name}
                                </Text>
                            </Stack>
                        </Popover.Trigger>
                        <Portal>
                            <Popover.Positioner >
                            <Popover.Content>
                                <Popover.Body>
                                This is a popover with the same width as the trigger button
                                </Popover.Body>
                            </Popover.Content>
                            </Popover.Positioner>
                        </Portal>
                        </Popover.Root>
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
                <DataList.ItemLabel>
                    <Stack 
                        direction={'row'} 
                        alignItems={'center'}
                        gap={'3'}
                    >
                        <FiFlag />
                        Priority
                    </Stack>
                </DataList.ItemLabel>
                <DataList.ItemValue>
                    <Badge colorPalette={getPriorityColor(taskDetail?.task_priority_name)}>
                        <FiFlag />
                        {taskDetail.task_priority_name}
                    </Badge>
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
                <DataList.ItemLabel>
                    <Stack 
                        direction={'row'} 
                        alignItems={'center'}
                        gap={'3'}
                    >
                        <FiCalendar />
                        Duration
                    </Stack>
                </DataList.ItemLabel>
                <DataList.ItemValue>
                    <div className="space-x-2!">
                        <span>{DateDisplay(taskDetail?.start_date)}</span>
                        <span>-</span>
                        <span>{DateDisplay(taskDetail?.end_date)}</span>
                        <span>
                            ({DateDifferenceDisplay(taskDetail?.end_date)}) days left
                        </span>
                    </div>
                </DataList.ItemValue>
            </DataList.Item>
            <DataList.Item>
                <DataList.ItemLabel>
                    <Stack 
                        direction={'row'} 
                        alignItems={'center'}
                        gap={'3'}
                    >
                        <FiUsers />
                        Assignee
                    </Stack>
                </DataList.ItemLabel>
                <DataList.ItemValue>
                    <HStack gap="3">
                        <For each={taskDetail.assignees ?? []}>
                            {(user) => (
                            <Avatar.Root 
                                key={user.user_id}
                                shape="full" 
                                size={'xs'}
                                borderColor="bg.subtle"
                                colorPalette={pickPalette(user.user_fullname)}
                            >
                                <Avatar.Fallback name="Segun Adebayo" />
                            </Avatar.Root>
                            )}
                        </For>
                    </HStack>
                </DataList.ItemValue>
            </DataList.Item>

            <DataList.Item 
                // display="flex"
                // flexDirection="column"
                // alignItems="flex-start"
            >
                <DataList.ItemLabel>
                    <Stack 
                        direction={'row'} 
                        alignItems={'center'}
                        gap={'3'}
                    >
                        <FiAlignLeft />
                        Description
                    </Stack>
                </DataList.ItemLabel>
                <DataList.ItemValue>
                   
                   <EditableField 
                        type="text"
                        value={taskDetail.description}
                        onSave={handleUpdateDescription}
                   >
                        {taskDetail.description}
                   </EditableField>
                    
                </DataList.ItemValue>
            </DataList.Item>

            <DataList.Item 
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
            >
                <DataList.ItemLabel>
                    <Stack 
                        direction={'row'} 
                        alignItems={'center'}
                        gap={'3'}
                    >
                        <FiPaperclip />
                        Attachment
                    </Stack>
                </DataList.ItemLabel>
                <DataList.ItemValue className="w-full ">

                    {taskDetail.attachment.length > 0 ? (
                        <Stack className="w-full" gap={3}>
                            <For each={taskDetail.attachment ?? []}>
                                {(item, index) => (
                                    <Box
                                        className="flex items-center gap-3 w-full"
                                        px="2"
                                        py="2"
                                        borderWidth="1px"
                                        borderColor="border.disabled"
                                        rounded={'md'}
                                    >
                                        <div className="h-9 w-9">
                                            <Image
                                                objectFit="cover"
                                                src={getFileType(item.file_type)}
                                                h={'full'}
                                                w={'full'}
                                                alt="img"
                                            />
                                        </div>

                                        <div>
                                            <Text 
                                                fontSize="sm" 
                                                m={0}
                                                className="max-w-50 truncate"
                                            >
                                                {item.original_name}
                                            </Text>
                                            <Text color={'fg.muted'} fontSize={'xs'}>
                                                <FormatByte value={item.size} />
                                            </Text>
                                        </div>

                                        <div className="flex-1 flex gap-2 justify-end">
                                            <Button
                                                size={'xs'}
                                                variant={'ghost'}
                                                onClick={() => handleViewAttachment(index)}
                                            >
                                                <FiEye />
                                            </Button>
                                            <Button
                                                size={'xs'}
                                                variant={'ghost'}
                                            >
                                                <FiDownload />
                                            </Button>
                                        </div>

                                    </Box>
                                )}
                            </For>
                        </Stack>
                    ) : <EmptyList />}

                    <Dialog.Root 
                        size="full" 
                        open={open} 
                        onOpenChange={(e) => setOpen(e.open)}
                    >
                        {/* <Dialog.Trigger asChild>
                            <Button>Open Nested</Button>
                        </Dialog.Trigger> */}
                        <Portal>
                            <Dialog.Backdrop />
                            <Dialog.Positioner>
                            <Dialog.Content background={'bg.subtle'}>
                                {/* <Dialog.Header className="max-w-5xl mx-auto! w-full">
                                    <Dialog.Title>Attachments</Dialog.Title>
                                </Dialog.Header> */}
                                <Dialog.Body >
                                    <div className="max-w-5xl mx-auto!">
                                        <DocViewer
                                            documents={files ?? []}
                                            pluginRenderers={DocViewerRenderers}
                                            activeDocument={activeDocument}
                                        />
                                    </div>
                                </Dialog.Body>
                                 <Dialog.CloseTrigger asChild >
                                    <CloseButton size="sm" />
                                </Dialog.CloseTrigger>
                            </Dialog.Content>
                            </Dialog.Positioner>
                        </Portal>
                    </Dialog.Root>

                </DataList.ItemValue>
                
            </DataList.Item>

        </DataList.Root>
    )

}