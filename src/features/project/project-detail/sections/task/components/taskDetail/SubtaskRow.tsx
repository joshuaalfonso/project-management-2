import { Box, Checkbox } from "@chakra-ui/react"
import type { Subtask } from "../../projectTask.model"
import { useState } from "react"


interface Props {
    subtask: Subtask
}

const SubtaskRow = ({ subtask }: Props) => {

    const [checked, setChecked] = useState(false)

    return (
        <Box 
            borderWidth="1px" 
            key={subtask.subtask_id} 
            px="4"
            py="3"
            rounded="md"
        >
            <Checkbox.Root 
                checked={checked}
                onCheckedChange={(e) => setChecked(!!e.checked)}
                size={'sm'}
                variant={'solid'}
            >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label 
                    className={checked ? 'line-through' : ''}
                    color={checked ? 'fg.muted' : ''}
                >
                    {subtask.subtask_title}
                </Checkbox.Label>
            </Checkbox.Root>
        </Box>
    )
}

export default SubtaskRow