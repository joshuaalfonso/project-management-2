import { Button, CloseButton, Dialog, Field, Fieldset, Input, Portal, Stack, Text } from "@chakra-ui/react"
import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import { useWorkSpace } from "@/context/workspace/useWorkspace"
import { toaster } from "@/components/ui/toaster"
import { getErrorMessage } from "@/lib/axios"
import TiptapEditor from "@/shared/components/TiptapEdit"
import { useCreateProject } from "./useCreateProject"
import RHFDatePicker from "@/shared/components/RHFDatePicker"
import { useModalStore } from "@/store/modal.store"
import { useProject } from "../project-list/hooks/useProject"
import { useEffect, useMemo } from "react"
import { formatToCalendarDate } from "@/lib/date"
import { useUpdateProject } from "./useUpdateProject"


interface ProjectFormvalues {
  project_id: number | null
  project_name: string
  project_description: string
  start_date: string 
  end_date: string
}

const defaultvalues = {
    project_id: 0,
    project_name: '',
    project_description: '',
    start_date: '',
    end_date: ''
}

const ProjectDialog = () => {

    const type = useModalStore((s) => s.type);
    const closeModal = useModalStore((s) => s.closeModal);
    const selectedProjectId = useModalStore((s) => s.data?.project_id ?? null);

    console.log(selectedProjectId)

    const { projects } = useProject();

    const projectMap = useMemo(() => {
        const map = new Map();
        projects?.forEach(p => map.set(p.project_id, p));
        return map;
    }, [projects]);

    const selectedProject = projectMap.get(selectedProjectId) || null;

    const { activeWorkspace } = useWorkSpace();
    const { createProjectMutation, isCreating } = useCreateProject();
    const { updateProjectMutation, isUpdating } = useUpdateProject();


    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ProjectFormvalues>();

    const isLoading = isSubmitting || isCreating || isUpdating;

    useEffect(() => {
        if (!selectedProject) {
            reset(defaultvalues);
            return;
        }

        reset({
            project_id: selectedProject.project_id,
            project_name: selectedProject.project_name,
            project_description: selectedProject.project_description,
            start_date: formatToCalendarDate(selectedProject.start_date),
            end_date: formatToCalendarDate(selectedProject.end_date),
        });
    }, [selectedProject, reset]);

    const onSubmit: SubmitHandler<ProjectFormvalues> = (data) => {

        const workspace_id = activeWorkspace?.workspace_id ?? 0;
        if (!workspace_id) return;

        const mutate = data.project_id ? updateProjectMutation : createProjectMutation;

        mutate(
            {
                ...data, 
                workspace_id
            },
            {
                onSuccess: (response) => {
                    toaster.create({
                        description: response.message,
                        type: "info",
                        duration: 5000
                    })
                    closeModal()
                    // setOpen('')
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
    

    return (
        <Dialog.Root 
            placement={'center'} 
            size={{ mdDown: "full", md: "lg" }}
            open={type === 'createProject'} 
            onOpenChange={({open}) => {
                if (!open) {
                    closeModal()
                }
            }}
            initialFocusEl={() => null}
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
                        <Dialog.Title>Create Project</Dialog.Title>
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

                                <Fieldset.Content>

                                    <Field.Root>
                                        <Field.Label>Project Name</Field.Label>
                                        <Input
                                            type="text"
                                            autoComplete="off"
                                            {...register("project_name", { required: "Project name is required" })}
                                            tabIndex={-1}
                                        />
                                        {errors.project_name && (
                                        <Text color="fg.error" fontSize="sm">
                                            {errors.project_name.message}
                                        </Text>
                                        )}
                                    </Field.Root>

                                    {/* <Field.Root>
                                        <Field.Label>Description</Field.Label>
                                        <Textarea 
                                            {...register("project_description", { required: "Description is required" })}
                                            tabIndex={-1}
                                        />
                                        {errors.project_description && (
                                            <Text color="fg.error" fontSize="sm">
                                                {errors.project_description.message}
                                            </Text>
                                        )}
                                    </Field.Root> */}

                                    <Field.Root>
                                        <Field.Label>Description</Field.Label>
                                        <div className="w-full">
                                            <Controller
                                                name="project_description"
                                                control={control}
                                                rules={{ required: "Description is required" }}
                                                render={({ field }) => (
                                                     <>
                                                        <TiptapEditor
                                                            value={field.value}
                                                            onChange={field.onChange}
                                                        />
                                                        {errors.project_description && (
                                                            <Text color="fg.error" fontSize="sm" mt={1}>
                                                                {errors.project_description.message}
                                                            </Text>
                                                        )}
                                                     </>
                                                )}
                                            /> 
                                        </div>
                                    </Field.Root>


                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        
                                        <Field.Root>
                                            <div className="w-full">
                                                <RHFDatePicker
                                                    name="start_date"
                                                    label="Start Date"
                                                    control={control}
                                                    errors={errors}
                                                    rules={{ required: "Start date is required" }}
                                                />
                                            </div>
                                        </Field.Root>

                                        <Field.Root>
                                            <div className="w-full">
                                                <RHFDatePicker
                                                    name="end_date"
                                                    label="End Date"
                                                    control={control}
                                                    errors={errors}
                                                    rules={{ required: "End date is required" }}
                                                />
                                            </div>
                                        </Field.Root>

                                    </div>

                                
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
                            loading={isLoading} 
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

export default ProjectDialog