import { For, Stack } from "@chakra-ui/react"
import SubtaskRow from "./SubtaskRow"
import type { Subtask } from "../hooks/projectTask.model"


interface Props {
    subtasks: Subtask[]
}


const SubtaskList = ({subtasks}: Props) => {


  return (
    <Stack gap={'3'}>
        <For
            each={subtasks}
        >
            {(item) => (
                <SubtaskRow subtask={item} key={item.subtask_id} />
            )}
        </For>
    </Stack>
  )


}

export default SubtaskList