import { Button } from "@chakra-ui/react"
import { useProjectTaskDialog } from "../hooks/useProjectTaskDialog";



export const CreateProjectTaskButton = () => {

    const { setOpen } = useProjectTaskDialog();

    return (
        <Button
            size={'xs'} 
            onClick={() => setOpen('create_task')}
        >
            Create
        </Button>
    )
}