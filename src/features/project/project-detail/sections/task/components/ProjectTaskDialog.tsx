import { Avatar, Box, Button, CloseButton, createListCollection, Dialog, Field, Fieldset, FileUpload, Icon, Input, Portal, Select, Span, Stack, Text, Textarea } from "@chakra-ui/react"
// import { FiPlus } from "react-icons/fi"
import { useForm, type SubmitHandler } from "react-hook-form"
// import { toaster } from "@/components/ui/toaster"
// import { getErrorMessage } from "@/lib/axios"
import { useProjectTaskDialog } from "../hooks/useProjectTaskDialog"
import { useTaskPriority } from "@/features/taskPriority/hooks/useTaskPriority"
import { Controller } from "react-hook-form"
import { useParams } from "react-router-dom"
import { useCreateProjectTask } from "../hooks/useCreateProjectTask"
import { toaster } from "@/components/ui/toaster"
import { getErrorMessage } from "@/lib/axios"
import { useWorkspaceMember } from "@/features/WorkspaceMember/hooks/useWorkspaceMember"
// import { HiUpload } from "react-icons/hi"
import { LuUpload } from "react-icons/lu"
// import { TextEditor } from "@/shared/components/TextEditor"


interface TaskFormvalues {
//   project_id: number | null
  title: string
  description: string
  task_priority_id: number
  start_date: string,
  end_date: string,
  assignees: string[],
  attachments: File[]
}


const ProjectTaskDialog = () => {

    const { 
        open, 
        setOpen 
    } = useProjectTaskDialog();

    const { taskPriority } = useTaskPriority();

    const { workspace_members } = useWorkspaceMember();

    const priorityCollection = createListCollection({
        items: taskPriority ?? [],
        itemToString: (item) => item.task_priority_name,
        itemToValue: (item) => String(item.task_priority_id),
    })

    const workspaceMembers = createListCollection({
        items: workspace_members?.workspace_members ?? [],
        itemToString: (item) => item.user_fullname,
        itemToValue: (item) => String(item.user_id),
    })

    const { project_id } = useParams();
    const project_id_number = Number(project_id);

    console.log('task dialog');

    const { 
        createProjectTaskMutation, 
        isCreating 
    } = useCreateProjectTask();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        control
    } = useForm<TaskFormvalues>({
        defaultValues: {
            assignees: []
        }
    });

    const onSubmit: SubmitHandler<TaskFormvalues> = (data) => {

        if (!project_id) return;

        const newData = {
            ...data,
            project_id: project_id_number
        }

        const formData = new FormData();

        formData.append("title", newData.title);
        formData.append("description", newData.description);
        formData.append("start_date", newData.start_date);
        formData.append("end_date", newData.end_date);
        formData.append("project_id", String(newData.project_id));
        formData.append("task_priority_id", String(newData.task_priority_id));

        data.assignees.forEach((id) => {
            formData.append("assignees[]", id);
        });

        Array.from(data.attachments).forEach((file) => {
            formData.append("attachments[]", file);
        });

        // console.log(formData)

        createProjectTaskMutation(
            formData,
            {
                onSuccess: (response) => {
                    toaster.create({
                        description: response.message,
                        type: "info",
                        duration: 5000
                    })
                    setOpen('')
                },
                onError: (error) => {
                    console.error(error)
                    const errorMessage = getErrorMessage(error);
                    toaster.create({
                        description: errorMessage,
                        type: "info",
                        duration: 5000
                    })
                }
            }
        )

        // console.log(data)
    }   
    
    console.log(open)

    return (
        <Dialog.Root 
            scrollBehavior="inside"
            placement={'center'} 
            size={{ mdDown: "full", md: "lg" }}
            open={open === 'create_task'} 
            onOpenChange={() => {
                setOpen('')
                reset()
            }}
        >
        {/* <Dialog.Trigger asChild>
            <Button variant="solid" size="xs" >
                <FiPlus />
                Create
            </Button>
        </Dialog.Trigger> */}
        <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
                <Dialog.Content>

                    <Dialog.Header>
                        <Dialog.Title>Create Task</Dialog.Title>
                    </Dialog.Header>

                    <Dialog.Body>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Fieldset.Root>
                                <Stack>
                                    {/* <Fieldset.Legend fontSize="xl">
                                        Hello! Register to get started.
                                    </Fieldset.Legend> */}
                                    <Fieldset.HelperText>All fields are required.</Fieldset.HelperText>
                                </Stack>

                                <Fieldset.Content gap={'6'}>

                                    <Field.Root>
                                        <Field.Label>Title</Field.Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            {...register("title", { required: "Title name is required" })}
                                            tabIndex={-1}
                                        />
                                        {errors.title && (
                                        <Text color="fg.error" fontSize="sm">
                                            {errors.title.message}
                                        </Text>
                                        )}
                                    </Field.Root>

                                    <Field.Root>
                                        <Field.Label>Description</Field.Label>
                                        <Textarea
                                            {...register("description", { 
                                                required: "Description is required",  
                                                minLength: { 
                                                    value: 8, 
                                                    message: "Should at least 8 characters" 
                                                }, 
                                            })}
                                            tabIndex={-1}
                                        />
                                        {errors.description && (
                                            <Text color="fg.error" fontSize="sm">
                                                {errors.description.message}
                                            </Text>
                                        )}
                                    </Field.Root>


                                    <Field.Root>
                                        <Field.Label>Priority</Field.Label>

                                        <Controller
                                            name="task_priority_id"
                                            control={control}
                                            rules={{ required: "Priority is required" }}
                                            render={({ field }) => (
                                            <Select.Root
                                                collection={priorityCollection}
                                                value={field.value ? [String(field.value)] : []}
                                                onValueChange={(details) => {
                                                    const selectedValue = details.value[0] // string
                                                    field.onChange(Number(selectedValue))  // convert to number
                                                }}
                                                size="md"
                                                width="full"
                                            >
                                                <Select.HiddenSelect />
                                                <Select.Control>
                                                <Select.Trigger>
                                                    <Select.ValueText
                                                        placeholder="Select priority"
                                                        className="capitalize"
                                                    />
                                                </Select.Trigger>
                                                <Select.IndicatorGroup>
                                                    <Select.Indicator />
                                                </Select.IndicatorGroup>
                                                </Select.Control>

                                                <Portal>
                                                <Select.Positioner>
                                                    <Select.Content>
                                                    {priorityCollection.items.map((item) => (
                                                        <Select.Item
                                                        key={item.task_priority_id}
                                                        item={item}
                                                        // IMPORTANT
                                                        className="capitalize"
                                                        >
                                                        {item.task_priority_name}
                                                        <Select.ItemIndicator />
                                                        </Select.Item>
                                                    ))}
                                                    </Select.Content>
                                                </Select.Positioner>
                                                </Portal>
                                            </Select.Root>
                                            )}
                                        />

                                        {errors.task_priority_id && (
                                            <Text color="fg.error" fontSize="sm">
                                            {errors.task_priority_id.message}
                                            </Text>
                                        )}
                                    </Field.Root>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <Field.Root>
                                            <Field.Label>Start Date</Field.Label>
                                            <Input
                                                type="date"
                                                autoComplete="off"
                                                {...register("start_date", { required: "Start date is required" })}
                                                tabIndex={-1}
                                            />
                                            {errors.start_date && (
                                                <Text color="fg.error" fontSize="sm">
                                                    {errors.start_date.message}
                                                </Text>
                                            )}
                                        </Field.Root>

                                        <Field.Root>
                                            <Field.Label>End Date</Field.Label>
                                            <Input
                                                type="date"
                                                autoComplete="off"
                                                {...register("end_date", { required: "End date is required" })}
                                                tabIndex={-1}
                                            />
                                            {errors.end_date && (
                                                <Text color="fg.error" fontSize="sm">
                                                    {errors.end_date.message}
                                                </Text>
                                            )}
                                        </Field.Root>
                                    </div>

                                    <Field.Root invalid={!!errors.attachments}>
                                        <Field.Label>Attachment</Field.Label>

                                        <FileUpload.Root alignItems="stretch" maxFiles={5}>

                                            <FileUpload.HiddenInput
                                                {...register("attachments")}
                                                accept="
                                                    image/png,
                                                    application/pdf,
                                                    application/vnd.ms-excel,
                                                    application/vnd.ms-powerpoint,
                                                    application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
                                                "
                                            />

                                            {/* <FileUpload.Trigger asChild>
                                                <Button variant="outline" size="sm">
                                                    <HiUpload /> Upload file
                                                </Button>
                                            </FileUpload.Trigger>

                                            <FileUpload.List 
                                                showSize 
                                                clearable
                                            /> */}

                                            <FileUpload.Dropzone bg={'bg.subtle'} height="200px">
                                                <Icon size="md" color="fg.muted">
                                                <LuUpload />
                                                </Icon>
                                                <FileUpload.DropzoneContent>
                                                <Box>Drag and drop files here</Box>
                                                <Box color="fg.muted">images, excel and pdf up to 5MB</Box>
                                                </FileUpload.DropzoneContent>
                                            </FileUpload.Dropzone>

                                            <FileUpload.List 
                                                showSize
                                                clearable
                                            />

                                        </FileUpload.Root>

                                        {errors.attachments && (
                                            <Text color="fg.error" fontSize="sm">
                                                {errors.attachments.message}
                                            </Text>
                                        )}
                                        </Field.Root>

                                    <Controller
                                        name="assignees"
                                        control={control}
                                        rules={{
                                            validate: (value) =>
                                            value && value.length > 0 ? true : "Please select at least one assignee",
                                        }}
                                        render={({ field }) => (
                                            <Field.Root>
                                            <Field.Label>Assignees</Field.Label>

                                            <Select.Root
                                                multiple
                                                collection={workspaceMembers}
                                                size="sm"
                                                width="full"
                                                value={field.value ?? []}
                                                onValueChange={(details) => field.onChange(details.value)}
                                            >
                                                <Select.HiddenSelect />
                                                <Select.Control>
                                                <Select.Trigger>
                                                    <Select.ValueText placeholder="Select assignees" />
                                                </Select.Trigger>
                                                <Select.IndicatorGroup>
                                                    <Select.Indicator />
                                                </Select.IndicatorGroup>
                                                </Select.Control>

                                                <Portal>
                                                <Select.Positioner>
                                                    <Select.Content>
                                                    {workspaceMembers.items.map((member) => (
                                                        <Select.Item
                                                        item={member}
                                                        key={member.user_id}
                                                        >
                                                        <div className="flex gap-2 items-center">
                                                            <Avatar.Root shape="rounded" size="xs" colorPalette="blue">
                                                            <Avatar.Image src={''} alt={member.user_fullname} />
                                                            <Avatar.Fallback name={member.user_fullname} />
                                                            </Avatar.Root>

                                                            <Stack gap="0">
                                                            <Select.ItemText textTransform="capitalize">
                                                                {member.user_fullname}
                                                            </Select.ItemText>
                                                            <Span color="fg.muted" textStyle="xs">
                                                                {member.workspace_role}
                                                            </Span>
                                                            </Stack>
                                                        </div>

                                                        <Select.ItemIndicator />
                                                        </Select.Item>
                                                    ))}
                                                    </Select.Content>
                                                </Select.Positioner>
                                                </Portal>
                                            </Select.Root>

                                            {errors.assignees && (
                                            <Text color="fg.error" fontSize="sm">
                                                {errors.assignees.message}
                                            </Text>
                                        )}
                                            </Field.Root>
                                        )}
                                    />

                                
                                </Fieldset.Content> 

                            
                            </Fieldset.Root>
                        </form>
                    </Dialog.Body>

                    <Dialog.Footer>
                        <Dialog.ActionTrigger asChild>
                            <Button 
                                variant="outline"
                                size={'sm'}
                            >
                                Cancel
                            </Button>
                        </Dialog.ActionTrigger>
                        <Button 
                            loading={isSubmitting || isCreating} 
                            onClick={handleSubmit(onSubmit)}
                            size={'sm'}
                        >
                            Create
                        </Button>
                    </Dialog.Footer>

                    <Dialog.CloseTrigger asChild>

                    <CloseButton size="sm" />

                    </Dialog.CloseTrigger>

                </Dialog.Content>
            </Dialog.Positioner>
        </Portal>
        </Dialog.Root>
    )
}

export default ProjectTaskDialog