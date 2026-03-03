import { Box, Checkbox } from "@chakra-ui/react"
import type { Subtask } from "../../projectTask.model"
import { useCompleteSubtask } from "../../hooks/useCompleteSubTask"


interface Props {
    subtask: Subtask
}

const SubtaskRow = ({ subtask }: Props) => {

    const { 
        completeSubtaskMutation, 
        isPending } = 
    useCompleteSubtask(subtask.task_id);

    const handleCheck = (isCompleted: boolean) => {
        completeSubtaskMutation({
            isCompleted, 
            subtask_id: subtask.subtask_id
        })
    }

    return (
        <Box 
            borderWidth="1px" 
            key={subtask.subtask_id} 
            px="4"
            py="3"
            rounded="md"
        >
            <Checkbox.Root 
                checked={subtask.is_completed === 1}
                onCheckedChange={(e) => handleCheck(!!e.checked)}
                size={'sm'}
                variant={'solid'}
                disabled={isPending}
            >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label 
                    className={subtask.is_completed === 1 ? 'line-through' : ''}
                    color={subtask.is_completed === 1 ? 'fg.muted' : ''}
                >
                    {subtask.subtask_title} 
                </Checkbox.Label>
            </Checkbox.Root>
        </Box>
    )
}

export default SubtaskRow