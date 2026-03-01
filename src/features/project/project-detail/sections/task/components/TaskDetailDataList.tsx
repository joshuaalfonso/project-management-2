import type { TaskDetail } from "../projectTask.model"
import { FiAlignLeft, FiCalendar, FiCircle, FiDownload, FiFlag, FiPaperclip, FiUsers } from "react-icons/fi";
import { getPriorityColor, getStatusColor, pickPalette } from "@/lib/task";
import { DateDifferenceDisplay, DateDisplay } from "@/lib/dateFormat";
import { EmptyList } from "@/shared/components/EmptyState";
import { Avatar, Badge, Box, Button, DataList, For, FormatByte, HStack, Image, Stack, Text } from "@chakra-ui/react";
import img from '@/assets/images/png.png';
import pdf from '@/assets/images/pdf2.png';
import excel from '@/assets/images/xls.png';
import unknown from '@/assets/images/unknown.png';



interface Props {
    taskDetail: TaskDetail
}


export const TaskDetailDataList = ({taskDetail}: Props) => {

    const getFileType = (file_type: string) => {
        switch (file_type) {
            case 'image/png':
                return img
            case 'application/pdf':
                return pdf
            case 'application/xlsx':
                return excel
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                return excel
            default:
                return unknown
        }
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
                    <Stack direction={'row'} alignItems={'center'}>
                        <Text color={getStatusColor(taskDetail?.task_status_name)}>
                            <FiCircle />
                        </Text>
                        <Text textTransform={'capitalize'}>
                            {taskDetail?.task_status_name}
                        </Text>
                    </Stack>
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
                    {/* <Box 
                        p="2"
                        borderWidth="1px"
                        borderColor="border.disabled"
                        rounded={'md'}
                        w="full"
                    > */}
                        {taskDetail.description}
                    {/* </Box> */}
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
                                {(item) => (
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

                                        <div className="flex-1 flex justify-end">
                                            <Button
                                                size={'xs'}
                                                variant={'ghost'}
                                            >
                                                <FiDownload />
                                                download
                                            </Button>
                                        </div>

                                    </Box>
                                )}
                            </For>
                        </Stack>
                    ) : <EmptyList />}

                </DataList.ItemValue>
            </DataList.Item>

        </DataList.Root>
    )

}