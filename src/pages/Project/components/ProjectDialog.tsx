import { Button, CloseButton, Dialog, Field, Fieldset, Input, Portal, Stack, Text, Textarea } from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi"
import { useProjectDialog } from "../hooks/useProjectDialog"
import { useForm, type SubmitHandler } from "react-hook-form"


interface ProjectFormvalues {
  project_id: number | null
  project_name: string
  project_description: string
}

const ProjectDialog = () => {

    const { open, setOpen } = useProjectDialog();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ProjectFormvalues>();

    const onSubmit: SubmitHandler<ProjectFormvalues> = (data) => {
        console.log(data)
    }   

    return (
        <Dialog.Root 
            placement={'center'} 
            size={{ mdDown: "full", md: "lg" }}
            open={open} onOpenChange={(e) => {
                setOpen(e.open)
                reset()
            }}
        >
        <Dialog.Trigger asChild>
            <Button variant="solid" size="xs" >
                <FiPlus />
                Create
            </Button>
        </Dialog.Trigger>
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

                                    <Field.Root>
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
                                    </Field.Root>

                                
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
                            loading={isSubmitting} 
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